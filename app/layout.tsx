import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:{default:'Zion Systems Corporation',template:'%s / Zion Systems Corporation'},
  description:'Tools for people and machines. Digital systems that make organizations easier to operate.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
