'use client';
import './globals.css';
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';
import { comforta, Cabine } from './font';

const Layout = ({ children }) => {
  const pathname = usePathname();
  const showNav = pathname !== '/';

  return (
    <html lang="en">
      <body>
        {showNav && <Navbar />}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
