import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const links = [{ href:'/', label:'Home' }, { href:'/games', label:'All games' }, { href:'/about', label:'About' }];
  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <Link href="/" className="brand" data-testid="link-brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">+</span><span>GAMEBOX</span>
        </Link>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {links.map((link) => <Link key={link.href} href={link.href} className={`nav-link ${location === link.href ? 'active' : ''}`} data-testid={`link-nav-${link.label.toLowerCase().replaceAll(' ','-')}`} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </nav>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} data-testid="button-menu" onClick={() => setOpen((value) => !value)}>MENU</button>
      </div>
    </header>
  );
}

export function Footer() {
  return <footer className="footer"><span><strong>GAMEBOX</strong> — tiny games, big replay energy.</span><span>Made for the five-minute break.</span></footer>;
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <div className="app-shell"><Navbar />{children}<Footer /></div>;
}

export function GameShell({ children }: { children: React.ReactNode }) {
  return <div className="app-shell"><Navbar />{children}<Footer /></div>;
}