import { useState } from "react";
import Game from "./components/Game";
import Header from "./components/Header";
import Rules from "./components/Rules";
import RulesButton from "./components/RulesButton";

function App() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [score, setScore] = useState(0);

  const toggleRulesButton = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  const closeRules = () => {
    setIsRulesOpen(false);
  };

  return (
    <div className="App bg__gradient w-screen h-screen relative overflow-x-hidden">
      <div className="flex items-center flex-col w-[1366px] h-[900px] mx-auto lg:w-auto lg:h-[920px] lg:mb-16 md:w-auto md:gap-0 ss:gap-0 ss:w-auto ss:h-[900px] ss:mb-0 xs:w-full xs:h-full xs:gap-0">
        <Header score={score} />
        <Game setScore={setScore} />
        <RulesButton toggleRulesButton={toggleRulesButton} />
        <Rules isRulesOpen={isRulesOpen} closeRules={closeRules} />
      </div>
    </div>
  );
}

export default App;
