export type GameCategory = 'Board' | 'Puzzle' | 'Word' | 'Arcade' | 'Casual';

export interface GameInfo {
  slug: string;
  name: string;
  description: string;
  category: GameCategory;
  symbol: string;
  accent: string;
  instructions: string[];
}

export const games: GameInfo[] = [
  { slug:'tic-tac-toe', name:'Tic-Tac-Toe', description:'Three in a row. No fuss, no mercy.', category:'Board', symbol:'×○', accent:'lime', instructions:['Place your mark in an open square.','Make a line of three before the board fills.','You play X; the house plays O.'] },
  { slug:'wordle', name:'Wordle', description:'Six tries. One five-letter word.', category:'Word', symbol:'W', accent:'orange', instructions:['Guess the hidden five-letter word.','Lime means right letter, right place.','Orange means right letter, wrong place.'] },
  { slug:'dots-and-boxes', name:'Dots & Boxes', description:'Claim the square. Own the grid.', category:'Board', symbol:'··', accent:'aqua', instructions:['Click an edge to draw a line.','Complete a square to claim it and play again.','Most claimed squares wins.'] },
  { slug:'memory-match', name:'Memory Match', description:'Flip clean. Remember everything.', category:'Puzzle', symbol:'∷', accent:'lavender', instructions:['Flip two cards to reveal their letters.','A matching pair stays face-up.','Clear all eight pairs in as few turns as you can.'] },
  { slug:'2048', name:'2048', description:'Slide, merge, chase the tile.', category:'Puzzle', symbol:'²', accent:'orange', instructions:['Use arrow keys or WASD, or the direction pad.','Equal tiles merge when they meet.','Reach 2048 before the board locks.'] },
  { slug:'snake', name:'Snake', description:'Grow long. Stay alive.', category:'Arcade', symbol:'~', accent:'lime', instructions:['Steer with arrow keys or the direction pad.','Eat the square to grow.','Do not hit the walls or yourself.'] },
  { slug:'hangman', name:'Hangman', description:'Find the word before the lines run out.', category:'Word', symbol:'⌁', accent:'aqua', instructions:['Choose letters with the keyboard or mouse.','You have six misses.','Solve the word to win.'] },
  { slug:'connect-four', name:'Connect Four', description:'Drop a disc. Build a line.', category:'Board', symbol:'●●', accent:'orange', instructions:['Choose a column to drop your disc.','Connect four before the computer does.','You play orange; the computer plays lime.'] },
  { slug:'rock-paper-scissors', name:'Rock Paper Scissors', description:'The timeless three-choice showdown.', category:'Casual', symbol:'RPS', accent:'lavender', instructions:['Choose rock, paper, or scissors.','Rock beats scissors. Scissors beats paper.','Paper beats rock. First to five takes it.'] },
  { slug:'number-guessing', name:'Number Guessing', description:'Read the signal. Find the number.', category:'Casual', symbol:'#', accent:'lime', instructions:['Guess a number between 1 and 100.','The signal tells you which way to go.','Find it in as few guesses as possible.'] },
];

export const getGame = (slug?: string) => games.find((game) => game.slug === slug);