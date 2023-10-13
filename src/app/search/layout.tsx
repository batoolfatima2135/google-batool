import type { Metadata } from 'next';
import Header from '../../Components/Search/Header';
import Card from '../../Components/Search/Card';


export const metadata: Metadata = {
  title: 'Batool Fatima',
  description: 'I am Batool Fatima, a Front-End developer, ready to embark on new challenges. With a solid foundation in Front-End technologies like JavaScript, React, and Redux I excel at creating efficient Web applications.Frontend: JavaScript, React, Redux, BootstrapTools & Methods: Git, GitHub, Chrome Dev Tools.Professional: Remote Pair-Programing, Teamwork, Mentoring',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="grid grid-cols-9">
        <div className=" col-span-1" />
        <div className="lg:col-span-5 col-span-7 md:col-span-5">
          {children}
        </div>
        <div className="col-span-3 hidden lg:block md:block">
          <Card />
        </div>
      </main>

    </>
  );
}
