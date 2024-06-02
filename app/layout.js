'use client';
import './globals.css';

import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  const pathname = usePathname();
  const showNav = pathname !== '/';
  const showFooter = pathname !== '/';

  return (
    <html lang="fr">
      <body>
        {showNav && <Navbar />}
        <main>{children}</main>
        {showFooter && <Footer />}
      </body>
    </html>
  );
};

export default Layout;
