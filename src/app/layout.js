import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home Page | Blogs',
    template: '%s | Blogs',
  },
  description: 'Create unique and beautiful blogs easily.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
