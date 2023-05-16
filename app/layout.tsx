import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Next 13',
  description: 'Dabbling with Next 13!',
};

export interface RootLayoutProps {
  children: React.ReactNode;
  githubOgModal: React.ReactNode;
}

export default async function RootLayout({
  children,
  githubOgModal,
}: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>
        {children}
        {githubOgModal}
      </body>
    </html>
  );
}
