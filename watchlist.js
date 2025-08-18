const MAIN = document.getElementById('watchlist-grid');
const WATCHLIST_KEY = 'tt_watchlist';
const COLLECTIONS = [
  { key: 'movies', name: 'Movies', icon: '<i class="fas fa-film"></i>' },
  { key: 'tv', name: 'TV Shows', icon: '<i class="fas fa-tv"></i>' }
];

let CURRENT_TAB = 'movies';

function setTheme(light) {
  document.body.className = light ? 'light' : '';
  localStorage.setItem('tt_theme', light ? 'light' : 'dark');
}
function toggleTheme() {
  setTheme(!document.body.classList.contains('light'));
  updateThemeBtn();
}
function updateThemeBtn() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.innerHTML = document.body.classList.contains('light')
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
}
setTheme(localStorage.getItem('tt_theme') === 'light');
setTimeout(updateThemeBtn, 1);
document.getElementById('theme-toggle-btn').onclick = toggleTheme;

function getWatchlist() {
  let list = localStorage.getItem(WATCHLIST_KEY);
  return list ? JSON.parse(list) : { movies: [], tv: [] };
}
function saveWatchlist(list) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
}
function removeFromWatchlist(type, id) {
  const list = getWatchlist();
  if (list[type]) {
    list[type] = list[type].filter(i => i.id != id);
    saveWatchlist(list);
    renderWatchlist();
    showNotification('Removed from watchlist', 'success');
  }
}
function escapeHtml(str) {
  return str ? str.replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[m]) : '';
}
function showWatchlistMenu(e, type, item) {
  e.preventDefault();
  const oldMenu = document.getElementById('watchlist-context-menu');
  if (oldMenu) oldMenu.remove();
  const menu = document.createElement('div');
  menu.id = 'watchlist-context-menu';
  menu.style.position = 'fixed';
  menu.style.top = e.clientY + 'px';
  menu.style.left = e.clientX + 'px';
  menu.style.background = 'var(--card-bg)';
  menu.style.color = 'var(--text)';
  menu.style.border = '2px solid var(--accent)';
  menu.style.borderRadius = '8px';
  menu.style.padding = '0.7em 1.2em';
  menu.style.cursor = 'pointer';
  menu.style.zIndex = '1000';
  menu.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
  menu.style.fontWeight = '500';
  menu.style.userSelect = 'none';
  menu.textContent = 'Remove from watchlist';
  menu.onclick = function () {
    removeFromWatchlist(type, item.id);
    menu.remove();
  };
  document.body.appendChild(menu);
  const rect = menu.getBoundingClientRect();
  if (rect.right > window.innerWidth) {
    menu.style.left = (e.clientX - rect.width) + 'px';
  }
  if (rect.bottom > window.innerHeight) {
    menu.style.top = (e.clientY - rect.height) + 'px';
  }
}
document.addEventListener('click', function () {
  const menu = document.getElementById('watchlist-context-menu');
  if (menu) menu.remove();
});
function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.background = type === 'success' ? '#4CAF50' : 'var(--accent)';
  notification.style.color = 'white';
  notification.style.padding = '1em 1.5em';
  notification.style.borderRadius = '8px';
  notification.style.zIndex = '1002';
  notification.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
  notification.style.fontWeight = '500';
  notification.style.animation = 'slideIn 0.3s ease';
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(function () {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(function () { notification.remove(); }, 300);
  }, 2000);
}

function renderSliderToggle() {
  const slider = document.getElementById('watchlist-slider');
  slider.innerHTML = COLLECTIONS.map((c, i) =>
    `<button class="slider-option${c.key === CURRENT_TAB ? ' active' : ''}"
      onclick="showWatchlistTab('${c.key}')" type="button" aria-pressed="${c.key === CURRENT_TAB}">
      ${c.icon}
    </button>`
  ).join('');
}
window.showWatchlistTab = function(tab) {
  CURRENT_TAB = tab;
  renderSliderToggle();
  renderWatchlist();
}

function renderWatchlist() {
  const list = getWatchlist();
  const items = list[CURRENT_TAB] || [];
  if (!items.length) {
    MAIN.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3em 1em;color:var(--gray);">No ${CURRENT_TAB === 'movies' ? 'movies' : 'TV shows'} in your watchlist.</div>`;
    return;
  }
  MAIN.innerHTML = items.map(v => `
    <div class="card card-poster" style="position:relative;" data-url="${CURRENT_TAB === 'movies' ? `player.html?type=movie&id=${v.id}` : `player.html?type=tv&id=${v.id}&season=1&episode=1`}">
      <div class="thumb thumb-poster-bg">
        ${v.thumb
          ? `<img class="thumb-poster" loading="lazy" src="${v.thumb}" alt="Poster" />`
          : `<div class="thumb-poster thumb-poster-placeholder">${COLLECTIONS.find(c => c.key === CURRENT_TAB).icon}</div>`}
        <div class="thumb-cover" style="position:absolute;inset:0;z-index:2;cursor:pointer;background:transparent"></div>
      </div>
    </div>
  `).join('');
}

MAIN.addEventListener('click', function(e) {
  const card = e.target.closest('.card-poster');
  if (card) {
    const url = card.getAttribute('data-url');
    if (url) window.location.href = url;
  }
});

MAIN.addEventListener('contextmenu', function(e) {
  const card = e.target.closest('.card.card-poster');
  if (!card) return;
  const poster = card.querySelector('.thumb-cover');
  if (!poster) return;
  let url = card.getAttribute('data-url');
  if (!url) return;
  const idMatch = url.match(/id=([0-9]+)/);
  let id = idMatch ? parseInt(idMatch[1]) : null;
  if (!id) return;
  const list = getWatchlist();
  const items = list[CURRENT_TAB] || [];
  const item = items.find(v => parseInt(v.id) === id);
  if (!item) return;
  showWatchlistMenu(e, CURRENT_TAB, item);
});

window.onload = function() {
  renderSliderToggle();
  renderWatchlist();
};
