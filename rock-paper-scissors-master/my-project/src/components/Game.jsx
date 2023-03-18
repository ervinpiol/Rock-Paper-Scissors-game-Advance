import React, { useState } from "react";
import Pentagon from "../assets/bg-pentagon.svg";
import MatchGame from "../components/MatchGame";
import gameDetails from "../constants/gameDetails";
import { motion } from "framer-motion";

const Game = ({ setScore }) => {
  const [isMatchGame, setIsMatchGame] = useState(false);
  const [myPick, setMyPick] = useState(null);

  const handleGameClick = (type) => {
    setIsMatchGame(true);
    setMyPick(type);
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      {!isMatchGame && (
        <div className="relative mx-auto md:mt-28 ss:mt-28 xs:mt-28">
          <div>
            <img
              src={Pentagon}
              alt="Pentagon"
              className="w-[360px] xs:w-[250px] xs:h-[250px]"
            />
          </div>
          <div>
            {gameDetails.map((item) => (
              <div
                key={item.id}
                className={` absolute p-5 pb-4 rounded-full cursor-pointer xs:p-3 ${item.styles} ${item.colors} ${item.playerShadow} `}
                onClick={() => handleGameClick(item.name)}
              >
                <div className="w-28 h-28 bg-white rounded-full top-shadow-small flex items-center justify-center xs:w-20 xs:h-20">
                  <img src={item.image} alt={item.name} className="xs:w-9" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isMatchGame && (
        <MatchGame
          isMatchGame={isMatchGame}
          setIsMatchGame={setIsMatchGame}
          myPick={myPick}
          setScore={setScore}
        />
      )}
    </motion.div>
  );
};

export default Game;
