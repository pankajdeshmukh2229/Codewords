# Easyconcepts

Easyconcepts is a home for ideas made real: useful digital experiences, practical tools, and playful experiments. This repository is a small, static website designed to grow modularly.

## Project structure

```text
.
├── index.html                 # Easyconcepts landing page and Games section
├── css/
│   ├── styles.css             # Shared site styles
│   └── game.css               # Game-specific presentation
├── js/
│   ├── game.js                # Game rules, UI, and lifecycle
│   ├── categories.js          # Loads and validates category data
│   └── storage.js             # Browser persistence and cross-window updates
├── data/
│   ├── animals.json
│   ├── bollywood.json
│   └── technology.json
├── games/
│   └── codewords/
│       └── index.html         # Game of Words app
└── assets/                    # Future images, icons, and other static assets
```

## Run locally

The game uses JavaScript modules and fetches JSON data, so serve the repository over HTTP rather than opening the files directly. For example, from the repository root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` for the Easyconcepts home page or `http://localhost:8000/games/codewords/` to open the game.

## Game of Words

From the home page, find **Games → Game of Words**. Choose **Moderator** to see the key and score words, or **Player** for the public display. Open the player screen from the moderator controls. Both views synchronize through local storage on the same browser origin; for example, use two windows on the same device and browser profile.

Each board contains 25 distinct words: 10 for each team, one assassin, and four neutral. A team-owned word scores 10 points. An assassin subtracts 20 points from the team in play and lowers the winning target to 80. The available data lists are Animals, Bollywood Movies, and Technology; add another JSON list and register it in `js/categories.js` to extend the game.

## Publish with GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, and save. The site entry point is the root `index.html`; the game is linked under `/games/codewords/`. GitHub Pages may take a few minutes to deploy after the source is selected.
