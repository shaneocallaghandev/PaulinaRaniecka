# Images

The site reads these file names (paths are set in `src/content.js`).
Until a file exists, an elegant placeholder is shown in its place.

| File                 | Used for                              | Status   |
| -------------------- | ------------------------------------- | -------- |
| `portrait.jpg`       | Hero portrait (arched)                | ✓ added  |
| `sky.jpg`            | Small square next to the portrait     | ✓ added  |
| `water.jpg`          | Full-width quote band                 | ✓ added  |
| `portrait-2.jpg`     | About section, 4:5 portrait           | missing  |
| `facilitation.jpg`   | Service card, 4:3                     | missing  |
| `moderation.jpg`     | Service card, 4:3                     | missing  |
| `research.jpg`       | Service card, 4:3                     | missing  |
| `session-1..4.jpg`   | Photo strip of sessions, 3:4          | missing  |

Tip: export as JPG at ~75% quality, max ~2000px on the long side, to keep the site fast.
On macOS: `sips -s format jpeg -s formatOptions 75 -Z 2000 input.heic --out output.jpg`
