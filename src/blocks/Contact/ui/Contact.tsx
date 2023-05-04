import { useEffect, useState, useRef, ChangeEvent, FormEventHandler } from "react";
import { motion } from "framer-motion";

import emailjs from '@emailjs/browser';
import { styles } from "../../../styles";
import { EarthCanvas } from "../../../widgets/EarthCanvas";
import { SectionWrapper } from "../../../shared/lib/components/SectionWrapper";
import { slideIn } from "../../../shared/utils/motion";

type ContactForm = {
  name: string, 
  email: string,
  message: string,
}

const initForm: ContactForm = {
  name: '',
  email: '',
  message: ''
}

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState<ContactForm>(initForm)
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent) => {
    
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('tween', 0.2, 1, 'left' )}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your Email"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <textarea 
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('tween', 0.2, 1, 'right' )}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>);
};

export default SectionWrapper(Contact, 'contact');
