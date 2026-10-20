/* ============================================================
   EASY EDIT FILE — your site's settings and your list of games.
   To add a game: copy one game block below, paste it at the END of
   the list (after a comma), change the text, then upload your files:
     downloads/  -> the game's .apk
     img/        -> the icon and screenshots
   Or use tools/add-game.html to make the block for you.
   Text fields may use <b>bold</b>. Leave a field as "" or [] if you don't need it.
   ============================================================ */
const SITE = { name: "Nexeric Games", email: "kimanieric412@gmail.com" };

const GAMES = [
  {
    slug: "safe-card",                       // used in the page link: lowercase, no spaces
    name: "Safe Card",
    tag: "Card game",
    tagline: "Kenyan Poker. Reimagined.",
    about: "A fast, unpredictable card game built around risk, decisions, and survival.",   // short line used in previews
    description: [                             // the main text on the game page
      "Think you know poker? Safe Card takes the familiar idea of card strategy and turns it into a fast, unpredictable game built around risk, decisions, and survival.",
      "Choose your game mode, face off against opponents, and make every card count. Whether you're playing Classic, Bomb ni Bomb, Game ni Bubu, or Deathmatch, every round can change in an instant.",
      "Play casually against AI, compete for wins, and climb your personal leaderboard as you discover which strategies keep you in the game."
    ],
    story: "A card game inspired by familiar poker mechanics, redesigned with its own rules, modes, and gameplay systems.",   // shown on the About page
    bg: "linear-gradient(135deg,#262626,#0f0f0f)",   // game header background
    accent: "#bdbdbd",                                // small highlight colour
    icon: "sc-icon.png",                              // in img/
    apk: "safecard.apk",                              // in downloads/
    size: "8.4 MB",
    web: "play/safe-card/",                                          // folder or link of the browser version. Switches on "Play in browser"
    play: "",                                         // Google Play link once published (optional)
    soon: false,                                      // true = show "Coming soon" instead of the buttons
    chips: ["Classic", "Bomb ni Bomb", "Game ni Bubu", "Deathmatch"],
    thumb: "sc-web-play.webp",                        // wide picture for the home page card
    heroShot: "sc-menu.webp",                         // phone picture in the home page banner
    shots: ["sc-web-home.webp", "sc-web-play.webp", "sc-web-friends.webp", "sc-menu.webp", "sc-play.webp", "sc-win.webp"],
    features: [
      "Multiple unique game modes",
      "Fast card-based gameplay",
      "Play offline against AI opponents",
      "Designed for quick matches or longer sessions",
      "Win-based leaderboard system",
      "Built for both mobile and browser play"
    ],
    sections: [
      { title: "How to Play",
        text: ["Choose your mode, enter the game, and outsmart your opponents. The objective changes depending on the mode, but one thing stays the same:"],
        quote: "Make the right move before the game makes it for you." }
    ],
    howto: [
      "Pick a mode on the home screen: <b>Classic</b>, <b>Bomb ni Bomb</b>, <b>Game ni Bubu</b> or <b>Deathmatch</b>. Tap <b>Rules</b> under a mode to read how it works. <b>Custom</b> lets you build your own.",
      "Tap <b>Play</b> to start a round against the AI. Change the AI difficulty in <b>Settings</b>.",
      "To play with friends, choose <b>Play with Friends</b>, tap <b>Create Room</b>, pick the room size and share the code. Friends tap <b>Join Room</b> and enter it.",
      "On your turn, tap the card or cards you want to play, then press <b>Play</b>. Press <b>Draw</b> if you can't play.",
      "Check <b>Leaderboard</b> to see your wins."
    ],
    faq: []
  },
  {
    slug: "mazex",
    name: "MazeX",
    nameAccent: "X",                              // optional: colours this ending of the name
    tag: "Maze chase",
    tagline: "Escape the maze. Outrun the Hunter.",
    about: "A fast-paced 2D maze survival game where every maze is a challenge.",
    description: [
      "You have one objective: find your way out before the Hunter catches you.",
      "MazeX is a fast-paced 2D maze survival game where every maze is a challenge. Navigate twisting paths, avoid the Hunter, use your abilities wisely, and find the exit before it's too late.",
      "Every completed maze pushes you further. The challenges become more demanding, the layouts change, and your survival skills are put to the test."
    ],
    story: "A fast maze-chase game where surviving the maze is only part of the challenge. The Hunter is coming.",
    bg: "radial-gradient(circle at 80% 15%,#2e2e2e,#0a0a0a 62%)",
    accent: "#bdbdbd",
    hot: "#8a8a8a",                               // colour for nameAccent (optional)
    icon: "mx-icon.png",
    apk: "mazex.apk",
    size: "8.5 MB",
    web: "play/mazex/",
    play: "",
    soon: false,
    chips: ["3 lives", "Dash", "Hints", "Minimap"],
    thumb: "mx-feature.webp",
    heroShot: "mx-explore.webp",
    shots: ["mx-explore.webp", "mx-chase.webp", "mx-hint.webp", "mx-pause.webp", "mx-escaped.webp", "mx-level5.webp", "mx-menu.webp"],
    features: [
      "Procedurally generated mazes",
      "Increasing difficulty",
      "Hunter chase gameplay",
      "Three lives",
      "Minimap for navigation",
      "Hints to help when you're stuck",
      "Different gameplay modes and Hunter mechanics",
      "Progress saving with Continue",
      "Designed for mobile and browser play"
    ],
    sections: [
      { title: "The Hunter",
        text: ["The maze isn't your only problem.", "The Hunter is constantly searching for you. Stay moving, choose your route carefully, and don't let yourself get trapped.", "And when you think you've escaped..."],
        quote: "the next maze is already waiting." },
      { title: "Controls", tiles: [
        ["On your phone", "Move with the joystick at the bottom left. Tap Dash, the lightbulb for a hint, and the grid button for the map."],
        ["On a keyboard", "WASD or arrow keys to move, Space to dash, H for a hint, P to pause."]
      ] }
    ],
    howto: [
      "Tap <b>New game</b> (or <b>Continue</b> to pick up where you left off). You only see a ring of light around you, so explore to find the exit.",
      "Move with the joystick at the bottom left. On a keyboard use WASD or the arrow keys.",
      "When the screen turns red and says <b>Hunter close</b>, run. You have three lives.",
      "Tap <b>Dash</b> (Space) for a burst of speed. Tap the lightbulb (H) to see the path to the exit. Tap the grid button for the map. Pause with the pause button (P).",
      "Reach the exit to clear the maze, then tap <b>Next maze</b>."
    ],
    faq: [
      ["MazeX is too hard to see", "That's the idea: you only see a ring of light. Tap the lightbulb for a hint that shows the way, and the grid button for the map."]
    ]
  }
];
