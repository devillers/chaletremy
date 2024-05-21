import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Chalet Remy',
  description: 'chalet 26 personnes, 600 m2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="*">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
