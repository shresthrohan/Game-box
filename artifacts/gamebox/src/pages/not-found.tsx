import { Link } from 'wouter';

export default function NotFound() {
  return <main className="page" style={{minHeight:'70vh',display:'grid',placeItems:'center'}}><div style={{textAlign:'center'}}><div className="display" style={{color:'#ff8054'}}>404</div><h1 style={{fontSize:'2rem',letterSpacing:'-.06em'}}>That cabinet is empty.</h1><p className="muted">The page you tried to play does not exist.</p><Link href="/games" className="button button-primary" data-testid="link-404-games">Back to the games →</Link></div></main>;
}