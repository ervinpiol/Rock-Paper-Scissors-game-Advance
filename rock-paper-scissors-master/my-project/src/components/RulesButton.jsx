import React from "react";
import { motion } from "framer-motion";

const RulesButton = ({ toggleRulesButton }) => {
  return (
    <motion.div
      className="ml-auto mt-auto lg:mr-10 md:mx-auto md:absolute md:bottom-32 ss:mx-auto ss:absolute ss:bottom-[-10px] xs:mx-auto xs:mb-12 z-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <button
        className="text-white px-10 py-2 border flex text-xl tracking-widest rounded-lg font-semibold hover:text-DarkText hover:border-DarkText"
        onClick={toggleRulesButton}
      >
        RULES
      </button>
    </motion.div>
  );
};

export default RulesButton;
