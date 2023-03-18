import RockImage from "../assets/icon-rock.svg";
import PaperImage from "../assets/icon-paper.svg";
import ScissorsImage from "../assets/icon-scissors.svg";
import SpockImage from "../assets/icon-spock.svg";
import LizardImage from "../assets/icon-lizard.svg";

const gameDetails = [
  {
    id: 1,
    name: "Rock",
    image: RockImage,
    styles: "rock__gradient",
    colors: "rock__color",
    size: "rock__size",
    shadow: "rock__shadow",
    playerShadow: "player-rock__shadow",
  },
  {
    id: 2,
    name: "Paper",
    image: PaperImage,
    styles: "paper__gradient",
    colors: "paper__color",
    size: "paper__size",
    shadow: "paper__shadow",
    playerShadow: "player-paper__shadow",
  },
  {
    id: 3,
    name: "Scissors",
    image: ScissorsImage,
    styles: "scissors__gradient",
    colors: "scissors__color",
    size: "scissors__size",
    shadow: "scissors__shadow",
    playerShadow: "player-scissors__shadow",
  },

  {
    id: 4,
    name: "Spock",
    image: SpockImage,
    styles: "spock__gradient",
    colors: "spock__color",
    size: "spock__size",
    shadow: "spock__shadow",
    playerShadow: "player-spock__shadow",
  },
  {
    id: 5,
    name: "Lizard",
    image: LizardImage,
    styles: "lizard__gradient",
    colors: "lizard__color",
    size: "lizard__size",
    shadow: "lizard__shadow",
    playerShadow: "player-lizard__shadow",
  },
];
export default gameDetails;
