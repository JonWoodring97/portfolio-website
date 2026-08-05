import Logo from './Logo';
import scrollToSection from '../scrollToSection';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#skills', label: 'Stack' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Logo />
        <nav aria-label="Primary">
          <ul className="nav-list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  className="nav-link"
                  href={href}
                  onClick={(event) => scrollToSection(event, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
