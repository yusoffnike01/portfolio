/** @format */

import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const Home = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex flex-grow flex-col px-6 pt-1 '
    >
      <h6 className='my-3 text-base font-medium'>
        Skilled and motivated software engineer with over 2 years of experience
        in full stack development. Extensive hands-on experience in highly
        scalable app and infrastructure architecture design and development
      </h6>
      <div
        className='dark:bg-dark-100 mt-5 flex-grow bg-gray-400 p-4 '
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className='my-3 text-xl font-semibold tracking-wide'>
          What I am doing
        </h4>

        <motion.div
          variants={stagger}
          initial='initial'
          animate='animate'
          className='my-3 grid gap-6 md:grid-cols-2'
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              className='dark:bg-dark-200 col-span-2 rounded-lg bg-gray-200 p-2 md:col-span-1 '
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Home;

// export const  GetServerSideProps = async (context:GetServerSidePropsContext)=>{
//   const res= await fetch('http://localhost:3000/api/services')
//   const data = await res.json();
//   console.log(services);
//   return { props: { services: data.services } }
// }
