import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (
    <div
      className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Hardcoded contact information */}
        <p className="text-white font-medium mt-4">
          If you want to email me, you can reach me at{" "}
          <a
            href="mailto:ubaid311113@gmail.com"
            className="text-blue-400 hover:underline"
          >
            ubaid311113@gmail.com
          </a>.
        </p>
        <p className="text-white font-medium mt-4">
          You can also connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/ubaidusman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a> and view my projects on{" "}
          <a
            href="https://github.com/ubaidullaah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>.
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
