import Header from '../../Components/Search/Header';

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
        <div className="lg:col-span-6 col-span-7 md:col-span-6">
          {children}
        </div>

      </main>

    </>
  );
}
