import Header from '../../Components/Search/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}
