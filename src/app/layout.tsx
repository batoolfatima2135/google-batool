import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProjectProvider from './projectProvider.tsx';
import LinksProvider from './linksProvider.tsx';
import CreativeBanner from '@/Components/Home/CreativeBanner.tsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Batool Fatima Zaidi',
  description:
    'I am Batool Fatima Zaidi, a Software engineer, ready to embark on new challenges. With a solid foundation in Front-End technologies like JavaScript, React, and Redux I excel at creating efficient Web applications.Frontend: JavaScript, React, Redux, BootstrapTools & Methods: Git, GitHub, Chrome Dev Tools.Professional: Remote Pair-Programing, Teamwork, Mentoring',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CreativeBanner />
        <ProjectProvider>
          <LinksProvider>{children}</LinksProvider>
        </ProjectProvider>
      </body>
    </html>
  );
}
