/** @format */
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/image';
const SideBar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    
  };
  return (
    <>
      <Image
        src='https://avatars.githubusercontent.com/u/59350157?s=400&u=f02da330542307261118400864e0674a5069f3d2&v=4'
        alt='user avatar'
        className='w-32 h-32 mx-auto border rounded-full'
        height="138px"
        width="138px"
        layout='intrinsic'
        quality="100"
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>yusoff</span>
        nike01
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>
        Software Engineer
      </p>
      <a
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'
        href=''
        download='resume.pdf'
      >
        {' '}
        <GiTie className='w-6 h-6' /> Download Resume
      </a>
      {/* Sosial icon  */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
        <a href='https://www.youtube.com/channel/UCEzsOMtcUo-mdaUkWr38HzQ'>
          <AiFillYoutube className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://github.com/yusoffnike01'>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/tengku-yusoff-tengku-ibrahim-shukrillah-a441131a4'>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/* Address */}
      <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500 '>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Kelantan, Malaysia</span>
        </div>
        <p className='my- 2'>tengkuyusoff19@gmail.com</p>
        <p className='my-2'>011-64219238</p>
      </div>
      {/* Email Button */}
      <button
        className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
        onClick={() => window.open('mailto: tengkuyusoff19@gmail.com')}
      >
        Email me
      </button>
      <button
      onClick={changeTheme}
      className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-10'>
        Toogle Theme
      </button>
    </>
  );
};

export default SideBar;
