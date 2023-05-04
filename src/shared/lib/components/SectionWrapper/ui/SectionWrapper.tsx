import { motion } from "framer-motion"
import { styles } from "../../../../../styles"
import { staggerContainer } from "../../../../utils/motion"

interface SectionWrapperProps {
  Component: JSX.Element
  idName: string
}

function SectionWrapper<P extends SectionWrapperProps>(Component: React.ComponentType<P>, idName: string) {
  return function HOC(props: Omit<P, keyof SectionWrapperProps>){
    return(
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>&nbsp;</span>
        <Component {...props as P}/>
      </motion.section>
  )
}
}
export default SectionWrapper
