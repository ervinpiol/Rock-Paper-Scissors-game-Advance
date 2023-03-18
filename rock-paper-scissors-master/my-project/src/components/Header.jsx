import React from "react";
import { motion } from "framer-motion";

const Header = ({ score }) => {
  return (
    <motion.div
      className=" flex items-center justify-between mb-24 mt-20 w-[780px] border-2 border-HeaderOutline px-6 py-4 rounded-2xl md:w-[650px] md:mb-12 ss:max-w-[550px] ss:mt-10 ss:mb-0 ss:min-w-[400px] xs:w-[360px] xs:mt-10 xs:mb-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="text-white w-32 xs:w-24">
        <h2 className="text-3xl leading-6 xs:text-2xl xs:leading-5">
          ROCK PAPER SCISSORS LIZARD SPOCK
        </h2>
      </div>
      <div className="bg-white w-[150px] py-4 flex items-center flex-col rounded-xl xs:w-28">
        <span className="text-ScoreText tracking-[3px]">SCORE</span>
        <h1 className="text-DarkText text-6xl xs:text-5xl">{score}</h1>
      </div>
    </motion.div>
  );
};

export default Header;
