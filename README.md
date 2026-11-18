# Game of Words

A browser-based Codewords-style game with a moderator key, player display, themed word lists, shared board state, and scoring.

## Play

1. Open the published game page and choose **Moderator**.
2. Select a word list and click **New game** if you want to deal a fresh board.
3. Click **Open player screen** to open the player view on the same browser/device. Put that window on a projector or second display.
4. Click words on the moderator board to reveal them. The moderator chooses which team is playing when the assassin is revealed.

The game deals 25 unique words: 10 for each team, one assassin, and four neutral. Team-owned words score 10 points. An assassin costs the selected team 20 points and lowers the target to 80. Game state is shared through browser local storage, so both windows must use the same browser profile and site origin.

## Publish with GitHub Pages

The playable page is `index.html`. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. GitHub will show the published URL in the Pages section after the deployment completes.

This is a static, browser-only game; it needs no server or build step.
