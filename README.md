# Game of Words

A browser-based Codewords-style game with a moderator screen, player display, themed word lists, scoring, and optional Firebase-powered shared games and feedback.

## Play

Open `index.html` (or publish the repository with GitHub Pages) and choose **Moderator** or **Player**. A game can always be played locally without a session code or account. In local play the player view shares state between tabs on the same browser using local storage.

For an online game, choose **Moderator**, then **Create shared game**. Share the generated invite link or six-character code. Players open the link or enter the code; no account or player name is required. The moderator controls the board, and the player screens follow it in real time. Active players are counted while connected. Shared sessions are configured to expire after 30 days.

The **Feedback** form accepts a 1–5 rating and comments, with optional name and email. Feedback is configured for one-year retention.

## Firebase setup

The browser Firebase configuration is included in `index.html`. Firebase web API keys are identifiers for the project, not server credentials; access is controlled by Firebase Authentication and security rules. Do not put service-account private keys in browser code.

1. In Firebase Console, confirm project `easyconcepts-c6de3` and register/confirm the web app.
2. In **Authentication → Sign-in method**, enable **Anonymous**.
3. Create a **Cloud Firestore** database and a **Realtime Database**.
4. Publish `firestore.rules` as the Firestore security rules and `database.rules.json` as the Realtime Database rules.
5. In Firestore **TTL**, enable automatic deletion on `sessions.expiresAt` and `feedback.deleteAt`. TTL cleanup is asynchronous (it may take up to about a day after expiration).
6. Publish the page over HTTPS (GitHub Pages is supported).

Anonymous Authentication is needed for connected sessions and feedback. If Firebase is unavailable, local gameplay remains playable; a feedback submission cannot be stored without Firebase.

## Data and access

- `sessions/{code}` stores the shared board state and 30-day expiration timestamp. Only the anonymous account that created a session can change the board.
- `sessions/{code}/private/key` stores the moderator's answer key and is readable only by that session's creator. The public game document deliberately omits the key.
- Realtime Database `presence/{code}/{uid}` records connected users and removes entries on disconnect.
- `feedback/{id}` stores rating, comments, optional name/email, and a one-year TTL timestamp. Feedback is not readable from the client after submission.

Feedback is retained for one year by the Firestore TTL policy; Firebase TTL deletion is not an exact-to-the-second deadline. Configure Firebase billing/quotas and appropriate data/privacy notices for your audience before public launch.
