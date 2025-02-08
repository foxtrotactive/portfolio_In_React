// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '1rem',
      width: '100%',          // Full width
      display: 'flex',
      justifyContent: 'center', // Center the nav horizontally
    }}>
      <nav>
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          gap: '1rem', 
          margin: 0, 
          padding: 0 
        }}>
          <li>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link>
          </li>
          <li>
            <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          </li>
          <li>
            <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
