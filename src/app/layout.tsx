import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './styles/globals.css';
export const metadata = {
  title: 'Products Gallery',
  description: 'Responsive Products Gallery using Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
