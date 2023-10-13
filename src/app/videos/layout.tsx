import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../../Components/Search/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Batool Fatima',
  description:
    'I am Batool Fatima, a Front-End developer, ready to embark on new challenges. With a solid foundation in Front-End technologies like JavaScript, React, and Redux I excel at creating efficient Web applications.Frontend: JavaScript, React, Redux, BootstrapTools & Methods: Git, GitHub, Chrome Dev Tools.Professional: Remote Pair-Programing, Teamwork, Mentoring',
};

export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {props.children}

      </main>
    </>
  );
}
