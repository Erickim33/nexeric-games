# Nexeric Games Website
Static site, no backend needed. Upload the whole folder to any web host (Netlify, GitHub Pages, Cloudflare Pages...).

## ADD A NEW GAME (3 steps)
1. Open tools/add-game.html in your browser (double-click it), fill in the form and press "Make my game block".
2. Open games.js. Type a comma after the last game's closing }, then paste the block right after it.
3. Put the files where the tool tells you:  downloads/ = the APK, img/ = icon and screenshots. Upload the site again.
The game appears on the home page, in the footer, its own page, the About page, How to play and the Delete my data form.

## BROWSER VERSIONS (already switched on for both games)
The browser versions live in play/safe-card/ and play/mazex/. The "Play in browser" button opens them inside play.html (with Fullscreen and "Open in new tab").
To add a browser version for a new game: put its web files in play/<game-name>/ (with index.html at the top of that folder), then set  web: "play/<game-name>/"  in games.js. A full web address (https://...) works too.
Notes: the MazeX files were adjusted to run from a folder (relative file paths and the router base path). If you rebuild MazeX, send me the new build and I'll redo that step.
Safe Card's browser version asks for capacitor.js and admob.js (Android-only files), so empty placeholder files sit next to it.

## Other tips
- soon: true  shows "Coming soon" instead of the buttons.   play: "..."  adds a Google Play button.
- To change a game's text, screenshots or colours, edit its block in games.js. To change your email, edit it once at the top.
- About page text: about.html. Studio name: SITE.name in games.js.

## Files
index.html, game.html (all game pages), play.html (browser play), about.html, instructions.html, help.html, contact.html, delete.html, privacy.html
games.js = your games and settings    site.js = builds the pages    style.css = design    favicon.svg / favicon.ico / apple-touch-icon.png / icon-192.png / icon-512.png = the website icon (replace these files to change it)    img/  downloads/    tools/add-game.html = helper (no need to upload)

## Google Play links
Privacy policy: your-site/privacy.html     Account deletion: your-site/delete.html
Please read both pages and make sure they match what your games really do.
