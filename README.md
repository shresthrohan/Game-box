# 🎮 GameBox

### Your Games. Your Playground.

**GameBox** is a modern browser-based mini-games hub built with **React**, bringing multiple classic games together in one simple and interactive web application.

Instead of visiting different websites for different games, GameBox provides a single platform where users can browse, search, and instantly play a collection of classic games.

---

## ✨ Features

* 🎮 Multiple playable games in one platform
* 🔎 Search games by name, description, or category
* 🗂️ Filter games by category
* 📱 Fully responsive design
* 🌙 Modern dark arcade-inspired UI
* 💾 Persistent scores using LocalStorage
* 🔄 Instant restart and replay functionality
* ⌨️ Keyboard controls for supported games
* 🏆 Score and statistics tracking
* 🧩 Reusable React components
* ⚡ Fast and lightweight frontend

---

## 🕹️ Available Games

| Game                  | Category | Players   |
| --------------------- | -------- | --------- |
| ❌ Tic Tac Toe         | Board    | 2 Players |
| 🟩 Wordle             | Word     | 1 Player  |
| 🔵 Dots & Boxes       | Board    | 2 Players |
| 🃏 Memory Match       | Puzzle   | 1 Player  |
| 🔢 2048               | Puzzle   | 1 Player  |
| 🐍 Snake              | Arcade   | 1 Player  |
| 🎯 Hangman            | Word     | 1 Player  |
| 🔴 Connect Four       | Board    | 2 Players |
| ✊ Rock Paper Scissors | Casual   | 1 Player  |
| 🔢 Number Guessing    | Casual   | 1 Player  |

---

## 🖥️ Pages

### Home

The landing page introduces GameBox and highlights selected games.

### Games

A complete game library containing all available games.

Users can:

* Search games
* Filter by category
* Select a game
* Start playing instantly

### Individual Game Pages

Each game has its own interface, controls, game logic, statistics, restart functionality, and instructions.

### About

A short overview of the GameBox project and the technologies used.

### 404

A custom page for invalid or unavailable routes.

---

## 🧱 Project Structure

```text
GameBox/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── GameCard.jsx
│   │   ├── GameGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── GameHeader.jsx
│   │   ├── GameResult.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── games/
│   │   ├── TicTacToe.jsx
│   │   ├── Wordle.jsx
│   │   ├── DotsAndBoxes.jsx
│   │   ├── MemoryMatch.jsx
│   │   ├── Game2048.jsx
│   │   ├── Snake.jsx
│   │   ├── Hangman.jsx
│   │   ├── ConnectFour.jsx
│   │   ├── RockPaperScissors.jsx
│   │   └── NumberGuessing.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Games.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   └── games.js
│   │
│   ├── utils/
│   │   ├── storage.js
│   │   └── gameUtils.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Tech Stack

### Frontend

* **React**
* **JavaScript**
* **CSS**
* **Vite**

### Routing

* **React Router**

### Browser Storage

* **LocalStorage**

No backend or database is required.

---

## 🧠 React Concepts Used

This project focuses on practical React development, including:

* Functional Components
* Props
* State Management
* React Hooks
* Conditional Rendering
* Lists and Dynamic Rendering
* Event Handling
* React Router
* Component Reusability
* LocalStorage
* Timers and Game Loops
* Keyboard Event Handling

---

## 🎯 Game Logic

Each game has its own independent state and logic.

For example:

### Tic Tac Toe

* Turn management
* Win detection
* Draw detection
* Winning-cell highlighting
* Score tracking

### Wordle

* Word validation
* Letter matching
* Duplicate-letter handling
* Keyboard state
* Six-attempt game system

### 2048

* Grid movement
* Tile merging
* Score calculation
* Random tile generation
* Win/game-over detection

### Snake

* Real-time movement
* Food generation
* Collision detection
* Increasing snake length
* Score tracking

This makes GameBox more than a static game collection — it is a practical demonstration of **state-driven interactive applications in React**.

---

## 💾 LocalStorage

GameBox uses browser LocalStorage to persist selected statistics between sessions.

Examples include:

```text
Tic Tac Toe scores
2048 best score
Snake high score
Rock Paper Scissors statistics
```

No account or database is required.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/gamebox.git
```

### 2. Navigate to the project

```bash
cd gamebox
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

---

## 📱 Responsive Design

GameBox is designed to work across:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📲 Tablet

The game boards, navigation, cards, controls, and layouts adapt to smaller screens.

---

## 🎨 Design Philosophy

The interface follows a **modern indie-arcade aesthetic** rather than a traditional gaming website.

The design focuses on:

* Dark backgrounds
* Strong typography
* Rounded surfaces
* Subtle animations
* Clear game hierarchy
* Minimal UI clutter
* Consistent interaction patterns

The goal is to make every game feel like part of the same platform.

---

## 🔮 Future Improvements

Potential future additions include:

* 👤 User profiles
* 🏆 Global leaderboards
* 🌐 Online multiplayer
* 🎨 Multiple themes
* 🔊 Game sound effects
* 🎵 Background music
* 🌓 Light/Dark theme switching
* 📊 Detailed player statistics
* 🥇 Achievement system
* 🤖 AI opponents
* 🎮 More mini-games
* ☁️ Cloud-based score synchronization

---

## 📚 Learning Goals

This project was created to practice and demonstrate:

```text
React
   ↓
Component Architecture
   ↓
State Management
   ↓
Game Logic
   ↓
User Interaction
   ↓
Responsive UI
   ↓
LocalStorage
```

It serves as a practical project for understanding how React can be used to build highly interactive browser applications.

---

## 🤝 Contributing

Contributions and new game ideas are welcome.

To contribute:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-game
```

3. Add your game or improvement
4. Commit your changes

```bash
git commit -m "Add new game"
```

5. Push the branch

```bash
git push origin feature/new-game
```

6. Open a Pull Request

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Shresth Rohan**

Computer Science & Engineering — Data Science

Interested in:

* Full Stack Development
* AI/ML
* Data Science
* Game Development
* UI/UX & Creative Technology

---

⭐ If you like the project, consider giving the repository a star!
