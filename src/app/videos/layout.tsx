import Header from '../../Components/Search/Header';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="grid gird-cols-8 lg:grid-cols-9">
        <div className=" lg:col-span-1" />
        <div className="lg:col-span-6 col-span-7  mx-3 md:col-span-6">
          {children}
        </div>

      </main>

    </>
  );
}
