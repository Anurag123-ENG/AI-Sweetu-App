import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link href="/">
        <a style={{ marginRight: '15px', color: '#fff', textDecoration: 'none' }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: '#fff', textDecoration: 'none' }}>About</a>
      </Link>
    </nav>
  );
}