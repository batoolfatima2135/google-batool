import Heading from '../Components/Home/Heading.jsx';
import Navbar from '../Components/Home/Navbar.jsx';
import Input from '../Components/Home/Input.jsx';
import Buttons from '../Components/Home/Buttons.jsx';
import Footer from '../Components/Home/Footer.jsx';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <main className="flex flex-col items-center justify-between">
          <Heading />
          <div className="lg:mt-8 mt-3 lg:w-1/2 w-3/4">
            <Input />
          </div>

          <Buttons />
          <p className=" text-xs lg:text-sm m-3">
            Google offered in:
            <a href="./Resume.pdf" target="_blank" className="text-blue-900">Batool</a>
          </p>
        </main>
      </div>
      <p className=" text-xs lg:text-sm text-gray-900 p-5">Pakistan</p>
      <Footer />
    </div>
  );
}
