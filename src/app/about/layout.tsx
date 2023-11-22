
"use client"
import Header from '../../Components/Search/Header';
import { motion } from 'framer-motion';
import Card from '../../Components/Search/Card';

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
        <div className="lg:col-span-5 col-span-7 mx-5 md:col-span-5">
          {children}
        </div>
        <motion.div 
          className="col-span-3 hidden lg:block md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card />
        </motion.div>
      </main>

    </>
  );
}
