import Tilt from "react-parallax-tilt";
import {motion} from 'framer-motion'

import { styles } from "../../../styles";
import { services } from "../../../shared/const/content";
import { fadeIn, textVariant } from "../../../shared/utils/motion";
import {SectionWrapper} from '../../../shared/lib/components/SectionWrapper';

const ServiceCard = ({index, title, icon}: any) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        // @ts-ignore
          options={{max: 45, scale: 1, speed: 450, }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]"
    >
      Highly motivated and results-driven Frontend Developer with 2 years of experience in developing and maintaining web applications using React, JavaScript, TypeScript, Ant Design, Material UI, Mobx, React Query, and Redux. Proven ability to work effectively in fast-paced environments and deliver high-quality results. Experienced in building scalable, performant, and user-friendly applications that meet the business needs.
    </motion.p>

    <div className="mt-20 flex justify-center flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/> 
      ))}
    </div>
  </>
  );
};

// const About = SectionWrapper(BaseAbout, 'About');

export default SectionWrapper(About, 'about');
