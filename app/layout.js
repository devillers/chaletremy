import './globals.css';

export const metadata = {
  title: 'Chalet Remy',
  description: 'chalet 26 personnes, 600 m2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="*">{children}</body>
    </html>
  );
}
