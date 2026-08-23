# Master Guesser

An interactive hangman-style word game built with vanilla HTML, CSS, and JavaScript. Choose word categories, set the number of words and difficulty, then reveal each hidden English word before the drawing is completed.

## Features

- Thirteen word categories focused on technology, science, geography, professions, nature, animals, food, and other neutral subjects
- Select one or more categories for each game
- Choose between 1 and 20 words per game
- Easy, Medium, and High difficulty modes
- Difficulty-based time limits: 40 seconds, 30 seconds, and 20 seconds per word
- Ten-mistake hangman system with animated SVG drawing stages
- Clickable on-screen keyboard and physical keyboard support
- Two rotating, difficulty-specific hints for every word, available in English and Arabic
- English and Arabic interface translations
- Dark and light themes
- Saved player name, language, and theme preferences through `localStorage`
- Sound effects, confetti celebrations, particle background, and reduced-motion support
- Game-over word reveal and correct-word list

## Getting Started

### Run locally

No package manager, build step, or backend is required.

1. Clone or download the repository.
2. Open `index.html` in a modern browser.

For the most reliable local experience, serve the directory with any static file server. For example, with Python installed:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

### Open the presentation

Visit [http://localhost:8000/presentation.html](http://localhost:8000/presentation.html) for the interactive product presentation. Navigate with the arrow buttons, arrow keys, Space, touch swipes, or by clicking the slide.

## How to Play

1. Enter a player name, or use the default name.
2. Select at least one word category.
3. Choose how many words to play, from 1 to 20.
4. Select a difficulty:
   - **Easy**: 40 seconds per word; time expiry adds 1 mistake.
   - **Medium**: 30 seconds per word; time expiry adds 2 mistakes.
   - **High**: 20 seconds per word; time expiry adds 3 mistakes and repeated letters reveal one occurrence at a time.
5. Guess letters by clicking the on-screen keyboard or pressing keys on your physical keyboard.
6. Use the hint button when you need help.
7. A wrong guess adds a part to the drawing. Ten mistakes end the game.
8. Complete every word to win.

## Word Categories

The built-in word data currently includes:

- Programming Language
- Popular Brands
- Arabic Country
- Video Games
- Phones
- Fruits
- Soft Drinks
- Technology & Science
- Animals
- Food
- Geography & Landmarks
- Professions
- Nature & Weather

Words and bilingual hints are stored in the `words` object near the top of `script.js`. Each word uses this format:

```js
{
  word: "Example",
  hints: {
    easy: {
      en: ["Direct English hint", "Another direct hint"],
      ar: ["تلميح مباشر بالعربية", "تلميح مباشر آخر"]
    },
    medium: {
      en: ["Less direct English hint", "Category-level information about the answer."],
      ar: ["تلميح عربي غير مباشر", "معلومة عامة عن الإجابة ضمن الفئة."]
    },
    high: {
      en: ["Broader information about the subject.", "A conceptual clue about the answer."],
      ar: ["معلومة أوسع عن الموضوع.", "تلميح مفاهيمي عن الإجابة."]
    }
  }
}
```

Easy uses direct clues, Medium uses less direct clues plus category information, and High uses broader conceptual information. The clues describe the subject itself; they do not reveal how to type or spell the answer. Add new entries using the same structure. The eye button rotates through the hints for the current word, and switching the interface language updates the visible hint immediately.

## Controls

- **Mouse or touch**: select letters from the on-screen keyboard.
- **Physical keyboard**: type supported letters, numbers, and symbols.
- **Eye button**: show the current word hint.
- **Language button**: switch between English and Arabic.
- **Moon toggle**: switch between dark and light themes.
- **Question button**: reopen the rules screen.

## Project Structure

```text
.
├── index.html          # Game markup and audio assets
├── presentation.html   # Interactive web presentation
├── script.js           # Game logic, word data, translations, and interactions
├── effects.js          # Particle background, confetti, and shake effects
├── master.css          # Game layout, themes, responsive styles, and animations
├── normalize.css       # Browser style normalization
├── favicon.svg         # Browser tab icon
├── red-triangle.png    # Flag/introduction visual asset
└── sounds/
    ├── success.wav     # Correct guess sound
    ├── error.wav       # Incorrect guess/time-up sound
    └── game-over.wav   # Game-over sound
```

## Customization

- Edit the `words` object in `script.js` to change categories, words, and hints.
- Update the `i18n` object in `script.js` when adding translatable interface text.
- Change the design tokens at the top of `master.css` to customize colors and typography.
- Replace the `.wav` files in `sounds/` to use different audio feedback.

## Browser Support

The game uses modern browser features including CSS custom properties, SVG, Canvas, `localStorage`, and `prefers-reduced-motion`. Use a current version of Chrome, Edge, Firefox, or Safari for the best experience.

## License

No license is currently specified for this project. Add a license file if you plan to distribute or reuse the code.
