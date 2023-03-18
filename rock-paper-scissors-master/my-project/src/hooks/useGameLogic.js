import { useState, useEffect } from "react";

export const useGameLogic = (myPick, gameImages, setScore) => {
  const [housePick, setHousePick] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [ifWinner, setIfWinner] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gameImages.length);

    const housePickTimer = setTimeout(() => {
      setHousePick(gameImages[randomIndex]);
    }, 600);

    const resultTimer = setTimeout(() => {
      setShowResult(true);
    }, 1500);

    return () => {
      clearTimeout(housePickTimer);
      clearTimeout(resultTimer);
    };
  }, [gameImages]);

  useEffect(() => {
    if (housePick !== null) {
      if (myPick === housePick.name) {
        setResult("DRAW");
      } else if (
        (myPick === "Rock" && housePick.name === "Paper") ||
        (myPick === "Rock" && housePick.name === "Spock") ||
        (myPick === "Paper" && housePick.name === "Scissors") ||
        (myPick === "Paper" && housePick.name === "Lizard") ||
        (myPick === "Scissors" && housePick.name === "Spock") ||
        (myPick === "Scissors" && housePick.name === "Rock") ||
        (myPick === "Spock" && housePick.name === "Lizard") ||
        (myPick === "Spock" && housePick.name === "Paper") ||
        (myPick === "Lizard" && housePick.name === "Rock") ||
        (myPick === "Lizard" && housePick.name === "Scissors")
      ) {
        setResult("YOU LOSE");
        setIfWinner(false);
        setScore((score) => score - 1);
      } else {
        setResult("YOU WIN");
        setIfWinner(true);
        setScore((score) => score + 1);
      }
    }
  }, [housePick, myPick, setScore]);

  return { housePick, showResult, result, ifWinner };
};
