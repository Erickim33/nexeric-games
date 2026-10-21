/* Builds the header, side menu, footer, home page, game pages, play page and About page from games.js. You normally don't need to edit this. */
(function () {
  var S = SITE, G = GAMES, enc = encodeURIComponent, q = function (s) { return document.querySelector(s); }, qa = function (s) { return document.querySelectorAll(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var page = document.body.dataset.page || '';
  var gl = function (g) { return 'game.html?g=' + enc(g.slug); };
  var nm = function (g) { return g.nameAccent && g.name.slice(-g.nameAccent.length) === g.nameAccent ? esc(g.name.slice(0, -g.nameAccent.length)) + '<em>' + esc(g.nameAccent) + '</em>' : esc(g.name); };
  var th = function (g) { return '--gbg:' + esc(g.bg) + ';--acc:' + esc(g.accent) + ';--hot:' + esc(g.hot || g.accent); };
  var thumb = function (g) { return g.thumb || g.homeShot || g.shots[0]; };
  var chips = function (g) { return '<div class="chips">' + (g.chips || []).map(function (c) { return '<span class="chip">' + esc(c) + '</span>'; }).join('') + '</div>'; };
  var paras = function (a) { return (a || []).map(function (p) { return '<p>' + p + '</p>'; }).join(''); };
  var acts = function (g, sm) {
    var c = sm ? ' sm' : '';
    if (g.soon || (!g.apk && !g.web)) return '<span class="btn main' + c + '" aria-disabled="true">Coming soon</span>';
    var h = g.web ? '<a class="btn main' + c + '" href="play.html?g=' + enc(g.slug) + '">Play in browser</a>' : '<span class="btn main' + c + '" aria-disabled="true">Play in browser · soon</span>';
    if (g.apk) h += '<a class="btn light' + c + '" href="downloads/' + esc(g.apk) + '" download>' + (sm ? 'Download APK' : 'Download for Android' + (g.size ? ' · ' + esc(g.size) : '')) + '</a>';
    if (g.play) h += '<a class="btn out' + c + '" href="' + esc(g.play) + '" target="_blank" rel="noopener">Google Play</a>';
    return h;
  };
  var names = G.map(function (g) { return g.name; });
  var nameList = names.length > 1 ? names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1] : (names[0] || 'my games');
  var gicon = G[0] && G[0].icon, ico = function () {};  /* the site icon is set in each page's head */
  var gid = function () { var s = new URLSearchParams(location.search).get('g'); return G.filter(function (x) { return x.slug === s; })[0]; };
  var parts = S.name.split(' '), brand = esc(parts[0]) + '<b>' + esc(parts.slice(1).join(' ')) + '</b>';

  var cur = page === 'game' || page === 'play' ? 'games' : page;
  var nav = [['home', 'Home', 'Home', 'index.html'], ['games', 'Games', 'Games', 'index.html#games'], ['how', 'How to play', 'Learn', 'instructions.html'], ['help', 'Help', 'Help', 'help.html'], ['about', 'About', 'About', 'about.html'], ['contact', 'Contact', 'Contact', 'contact.html']];
  var links = function (i) { return nav.map(function (r) { return '<a href="' + r[3] + '"' + (r[0] === cur && (r[0] !== 'games' || page !== 'home') ? ' aria-current="page"' : '') + '>' + r[i] + '</a>'; }).join(''); };
  q('#site-header').innerHTML = '<div class="wrap"><a class="brand" href="index.html">' + brand + '</a><nav class="hnav" aria-label="Main">' + links(1) + '</nav></div>';
  q('#site-footer').innerHTML = '<div class="wrap"><div class="fcols"><div><a class="brand" href="index.html">' + brand + '</a><p>Independent games for Android and the browser.<br><a href="#" data-mailto data-email></a></p></div>' +
    '<div><h3>Games</h3><ul>' + G.map(function (g) { return '<li><a href="' + gl(g) + '">' + esc(g.name) + '</a></li>'; }).join('') + '</ul></div>' +
    '<div><h3>Support</h3><ul><li><a href="help.html">Help</a></li><li><a href="instructions.html">How to play</a></li><li><a href="contact.html">Contact</a></li><li><a href="delete.html">Delete my data</a></li></ul></div>' +
    '<div><h3>Studio</h3><ul><li><a href="about.html">About</a></li><li><a href="privacy.html">Privacy policy</a></li></ul></div></div><p class="copy">© ' + new Date().getFullYear() + ' ' + esc(S.name) + '. Built independently.</p></div>';

  if (page === 'home') {
    ico(gicon);
    q('#phones').innerHTML = G.slice(0, 2).map(function (g) { return '<img src="img/' + esc(g.heroShot || g.shots[0]) + '" alt="">'; }).join('');
    q('#games-list').innerHTML = G.map(function (g) {
      return '<article><a class="tcard" href="' + gl(g) + '" style="' + th(g) + '"><img class="timg" src="img/' + esc(thumb(g)) + '" alt="' + esc(g.name) + ' screenshot" loading="lazy"><span class="tov"></span><span class="tplay">Play</span><div class="tmeta"><img class="ticon" src="img/' + esc(g.icon) + '" alt=""><div><h3>' + nm(g) + '</h3><small>' + esc(g.tag) + '</small></div></div></a><div class="tbtns">' + acts(g, 1) + '</div></article>';
    }).join('') + '<article><div class="tcard soon"><div><b>More games coming soon</b></div></div></article>';
  }

  if (page === 'game') {
    var g = gid(), m = q('#game');
    if (!g) { ico(gicon); document.title = 'Game not found — ' + S.name; m.innerHTML = '<div class="wrap" style="padding:80px 24px"><h1>Game not found</h1><p><a href="index.html#games">See all games</a></p></div>'; }
    else {
      ico(g.icon); document.title = g.name + ' — ' + S.name; q('meta[name=description]').content = g.name + ': ' + g.tagline + ' ' + (g.about || '');
      var fs = g.features || [], fh = fs.map(function (f, i) { return typeof f === 'string' ? '<div class="feat">' + f + '</div>' : '<div class="tile ' + 'abcd'[i % 4] + '"><b>' + f[0] + '</b>' + f[1] + '</div>'; }).join('');
      var sec = (g.sections || []).map(function (s) {
        return '<section class="sec prose"><h2>' + esc(s.title) + '</h2>' + paras(s.text) + (s.quote ? '<p class="quote">' + s.quote + '</p>' : '') +
          (s.tiles ? '<div class="grid2">' + s.tiles.map(function (t, i) { return '<div class="tile ' + 'abcd'[i % 4] + '"><b>' + t[0] + '</b>' + t[1] + '</div>'; }).join('') + '</div>' : '') +
          (s.steps ? '<div class="box"><ol>' + s.steps.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol></div>' : '') + '</section>';
      }).join('');
      m.innerHTML = '<section class="ghero" style="' + th(g) + '"><div class="wrap"><div><img class="gicon" src="img/' + esc(g.icon) + '" alt="' + esc(g.name) + ' icon"><p class="tag">' + esc(g.tag) + '</p><h1>' + nm(g) + '</h1><p class="lead">' + esc(g.tagline) + '</p>' + chips(g) +
        '<div class="row">' + acts(g) + '</div></div><img class="shot" src="img/' + esc(g.shots[0]) + '" alt="' + esc(g.name) + ' screenshot"></div></section><div class="wrap">' +
        '<section class="sec prose">' + paras(g.description && g.description.length ? g.description : [esc(g.about)]) + '</section>' +
        '<section class="sec"><h2>Screenshots</h2><div class="shots" tabindex="0" aria-label="' + esc(g.name) + ' screenshots">' + g.shots.map(function (s, i) { return '<img src="img/' + esc(s) + '" alt="' + esc(g.name) + ' screenshot ' + (i + 1) + '" loading="lazy">'; }).join('') + '</div></section>' +
        (fs.length ? '<section class="sec"><h2>Game Features</h2><div class="' + (typeof fs[0] === 'string' ? 'feats' : 'grid2') + '">' + fh + '</div></section>' : '') + sec +
        '<div class="cta"><p>Play ' + esc(g.name) + ' online or download the Android version.</p><div class="row">' + acts(g) + '</div></div>' +
        '<div class="box"><b>Need a hand?</b> Visit <a href="help.html">Help</a>, <a href="instructions.html">How to play</a>, <a href="contact.html">contact me</a> or read the <a href="privacy.html">privacy policy</a>. To remove your data, use <a href="delete.html">Delete my data</a>.</div></div>';
    }
  }

  if (page === 'play') {
    var p = gid(), pm = q('#play');
    if (!p) { pm.innerHTML = '<div class="wrap" style="padding:80px 24px"><h1>Game not found</h1><p><a href="index.html#games">See all games</a></p></div>'; }
    else {
      ico(p.icon); document.title = 'Play ' + p.name + ' — ' + S.name;
      pm.innerHTML = '<div class="wrap"><div class="playbar"><img class="ticon" src="img/' + esc(p.icon) + '" alt=""><h1>' + nm(p) + '</h1><span style="flex:1"></span>' +
        (p.web ? '<button class="btn sm" id="fs" type="button">Fullscreen</button><a class="btn sm" href="' + esc(p.web) + '" target="_blank" rel="noopener">Open in new tab</a>' : '') + '<a class="btn sm" href="' + gl(p) + '">Game page</a></div>' +
        (p.web ? '<iframe class="frame" id="frame" src="' + esc(p.web) + '" title="' + esc(p.name) + '" allow="fullscreen; autoplay"></iframe><p class="note">If the game doesn\'t load here, use “Open in new tab”.</p>'
          : '<div class="box"><h2 style="margin-top:0">The browser version is coming soon</h2><p>You can download the Android version now.</p><div class="row">' + acts(p) + '</div></div>') + '</div>';
      var fb = q('#fs'); if (fb) fb.addEventListener('click', function () { var f = q('#frame'); if (f.requestFullscreen) f.requestFullscreen(); });
    }
  }

  if (page === 'about') {
    ico(gicon);
    q('#about-icons').innerHTML = G.map(function (g) { return '<img src="img/' + esc(g.icon) + '" alt="">'; }).join('');
    q('#about-games').innerHTML = G.map(function (g) {
      return '<article class="gcard" style="' + th(g) + '"><img class="gicon" src="img/' + esc(g.icon) + '" alt=""><p class="tag">' + esc(g.tag) + '</p><h3>' + nm(g) + '</h3><p><b>' + esc(g.tagline) + '</b></p><p>' + esc(g.story || g.about) + '</p><div class="row"><a class="btn light sm" href="' + gl(g) + '">See game</a></div></article>';
    }).join('');
  }

  var el;
  if ((el = q('#howto-games'))) el.innerHTML = G.filter(function (g) { return g.howto && g.howto.length; }).map(function (g) { return '<h2>' + esc(g.name) + '</h2><ul>' + g.howto.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; }).join('');
  if ((el = q('#game-faq'))) el.innerHTML = G.map(function (g) { return (g.faq || []).map(function (f) { return '<details><summary>' + f[0] + '</summary><p>' + f[1] + '</p></details>'; }).join(''); }).join('');
  if ((el = q('#g'))) el.innerHTML = G.map(function (g) { return '<option>' + esc(g.name) + '</option>'; }).join('') + (G.length > 1 ? '<option>All my games</option>' : '');
  qa('[data-gamenames]').forEach(function (e) { e.textContent = nameList; });
  qa('[data-email]').forEach(function (e) { e.textContent = S.email; });
  qa('[data-mailto]').forEach(function (a) { var s = a.dataset.mailto; a.href = 'mailto:' + S.email + (s ? '?subject=' + enc(s) : ''); });
  qa('[data-gmail]').forEach(function (a) { a.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + enc(S.email) + '&su=' + enc(a.dataset.gmail); });
})();
