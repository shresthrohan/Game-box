import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import { games, type GameCategory } from '@/data/games';

export default function Library() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | GameCategory>('all');
  const visible = useMemo(() => games.filter((game) => (category === 'all' || game.category === category) && `${game.name} ${game.description} ${game.category}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <main className="page">
    <div className="about-hero" style={{paddingBottom:'1rem'}}><div className="eyebrow">The cabinet / 10 games</div><h1>Choose your<br /><span style={{color:'#d7f45e'}}>next round.</span></h1><p className="hero-copy">One click from a clean board and a fresh score. Filter by mood, search by name, then get out of the way.</p></div>
    <div className="library-toolbar"><div className="search-wrap"><span className="search-icon">⌕</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the cabinet..." aria-label="Search games" data-testid="input-search-games" /></div><div className="filter-tabs" role="tablist" aria-label="Filter games">{(['all','Board','Puzzle','Word','Arcade','Casual'] as const).map((filter) => <button key={filter} className={`filter-tab ${category === filter ? 'active' : ''}`} onClick={() => setCategory(filter)} role="tab" aria-selected={category === filter} data-testid={`button-filter-${filter}`}>{filter === 'all' ? 'All games' : filter}</button>)}</div></div>
    {visible.length ? <div className="game-grid">{visible.map((game, index) => <Link href={`/game/${game.slug}`} className="game-card" key={game.slug} data-testid={`card-library-${game.slug}`}><span className="corner-mark">{String(index + 1).padStart(2,'0')}</span><div><div className="game-symbol">{game.symbol}</div><h3>{game.name}</h3><p>{game.description}</p></div><div className="game-card-meta"><span className="tag">{game.category}</span><span className="tag">play →</span></div></Link>)}</div> : <div className="empty-state"><div className="game-symbol">⌕</div><h2>No games in that corner.</h2><p className="muted">Try a shorter search, or reset the cabinet filters.</p><button className="button button-primary" onClick={() => {setQuery(''); setCategory('all');}} data-testid="button-reset-search">Reset search</button></div>}
  </main>;
}