const MAIN = document.getElementById('main-content');
const SEARCH = document.getElementById('search');
const TMDB_API_KEY = '4f599baa15d072c9de346b2816a131b8';
const COLLECTIONS = [
  { key: 'movies', name: 'Movies', icon: '<i class="fas fa-film"></i>' },
  { key: 'tv',     name: 'TV',     icon: '<i class="fas fa-tv"></i>' },
];
let CURRENT_INDEX = 0;
let ITEMS = [];
let PAGE = 1;
let TOTAL_PAGES = 100;
let IS_LOADING = false;
let SEARCH_QUERY = "";
let GRID_MODE = "movies";
const WATCHLIST_KEY = 'tt_watchlist';

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
  btn.setAttribute('aria-label',
    document.body.classList.contains('light') ? "Switch to dark mode" : "Switch to light mode"
  );
}
setTheme(localStorage.getItem('tt_theme') === 'light');
setTimeout(updateThemeBtn, 1);
document.getElementById('theme-toggle-btn').onclick = toggleTheme;
function escapeHtml(str) {
  return str ? str.replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[m]) : '';
}
function getWatchlist() {
  let list = localStorage.getItem(WATCHLIST_KEY);
  return list ? JSON.parse(list) : { movies: [], tv: [] };
}
function saveWatchlist(list) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
}
function isInWatchlist(type, id) {
  const list = getWatchlist();
  return list[type] && list[type].some(item => item.id == id);
}
function addToWatchlist(type, item) {
  const list = getWatchlist();
  if (!list[type]) list[type] = [];
  if (!list[type].some(i => i.id == item.id)) {
    list[type].push({id: item.id, title: item.title, thumb: item.thumb, year: item.year});
    saveWatchlist(list);
    return true;
  }
  return false;
}
function removeFromWatchlist(type, id) {
  const list = getWatchlist();
  if (list[type]) {
    list[type] = list[type].filter(i => i.id != id);
    saveWatchlist(list);
    return true;
  }
  return false;
}
function showWatchlistMenu(e, type, item) {
  e.preventDefault();
  const oldMenu = document.getElementById('watchlist-context-menu');
  if (oldMenu) oldMenu.remove();
  const exists = isInWatchlist(type, item.id);
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
  menu.textContent = exists ? 'Remove from watchlist' : 'Add to watchlist';
  menu.onclick = function () {
    if (exists) {
      removeFromWatchlist(type, item.id);
      showNotification('Removed from watchlist', 'success');
    } else {
      addToWatchlist(type, item);
      showNotification('Added to watchlist', 'success');
    }
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
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);
function setCollection(idx, noPush) {
  CURRENT_INDEX = idx;
  PAGE = 1;
  ITEMS = [];
  SEARCH.value = '';
  TOTAL_PAGES = 100;
  GRID_MODE = COLLECTIONS[CURRENT_INDEX].key;
  SEARCH_QUERY = "";
  updateSlider();
  MAIN.innerHTML = `<div class="grid">Loading...</div>`;
  loadNextPage(true);
  if (!noPush) history.replaceState({}, '', `index.html?tab=${COLLECTIONS[CURRENT_INDEX].key}`);
}
function updateSlider() {
  const slider = document.getElementById('slider-toggle');
  slider.innerHTML = COLLECTIONS.map((c, i) =>
    `<button class="slider-option${i === CURRENT_INDEX ? ' active' : ''}"
      onclick="setCollection(${i})" type="button" aria-pressed="${i === CURRENT_INDEX}">
      ${c.icon}
    </button>`
  ).join('');
}
window.setCollection = setCollection;
async function loadNextPage() {
  if (IS_LOADING || (PAGE > TOTAL_PAGES)) return;
  IS_LOADING = true;
  let url = "";
  let isMovie = (COLLECTIONS[CURRENT_INDEX].key === 'movies');
  if (SEARCH_QUERY) {
    url = `https://api.themoviedb.org/3/search/${isMovie ? "movie" : "tv"}?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(SEARCH_QUERY)}&page=${PAGE}`;
  } else {
    url = `https://api.themoviedb.org/3/${isMovie ? "movie/popular" : "tv/popular"}?api_key=${TMDB_API_KEY}&language=en-US&page=${PAGE}`;
  }
  const res = await fetch(url);
  if (!res.ok) return;
  const data = await res.json();
  TOTAL_PAGES = data.total_pages || 100;
  if (isMovie) {
    ITEMS.push(...(data.results || []).map(m => ({
      id: m.id,
      title: m.title,
      year: m.release_date ? m.release_date.slice(0,4) : '',
      rating: m.vote_average ? m.vote_average.toFixed(1) : 'N/A',
      url: `player.html?type=movie&id=${m.id}`,
      thumb: m.poster_path ? `https://image.tmdb.org/t/p/w500/${m.poster_path}` : '',
    })));
  } else {
    ITEMS.push(...(data.results || []).map(s => ({
      id: s.id,
      title: s.name,
      year: s.first_air_date ? s.first_air_date.slice(0,4) : '',
      rating: s.vote_average ? s.vote_average.toFixed(1) : 'N/A',
      url: `player.html?type=tv&id=${s.id}&season=1&episode=1`,
      thumb: s.poster_path ? `https://image.tmdb.org/t/p/w500/${s.poster_path}` : '',
    })));
  }
  renderGrid(ITEMS);
  IS_LOADING = false;
  PAGE += 1;
}
window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1000)) {
    loadNextPage();
  }
};
function renderGrid(list) {
  let filtered = list;
  const q = (SEARCH.value || "").trim().toLowerCase();
  if (q) {
    filtered = list.filter(v => (v.title && v.title.toLowerCase().includes(q)));
  }
  const html = `<div class="grid">` + filtered.map((v) => `
      <div class="card card-poster" style="position:relative;">
        <div class="thumb thumb-poster-bg">
          <div class="play-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48" height="48">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <div class="rating">${v.rating}</div>
          ${v.thumb
            ? `<img class="thumb-poster" loading="lazy" src="${v.thumb}" alt="Poster" />`
            : `<div class="thumb-poster thumb-poster-placeholder">${COLLECTIONS[CURRENT_INDEX].icon}</div>`}
          <div class="thumb-cover"
               data-url="${v.url}"
               style="position:absolute;inset:0;z-index:2;cursor:pointer;background:transparent"></div>
        </div>
      </div>
  `).join('') + `</div>`;
  MAIN.innerHTML = html || "<div>No items found.</div>";
}
MAIN.addEventListener('click', function(e) {
  if (IS_LOADING) return;
  let url = e.target.closest('.thumb-cover')?.dataset.url;
  if (!url) url = e.target.closest('.card-info .title')?.dataset.url;
  if (url) {
    window.location.href = url;
    e.stopPropagation(); e.preventDefault();
  }
});
MAIN.addEventListener('click', function(e) {
  if (IS_LOADING) return;
  if (e.target.closest('.play-icon')) {
    let card = e.target.closest('.card');
    let url = card?.querySelector('.thumb-cover')?.dataset.url;
    if (url) {
      window.location.href = url;
      e.stopPropagation();
      e.preventDefault();
      return;
    }
  }
  let url = e.target.closest('.thumb-cover')?.dataset.url;
  if (!url) url = e.target.closest('.card-info .title')?.dataset.url;
  if (url) {
    window.location.href = url;
    e.stopPropagation();
    e.preventDefault();
  }
});
MAIN.addEventListener('contextmenu', function(e) {
  const card = e.target.closest('.card.card-poster');
  if (!card) return;
  const poster = card.querySelector('.thumb-cover');
  if (!poster) return;
  let url = poster.dataset.url;
  if (!url) return;
  const idMatch = url.match(/id=([0-9]+)/);
  let id = idMatch ? parseInt(idMatch[1]) : null;
  if (!id) return;
  const idx = ITEMS.findIndex(v => parseInt(v.id) === id);
  if (idx < 0) return;
  let item = ITEMS[idx];
  let type = GRID_MODE;
  showWatchlistMenu(e, type, item);
});
SEARCH.addEventListener('input', function() {
  SEARCH_QUERY = this.value.trim();
  PAGE = 1;
  ITEMS = [];
  MAIN.innerHTML = `<div class="grid">Loading...</div>`;
  loadNextPage();
});
document.getElementById('search-btn').addEventListener('click', function() {
  SEARCH_QUERY = SEARCH.value.trim();
  PAGE = 1;
  ITEMS = [];
  MAIN.innerHTML = `<div class="grid">Loading...</div>`;
  loadNextPage();
});
window.onload = function() {
  const params = new URLSearchParams(location.search);
  const tab = params.get('tab');
  if (tab === 'tv') setCollection(1, true); else setCollection(0, true);
};
