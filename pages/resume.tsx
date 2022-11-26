/** @format */

import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';

const Resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-6 py-2'
    >
      {/* //! Education & Experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>
              Bachelor’s Degree in Computer Science (Software Engineering)
            </h5>
            <p className='font-semibold'>
              Universiti Malaysia Terengganu (2017-2021)
            </p>
            <p className='my-3'>
              <li>
                Overall CGPA : <span className='font-bold'>3.42</span>
              </li>
              <li>Participants in open chess tournament</li>
              <li>
                silver medal for this innovation at Minggu Penyelidikan dan
                Inovasi 2020
              </li>
              <li>Finalist of unimaker 2019</li>
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>Software Developer</h5>
            <p className='font-semibold'>Blue VInegar Sdn Bhd</p>
            <p className='my-3'>
              <li>
                Led a team of 3 in the design, development, implementation, and
                maintenance of a smart washroom system for one of the tallest
                twin towers in the world
              </li>

              <li>
                development, implementation and maintenance of a
                gift-with-purchase (GWP) system a subsidiary to one of the
                largest ecommerce giant in the world
              </li>
              <li>Development backend system loyathe using NestJS</li>
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className='grid gap-9 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
          <div className='my-2'>
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
