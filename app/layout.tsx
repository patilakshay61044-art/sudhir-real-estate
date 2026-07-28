import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Sudhir Patil | San Diego REALTOR®',
  description: 'Sudhir Patil, California REALTOR® based in San Diego. Helping you find your dream home with personalized guidance and expert negotiation. DRE #02387796.',
  keywords: ['San Diego real estate', 'REALTOR', 'Sudhir Patil', 'buying', 'selling', 'investing', 'California'],
  authors: [{ name: 'Sudhir Patil' }],
  openGraph: {
    title: 'Sudhir Patil | San Diego REALTOR®',
    description: 'Helping you find your dream home in San Diego. DRE #02387796.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
