# 🎮 Unblocked Games

A self-hosted, browser-only collection of **113 games** — no downloads, no installs, no ads, no accounts. Everything runs straight in your browser, so the whole site works anywhere a web server does.

> **Play Anywhere, Anytime.** Access the games you like from networks that filter gaming content. No lag, no ads — just gaming, in a clean glassmorphic interface.

---

## ✨ Features

- **113 games** across ~20 categories — Shooter, Racing, Arcade, Casual, Sports, Sandbox, Puzzle, Platformer, Strategy, Horror, Simulation and more.
- **One click to play** — every title launches in your browser; nothing to install or sign up for.
- **Instant search & filtering** — find any game by name or category from the Games Library.
- **8 themes** — Default, Dark, Graphite, Midnight, Ocean, Mint, Sunset, Rose (saved in `localStorage`).
- **Panic button** — press `Esc` (or backtick `` ` ``) to jump instantly to a neutral page (Google Classroom by default, fully configurable in Settings).
- **Clean portal shell** — the site itself ships zero ads or trackers and is pure static HTML/CSS/JS. (A few individual game files are third-party web builds that may bring their own code.)
- **Runs anywhere** — GitHub Pages, Netlify, a school server, or a one-line local server.

---

## 🚀 Quick Start

No build step. No package manager. No dependencies. This is a static site — point any web server at the folder.

**Option A — GitHub Pages (recommended)**

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source → Deploy from a branch** → branch `main`, folder `/`.
3. Your site is live at `https://<user>.github.io/unblocked-games`.

**Option B — any static server**

```bash
cd unblocked-games
python3 -m http.server 8080
# open http://localhost:8080
```

**Option C — just double-click `index.html`.** A few games use ES modules or `fetch` and want a real server, so use Option A or B if something fails to load.

---

## 📁 Project Structure

```
├── index.html        # Home page
├── gamepage.html     # Games Library (search + category filters)
├── settings.html     # Panic button, theme, animations
├── contact.html      # Request a game / report a bug
├── agreement.html    # Terms & Rules
├── style.css         # All styling (glassmorphism, 8 themes)
├── javascript.js     # Theme, panic button, nav, animations
└── games/
    ├── <slug>.html         # games shipped as a single file
    └── <slug>/index.html   # games shipped as a folder (Unity/WebGL, etc.)
```

---

## ⚙️ Settings & Panic Button

- **Panic button** — `Esc` or backtick instantly redirects to a URL you choose (default: `https://classroom.google.com`). Toggle it on/off in **Settings**.
- **Themes** — pick from 8 color themes; your choice persists between sessions.
- **Animations** — disable the background blobs / scroll effects.

---

## ➕ Adding a Game

1. Drop the game into `games/` — either a single `games/<slug>.html` file or a `games/<slug>/index.html` folder.
2. Add a thumbnail as `images/logos/<slug>.jpg`.
3. Add one small card to `gamepage.html` (logo, title, category, Play button).

New games and bug reports are also welcome via the [Contact](contact.html) page.

---

## 🎲 Game List

<details>
<summary>Full catalog — click to expand</summary>

| Game | Category |
|---|---|
|---|---|
1v1 LOL | Shooter
8 Ball Pool | Sports
A Small World Cup | Sports
Balatro | Card
Basket Stars | Sports
Bike Obby | Casual
Binding of Isaac | Roguelike
BitLife | Simulation
Block Blast | Puzzle
Btd | Game
Buckshot Roulette | Action
Burrito Bison | Arcade
Car Chase 3D | Racing
Clash Royale | Strategy
Cluster Rush | Arcade
Code Editor | Utility
College Football 25 | Sports
Cookie Clicker | Idle
Coreball | Arcade
Crossy Road | Casual
Cuphead | Action
Deadish | Action
Deadly Descent | Action
Death Run 3D | Action
Doblox | Sandbox
Doom | Shooter
Drift Boss | Racing
Drive Mad | Racing
EAG 112 | Action
Eggy Car | Casual
Emulator JS | Emulator
Escape Road | Racing
Fnaf | Game
Football Bros | Sports
Free Rider | Racing
Geometry Dash | Arcade
Getaway Shootout | Shooter
Gladdi Hoppers | Casual
Google Baseball | Sports
Gorilla Tag | Action
Granny | Horror
Gun Spin | Casual
Happy Wheels | Action
Harvest Simulator | Simulation
HCRL | Arcade
Hollow Knight | Action
Hotline Miami | Action
Hyper Sandbox | Sandbox
Idle Breakout | Idle
Iron Lung | Horror
Level Devil | Puzzle
Little Alchemy 2 | Puzzle
Mario Bros | Platformer
Minecraft | Sandbox
Monkey Mart | Simulation
Moto X3M All | Racing
Mr. Bullet | Shooter
Music Player | Utility
Music Player 2 | Utility
Nextbots | Horror
NZP | Shooter
Only Up Obby | Platformer
Plants vs Brainrots | Strategy
Plants vs Zombies | Strategy
Plants vs Zombies 2 | Strategy
Police Pursuit | Racing
Polytrack | Racing
Ragdoll Archers | Action
Ragdoll Hit | Action
Ragdoll Hit (Alt) | Action
Retro Bowl | Sports
Retro Bowl College | Sports
Retro Highway | Racing
Riddle School | Puzzle
Riot | Action
Ruffle (Flash) | Utility
Run 3 | Arcade
Sandbox City | Sandbox
Sandboxels | Sandbox
Sandtris | Puzzle
Sandtrix | Puzzle
Slope | Arcade
Smash Karts | Racing
Snow Battle.io | Action
Snow Rider | Racing
Soccer Bros | Sports
Sonic | Platformer
Soundboard | Utility
Space Wave | Arcade
Steal a Brainrot | Casual
Stickman Hook | Arcade
Stunt Bike Extreme | Racing
Subway Surfers | Endless Runner
Super Mario 64 | Platformer
Survival Race | Racing
Tag | Casual
Tanuki Sunset | Casual
Terraria | Sandbox
Tiny Fishing | Casual
TNMN | Action
Tomb of the Mask | Arcade
Traffic Jam | Puzzle
Tunnel Rush | Arcade
ULTRAKILL | Shooter
Undertale | RPG
Unfair Mario | Platformer
Vex | Platformer
Vice City | Action
Vox | Sandbox
We Become What We Behold | Casual
WHG | Action
WorldBox | Sandbox
Yo-ho-ho! | Action
</details>

---

## 📜 Legal

This project is a portal/router to web-available game builds. All games belong to their original creators and publishers and are provided for **personal, educational, and non-commercial use only**. See [Terms & Rules](agreement.html) for the full usage policy.

If you own content in this repository and would like it removed, open an issue or use the [Contact](contact.html) page — it will be taken down promptly.

---

## 💬 Support

- **Request a game / report a bug** → [Contact page](contact.html)
- **Something broken in the site itself** → open a GitHub issue

---

## 📄 License

No license is currently declared, so the code is provided as-is for personal use. If you plan to reuse or redistribute it, get in touch first.
