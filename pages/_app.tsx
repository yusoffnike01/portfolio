/** @format */

import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className='grid grid-cols-12 gap-6 px:5 my-14 sm:px-20 md:px-32 lg:px-48 '>
        <div className='col-span-12 p-4 text-center bg-white rounded-2xl dark:bg-dark-500 lg:col-span-3 shadow-custom-light dark:shadow-custom-dark'>
          <SideBar />
        </div>
        <div className='flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl lg:col-span-9 dark:bg-dark-500'>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.router} />
          </AnimatePresence>
        
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
