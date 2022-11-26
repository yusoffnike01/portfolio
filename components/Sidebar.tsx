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
        className='mx-auto h-32 w-32 rounded-full border'
        height='138px'
        width='138px'
        layout='intrinsic'
        quality='100'
      />
      <h3 className='font-kaushan my-4 text-3xl font-medium tracking-wider'>
        <span className='text-green'>yusoff</span>
        nike01
      </h3>
      <p className='dark:bg-dark-200 dark:bg-black-500 my-3 rounded-full bg-gray-200 px-2 py-1'>
        Software Engineer
      </p>
      <a
        className='dark:bg-dark-200 dark:bg-black-500 my-3 flex items-center justify-center rounded-full bg-gray-200 px-2 py-1'
        href=''
        download='https://galleryyusoff.s3.amazonaws.com/Resume+Tengku+Yusof_+2022.pdf'
      >
        {' '}
        <GiTie className='h-6 w-6' /> Download Resume
      </a>
      {/* Sosial icon  */}
      <div className='mx-auto my-5 flex w-9/12 justify-around text-green-500 md:w-full'>
        <a href='https://www.youtube.com/channel/UCEzsOMtcUo-mdaUkWr38HzQ'>
          <AiFillYoutube className='h-8 w-8 cursor-pointer' />
        </a>
        <a href='https://github.com/yusoffnike01'>
          <AiFillGithub className='h-8 w-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/tengku-yusoff-tengku-ibrahim-shukrillah-a441131a4'>
          <AiFillLinkedin className='h-8 w-8 cursor-pointer' />
        </a>
      </div>
      {/* Address */}
      <div className='dark:bg-dark-200 dark:bg-black-500 my-5 bg-gray-200 py-4 '>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Kelantan, Malaysia</span>
        </div>
        <p className='my- 2'>tengkuyusoff19@gmail.com</p>
        <p className='my-2'>011-64219238</p>
      </div>
      {/* Email Button */}
      <button
        className='from-green w-8/12 cursor-pointer rounded-full bg-black bg-gradient-to-r to-blue-500 px-5 py-2 text-white hover:scale-105 focus:outline-none'
        onClick={() => window.open('mailto: tengkuyusoff19@gmail.com')}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className='from-green hover:scale-10 my-4 w-8/12 cursor-pointer rounded-full bg-black bg-gradient-to-r to-blue-500 px-5 py-2 text-white focus:outline-none'
      >
        Toogle Theme
      </button>
    </>
  );
};

export default SideBar;
