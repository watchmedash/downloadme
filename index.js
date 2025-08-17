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

// --- THEME TOGGLE LOGIC ---
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
      url: `player.html?type=movie&id=${m.id}`,
      thumb: m.poster_path ? `https://image.tmdb.org/t/p/w500/${m.poster_path}` : '',
    })));
  } else {
    ITEMS.push(...(data.results || []).map(s => ({
      id: s.id,
      title: s.name,
      year: s.first_air_date ? s.first_air_date.slice(0,4) : '',
      url: `player.html?type=tv&id=${s.id}&season=1&episode=1`,
      thumb: s.poster_path ? `https://image.tmdb.org/t/p/w500/${s.poster_path}` : '',
    })));
  }
  renderGrid(ITEMS);
  IS_LOADING = false;
  PAGE += 1;
}

// Infinite scroll
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
          ${v.thumb
            ? `<img class="thumb-poster" loading="lazy" src="${v.thumb}" alt="Poster" />`
            : `<div class="thumb-poster thumb-poster-placeholder">${COLLECTIONS[CURRENT_INDEX].icon}</div>`}
          <div class="thumb-cover"
               data-url="${v.url}"
               style="position:absolute;inset:0;z-index:2;cursor:pointer;background:transparent"></div>
        </div>
        <div class="card-info">
          <div class="title" data-url="${v.url}">${escapeHtml(v.title || 'Untitled')}</div>
          <div class="tags">${v.year ? `<i class="fa fa-calendar"></i> ${v.year}` : ''}</div>
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
  // Optionally, auto-restore tab from query param:
  const params = new URLSearchParams(location.search);
  const tab = params.get('tab');
  if (tab === 'tv') setCollection(1, true); else setCollection(0, true);
};
