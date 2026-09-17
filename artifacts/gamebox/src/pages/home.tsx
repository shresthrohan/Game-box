import { Link } from 'wouter';
import { games } from '@/data/games';

export default function Home() {
  const featured = [games[0], games[4], games[1], games[7], games[2], games[8]];
  return <main>
    <section className="page hero">
      <div>
        <div className="eyebrow">01 / Your tiny arcade</div>
        <h1 className="display">A quick hit of <em>play.</em></h1>
        <p className="hero-copy">Classic games with a little more snap. No accounts, no loading screens, no reason to leave your tab open and unattended.</p>
        <div className="hero-actions"><Link href="/games" className="button button-primary" data-testid="link-play-now">Play something <span>→</span></Link><Link href="/about" className="button button-ghost" data-testid="link-learn-more">Why GameBox?</Link></div>
      </div>
      <div className="hero-art" aria-label="GameBox arcade illustration">
        <div className="arcade-disc"></div><div className="pixel one">×</div><div className="pixel two">2</div><div className="pixel three">●</div><div className="pixel four">#</div>
      </div>
    </section>
    <div className="marquee"><span>NO ACCOUNTS　/　NO ADS　/　NO WAITING　/　JUST ONE MORE ROUND　/　NO ACCOUNTS　/　NO ADS　/　NO WAITING　/　JUST ONE MORE ROUND　/　</span></div>
    <section className="page">
      <div className="section-head"><div><div className="eyebrow">02 / Pick your poison</div><h2 className="section-heading">Today’s cabinet</h2></div><Link href="/games" className="button button-ghost button-small" data-testid="link-see-all">See all 10 →</Link></div>
      <div className="game-grid">{featured.map((game, index) => <GameCard key={game.slug} game={game} index={index} />)}</div>
    </section>
    <section className="page" style={{paddingTop:0}}>
      <div className="manifesto"><div className="manifesto-card"><b>01</b><h3>Open the box.</h3><p>Every game starts instantly. Your break should not need an onboarding flow.</p></div><div className="manifesto-card"><b>02</b><h3>Find your rhythm.</h3><p>Quick rounds when the kettle is on. Deeper puzzles when the afternoon stretches.</p></div><div className="manifesto-card"><b>03</b><h3>Keep your score.</h3><p>Your best runs stay on this device, quietly waiting for a rematch.</p></div></div>
    </section>
  </main>;
}

function GameCard({ game, index }: { game: (typeof games)[number]; index: number }) {
  return <Link href={`/game/${game.slug}`} className="game-card" data-testid={`card-game-${game.slug}`}><span className="corner-mark">{String(index + 1).padStart(2,'0')}</span><div><div className="game-symbol">{game.symbol}</div><h3>{game.name}</h3><p>{game.description}</p></div><div className="game-card-meta"><span className="tag">{game.category} / 01 player</span><span className="tag">play →</span></div></Link>;
}