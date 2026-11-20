# Easyconcepts

Easyconcepts is a home for ideas made real: useful digital experiences, practical tools, and playful experiments. This repository is a small, static website designed to grow modularly.

## Project structure

```text
.
├── index.html
├── css/                      # Site and game presentation styles
├── js/                       # Game logic, category loading, and storage modules
├── data/                     # Word lists (JSON arrays)
├── games/codewords/index.html
└── assets/                   # Future static assets
```

Run locally with `python3 -m http.server 8000`, then open `http://localhost:8000/`.

## Codewords

Open the Games section on the homepage or go directly to `/games/codewords/`. Choose Moderator to see the key and score words, or Player for the public display. The player view synchronizes with the moderator using browser local storage on the same browser profile and site origin.

Boards contain 25 distinct words: 10 for each team, one assassin, and four neutral. Team-owned words score 10 points. An assassin subtracts 20 points from the team in play and lowers the target to 80. The word-list dropdown includes Animals, Bollywood Movies, Technology, and Generic Words. Generic Words loads from `data/genericwords`; add another JSON array and register its file in `js/categories.js` to add a category.

The Codewords board uses consistent tile text sizing so words such as “Salamander” stay as large as short words when they fit, while wrapping inside the tile when needed. The board and labels are styled for projector/TV viewing and adapt for smaller screens.

## GitHub Pages

In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, and save. The site entry point is the root `index.html`; Codewords lives at `/games/codewords/`.
