import Header from '../../Components/Search/Header';
import Card from '../../Components/Search/Card';

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
