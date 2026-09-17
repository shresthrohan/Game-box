import { Link, useParams } from 'wouter';
import type { ReactNode } from 'react';
import { getGame } from '@/data/games';
import { TicTacToe, Wordle, DotsBoxes, MemoryMatch, Game2048, Snake, Hangman, ConnectFour, RockPaperScissors, NumberGuessing } from '@/components/games';

const gameComponents: Record<string, () => ReactNode> = {
  'tic-tac-toe': TicTacToe,
  wordle: Wordle,
  'dots-and-boxes': DotsBoxes,
  'memory-match': MemoryMatch,
  '2048': Game2048,
  snake: Snake,
  hangman: Hangman,
  'connect-four': ConnectFour,
  'rock-paper-scissors': RockPaperScissors,
  'number-guessing': NumberGuessing,
};

export default function GamePage() {
  const params = useParams<{ slug: string }>();
  const game = getGame(params.slug);
  if (!game) return <main className="page" style={{textAlign:'center'}}><div className="display" style={{color:'#ff8054'}}>404</div><h1>That game is not in the cabinet.</h1><Link href="/games" className="button button-primary" data-testid="link-game-not-found">Browse all games →</Link></main>;
  const Game = gameComponents[game.slug];
  return <main className="game-page">
    <div className="game-top"><div><Link href="/games" className="eyebrow" data-testid="link-back-games">← All games</Link><h1>{game.name}</h1><p>{game.description}</p></div><Link href="/games" className="button button-ghost button-small" data-testid="link-game-library">Cabinet</Link></div>
    <div className="game-layout">
      <section className="play-card" aria-label={`${game.name} game board`}><Game /></section>
      <aside>
        <div className="side-panel"><h3>How to play</h3><ol>{game.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}</ol></div>
        <div className="side-panel"><h3>Quick exit</h3><p>Need a different kind of break?</p><Link href="/games" className="button button-primary button-small" data-testid="link-more-games">Choose another →</Link></div>
      </aside>
    </div>
  </main>;
}