const MAIN = document.getElementById('main-content');
const TMDB_API_KEY = '4f599baa15d072c9de346b2816a131b8';

const COLLECTIONS = [
  { key: 'movies', icon: '<i class="fas fa-film"></i>' },
  { key: 'tv',     icon: '<i class="fas fa-tv"></i>' },
];

function getQuery(name, def = null) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name) || def;
}
function updateSlider() {
  const type = getQuery('type');
  const slider = document.getElementById('slider-toggle');
  slider.innerHTML = [
    `<a class="slider-option${type === 'movie' ? ' active' : ''}" href="index.html?tab=movies" style="text-decoration:none">${COLLECTIONS[0].icon}</a>`,
    `<a class="slider-option${type === 'tv'    ? ' active' : ''}" href="index.html?tab=tv" style="text-decoration:none">${COLLECTIONS[1].icon}</a>`
  ].join('');
}
updateSlider();

// --- THEME TOGGLE ---

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

// --- PLAYER LOGIC ---
const TYPE = getQuery('type');
const TMDBID = getQuery('id');
let season = parseInt(getQuery('season', 1), 10);
let episode = parseInt(getQuery('episode', 1), 10);

function escapeHtml(str) {
  return str ? str.replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[m]) : '';
}

if (TYPE === 'movie') {
  (async function() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${TMDBID}?api_key=${TMDB_API_KEY}&language=en-US`);
    const m = await res.json();
    const creditsRes = await fetch(`https://api.themoviedb.org/3/movie/${TMDBID}/credits?api_key=${TMDB_API_KEY}&language=en-US`);
    const credits = await creditsRes.json();
    const director = (credits.crew || []).find(c => c.job === "Director");
    const castList = (credits.cast || []).slice(0, 7);

    const similarRes = await fetch(`https://api.themoviedb.org/3/movie/${TMDBID}/similar?api_key=${TMDB_API_KEY}&language=en-US`);
    const similarJson = await similarRes.json();
    const relatedMovies = (similarJson.results || []).slice(0, 7);

    const servers = [
      {name: 'Server 1',  url: `https://www.2embed.cc/embed/${TMDBID}`},
      {name: 'Server 2',  url: `https://player.vidpro.top/embed/movie/${TMDBID}`},
      {name: 'Server 3',  url: `https://vidsrc.me/embed/movie/${TMDBID}`},
      {name: 'Server 4',  url: `https://vidjoy.pro/embed/movie/${TMDBID}`},
      {name: 'Server 5',  url: `https://moviesapi.to/movie/${TMDBID}`},
      {name: 'Server 6',  url: `https://vidsrc.vip/embed/movie/${TMDBID}`},
      {name: 'Server 7',  url: `https://multiembed.mov/directstream.php?video_id=${TMDBID}&tmdb=1`},
      {name: 'Server 8',  url: `https://vidlink.pro/movie/${TMDBID}`},
      {name: 'Server 9',  url: `https://player.videasy.net/movie/${TMDBID}`},
      {name: 'Server 10',  url: `https://vidfast.pro/movie/${TMDBID}?autoPlay=true`},
      {name: 'Server 11',  url: `https://player.vidzee.wtf/embed/movie/${TMDBID}?server=1`},
      {name: 'Server 12',  url: `https://vidsrc.rip/embed/movie/${TMDBID}`},
      {name: 'Server 13',  url: `https://player.autoembed.cc/embed/movie/${TMDBID}`},
      {name: 'Server 14',  url: `https://iframe.pstream.org/embed/tmdb-movie-${TMDBID}`},
      {name: 'Server 15',  url: `https://player.vidsrc.co/embed/movie/${TMDBID}`},
    ];

    function renderMoviePlayer(selectedIdx = 0) {
      MAIN.innerHTML = `
        <div class="player-layout">
          <div class="player-main">
            <div class="player-controls-row" style="margin-bottom:1em">
              <div class="dropdowns">
                <label for="server-dd">Server:</label>
                <select id="server-dd" style="min-width:110px;">
                  ${servers.map((srv, i) =>
                    `<option value="${i}"${i===selectedIdx?' selected':''}>${escapeHtml(srv.name)}</option>`
                  ).join("")}
                </select>
              </div>
            </div>
            <div class="player-box">
              <iframe id="player-iframe"
                width="100%"
                height="100%"
                src="${servers[selectedIdx].url}?autoplay=1&rel=0"
                frameborder="0"
                allowfullscreen
                sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
                referrerpolicy="no-referrer"></iframe>
            </div>
            <button class="player-back-btn" onclick="goHome()">
              <i class="fas fa-arrow-left"></i> Back
            </button>
            <div class="player-title">${escapeHtml(m.title)}</div>
            <div class="player-tags">${(m.genres||[]).map(g=>`<i class="fa fa-hashtag"></i> ${escapeHtml(g.name)}`).join(' ')} ${m.release_date ? '('+m.release_date.slice(0,4)+')' : '' }</div>
            <div class="details-section">
              ${m.overview ? `<div class="details-plot"><b>Plot:</b> ${escapeHtml(m.overview)}</div>` : ""}
              ${director ? `<div class="details-director"><b>Director:</b> ${escapeHtml(director.name)}</div>` : ""}
              ${castList.length ? `<div class="details-cast"><b>Cast:</b> ${castList.map(c=>escapeHtml(c.name)).join(', ')}</div>` : ""}
            </div>
          </div>
          ${
            relatedMovies.length
              ? `<div class="related">
                    <div class="related-title"><i class="fas fa-clone" style="color:var(--accent);"></i> Related Movies</div>
                    <div class="related-list">
                      ${relatedMovies.map(mv => `
                        <div class="related-card" onclick="window.location='player.html?type=movie&id=${mv.id}'" style="cursor:pointer;">
                          ${mv.poster_path ? `<img src="https://image.tmdb.org/t/p/w200${mv.poster_path}" alt="Poster" loading="lazy" style="width:65px;border-radius:6px;margin-right:1em;">` : ""}
                          <div class="related-info">
                            <div class="title">${escapeHtml(mv.title)}</div>
                            <div class="tags">${mv.release_date ? `<i class="fa fa-calendar"></i> ${mv.release_date.slice(0,4)}` : ''}</div>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                 </div>`
              : ""
          }
        </div>
      `;
      document.getElementById('server-dd').onchange = ev => {
        const idx = parseInt(ev.target.value, 10);
        const iframe = document.getElementById('player-iframe');
        iframe.src = servers[idx].url + '?autoplay=1&rel=0';
      };
      window.scrollTo(0,0);
    }
    renderMoviePlayer(0);
  })();
}
else if (TYPE === 'tv') {
  let globalShowObj = null;
  let globalReleasedEpisodes = [];
  async function loadAndRender() {
    const showRes = await fetch(`https://api.themoviedb.org/3/tv/${TMDBID}?api_key=${TMDB_API_KEY}&language=en-US`);
    globalShowObj = await showRes.json();
    const allSeasons = globalShowObj.seasons.filter(s => s.season_number && s.season_number > 0);

    const creditsRes = await fetch(`https://api.themoviedb.org/3/tv/${TMDBID}/credits?api_key=${TMDB_API_KEY}&language=en-US`);
    const credits = await creditsRes.json();
    const castList = (credits.cast || []).slice(0, 7);
    const creators = (globalShowObj.created_by || []).map(c => c.name).join(', ');

    const seasonRes = await fetch(`https://api.themoviedb.org/3/tv/${TMDBID}/season/${season}?api_key=${TMDB_API_KEY}&language=en-US`);
    const seasonObj = await seasonRes.json();
    globalReleasedEpisodes = seasonObj.episodes.filter(e => e.air_date && new Date(e.air_date) <= new Date());

    if (!globalReleasedEpisodes.some(e => e.episode_number === episode))
      episode = globalReleasedEpisodes[0] ? globalReleasedEpisodes[0].episode_number : 1;

    const relatedEpisodes = globalReleasedEpisodes.filter(e => e.episode_number !== episode);
    const relatedHtml = relatedEpisodes.length
      ? `<div class="related">
            <div class="related-title"><i class="fas fa-clone" style="color:var(--accent);"></i> Related Episodes</div>
            <div class="related-list">
              ${relatedEpisodes.map(ep => `
                <div class="related-card" style="cursor:pointer" onclick="goToEpisode(${ep.season_number},${ep.episode_number})">
                  ${
                    ep.still_path
                      ? `<img src="https://image.tmdb.org/t/p/w300${ep.still_path}" alt="Episode still" loading="lazy" style="width:100px;border-radius:8px;margin-right:0.9em;">`
                      : ""
                  }
                  <div class="related-info">
                    <div class="title">S${ep.season_number}E${ep.episode_number}: ${escapeHtml(ep.name)}</div>
                    <div class="tags"><i class="fa fa-calendar"></i> ${ep.air_date || ''}</div>
                  </div>
                </div>
              `).join('')}
            </div>
         </div>`
      : '';

    MAIN.innerHTML = `
      <div class="player-layout">
        <div class="player-main">
          <div class="player-controls-row">
            <div class="dropdowns">
              <label for="season-dd">Season:</label>
              <select id="season-dd">
                ${allSeasons.map(s =>
                  `<option value="${s.season_number}"${s.season_number==season?' selected':''}>${s.season_number}</option>`
                ).join('')}
              </select>
              <label for="episode-dd">Episode:</label>
              <select id="episode-dd">
                ${globalReleasedEpisodes.map(e =>
                  `<option value="${e.episode_number}"${e.episode_number==episode?' selected':''}>
                    ${e.episode_number}: ${escapeHtml(e.name)}
                  </option>`
                ).join('')}
              </select>
            </div>
            <div class="prevnext">
              <button id="prev-btn"><i class="fas fa-arrow-left"></i></button>
              <button id="next-btn"><i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
          <div class="player-box">
            <iframe width="100%"
              height="100%"
              src="https://www.2embed.cc/embedtv/${TMDBID}&s=${season}&e=${episode}"
              frameborder="0"
              allowfullscreen
              sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
              referrerpolicy="no-referrer"></iframe>
          </div>
          <button class="player-back-btn" onclick="goHome()">
            <i class="fas fa-arrow-left"></i> Back
          </button>
          <div class="player-title" style="margin-top:1.3em">${escapeHtml(globalShowObj.name)}</div>
          <div class="player-tags">${(globalShowObj.genres||[]).map(t => `<i class="fa fa-hashtag"></i> ${escapeHtml(t.name)}`).join(' ')} (${globalShowObj.first_air_date ? globalShowObj.first_air_date.slice(0,4) : ''})</div>
          <div class="details-section">
            ${globalShowObj.overview ? `<div class="details-plot"><b>Plot:</b> ${escapeHtml(globalShowObj.overview)}</div>` : ""}
            ${creators ? `<div class="details-director"><b>Creator:</b> ${escapeHtml(creators)}</div>` : ""}
            ${castList.length ? `<div class="details-cast"><b>Cast:</b> ${castList.map(c=>escapeHtml(c.name)).join(', ')}</div>` : ""}
          </div>
        </div>
        ${relatedHtml}
      </div>
    `;
    document.getElementById('season-dd').addEventListener('change', (ev) => {
      season = parseInt(ev.target.value,10);
      episode = 1;
      loadAndRender();
    });
    document.getElementById('episode-dd').addEventListener('change', (ev) => {
      episode = parseInt(ev.target.value,10);
      loadAndRender();
    });
    document.getElementById('prev-btn').onclick = () => navigateEpisode(-1);
    document.getElementById('next-btn').onclick = () => navigateEpisode(1);
    window.scrollTo(0,0);
  }
  async function navigateEpisode(dir) {
    let idx = globalReleasedEpisodes.findIndex(e => e.episode_number === episode);
    if (dir === -1 && idx > 0) {
      episode = globalReleasedEpisodes[idx-1].episode_number;
      loadAndRender();
    } else if (dir === 1 && idx < globalReleasedEpisodes.length-1) {
      episode = globalReleasedEpisodes[idx+1].episode_number;
      loadAndRender();
    } else if (dir === -1 && season > 1) {
      season -= 1;
      const prevSeasonRes = await fetch(`https://api.themoviedb.org/3/tv/${TMDBID}/season/${season}?api_key=${TMDB_API_KEY}&language=en-US`);
      const prevSeasonObj = await prevSeasonRes.json();
      const prevReleased = prevSeasonObj.episodes.filter(e => e.air_date && new Date(e.air_date) <= new Date());
      episode = prevReleased.length ? prevReleased[prevReleased.length-1].episode_number : 1;
      loadAndRender();
    } else if (dir === 1) {
      const showRes = await fetch(`https://api.themoviedb.org/3/tv/${TMDBID}?api_key=${TMDB_API_KEY}&language=en-US`);
      const showJson = await showRes.json();
      const allSeasons = showJson.seasons.filter(s => s.season_number && s.season_number > 0);
      const maxSeason = Math.max(...allSeasons.map(s=>s.season_number));
      if (season < maxSeason) {
        season += 1;
        episode = 1;
        await loadAndRender();
      }
    }
  }
  window.goToEpisode = function(seasonNum, episodeNum) {
    season = seasonNum;
    episode = episodeNum;
    loadAndRender();
  };
  loadAndRender();
}
else {
  MAIN.innerHTML = "Invalid or missing video.";
}

window.goHome = function() {
  window.location = "index.html?tab=" + (TYPE === 'movie' ? "movies" : "tv");
};
