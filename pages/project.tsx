/** @format */

import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { projects as projectData } from '../data';
import { Category } from '../type';
import {motion} from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const Project = () => {
  const [projects, setProject] = useState(projectData);
  const [active, setActive] = useState('all');
  const [showDetail, setShowDetail] = useState<number|null>(null);

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProject(projectData);
      setActive(category);
      return;
    }

    const newArray = projectData.filter((project) =>
      project.category.includes(category)
    );
    setProject(newArray);
    setActive(category);
  };

  return (
    <motion.div
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className='px-5 py-2 overflow-y-scroll' style={{ height: '65vh' }}>
      <ProjectNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div 
       variants={stagger}
       initial="initial"
       animate="animate"
      className='relative grid grid-cols-12 gap-4 my-3'>
        {projects.map((project) => (
          <motion.div
          variants={fadeInUp}
          key={project.name}
          className='col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 sm:col-span-6 lg:col-span-4'>
            <ProjectCard project={project} key={project.name}  showDetail={showDetail} setShowDetail={setShowDetail}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export default Project;
