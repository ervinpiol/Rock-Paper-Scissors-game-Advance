import React from "react";
import { motion } from "framer-motion";

const GameOptions = ({ name, image, colors, size, shadow }) => {
  return (
    <motion.div
      className={`${colors} ${shadow} p-9 pb-8 rounded-full ss:p-6 ss:pb-5 xs:p-4 z-[100] `}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`${size} bg-white rounded-full top-shadow-big`}>
        <img src={image} alt={name} className="w-20 ss:w-14 xs:w-14" />
      </div>
    </motion.div>
  );
};

export default GameOptions;
