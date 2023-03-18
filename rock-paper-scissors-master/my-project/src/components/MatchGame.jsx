import GameOption from "../components/GameOptions";
import gameDetails from "../constants/gameDetails";
import { useGameLogic } from "../hooks/useGameLogic";
import { motion } from "framer-motion";

const MatchGame = ({ myPick, setIsMatchGame, setScore }) => {
  const { housePick, showResult, result, ifWinner } = useGameLogic(
    myPick || gameDetails[0].name,
    gameDetails,
    setScore
  );

  return (
    <div className="flex justify-between min-w-[720px] h-[400px] items-center md:relative md:mt-[54px] ss:min-w-[500px] ss:relative ss:mt-12 xs:min-w-full xs:h-full xs:relative xs:mt-10 ">
      <div className="flex items-center flex-col gap-14 relative w-[312px] h-full xs:w-[200px] xs:flex-col-reverse xs:gap-10">
        <h3 className="text-white text-2xl tracking-[3px] xs:text-base">
          YOU PICKED
        </h3>
        {gameDetails.map(
          (option) =>
            option.name === myPick && (
              <GameOption
                key={option.id}
                name={option.name}
                image={option.image}
                colors={option.colors}
                size={option.size}
                shadow={option.shadow}
              />
            )
        )}
        {ifWinner && result === "YOU WIN" && (
          <motion.div
            className="winner"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="winner_second" />
            <div className="winner_third" />
          </motion.div>
        )}
      </div>
      {showResult && (
        <motion.div
          className="flex flex-col items-center gap-6 px-20 mt-20 w-[395px] lg:px-12 lg:w-[290px] md:absolute md:bottom-[-200px] md:right-[23%] ss:absolute ss:bottom-[-100px] ss:mt-0 ss:left-[22%] ss:w-[360px] xs:w-[40%] xs:absolute xs:p-0 xs:mt-0 xs:bottom-[-180px] xs:right-[30%] xs:-translate-x-1/2 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-6xl lg:text-5xl ss:text-5xl xs:text-4xl">
            {result}
          </h1>
          <button
            className="bg-white text-DarkText w-full py-3 text-lg tracking-widest rounded-lg"
            onClick={() => setIsMatchGame(false)}
          >
            PLAY AGAIN
          </button>
        </motion.div>
      )}
      <div className="flex items-center flex-col gap-14 relative w-[312px] h-full xs:flex-col-reverse xs:gap-10  xs:w-[200px]">
        <h3 className="text-white text-2xl tracking-[3px] xs:text-base">
          THE HOUSE PICKED
        </h3>
        {housePick ? (
          <GameOption
            key={housePick.id}
            name={housePick.name}
            image={housePick.image}
            colors={housePick.colors}
            size={housePick.size}
            shadow={housePick.shadow}
          />
        ) : (
          <div className="w-[220px] h-[220px] rounded-full bg-black bg-opacity-20 flex items-center justify-center absolute bottom-10 ss:w-[170px] ss:h-[170px] ss:bottom-28 xs:bottom-20 xs:w-[100px] xs:h-[100px]"></div>
        )}
        {result === "YOU LOSE" && (
          <motion.div
            className="winner"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="winner_second" />
            <div className="winner_third" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MatchGame;
