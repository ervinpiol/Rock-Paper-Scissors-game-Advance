import React from "react";
import CloseButton from "../assets/icon-close.svg";
import CloseButtonHover from "../assets/icon-close-hover.svg";
import RulesImage from "../assets/image-rules-bonus.svg";

const Rules = ({ isRulesOpen, closeRules }) => {
  return (
    <div
      className={`absolute w-screen h-screen top-0 left-0 flex justify-center items-center bg-black bg-opacity-60 z-[999] ${
        isRulesOpen ? "block" : "hidden"
      }`}
    >
      <div className="xs:w-screen xs:h-screen">
        <div className="bg-white px-8 pt-7 pb-11 rounded-lg xs:h-screen xs:w-screen  xs:flex xs:items-center xs:flex-col xs:justify-center xs:pt-32 xs:rounded-none">
          <div className="flex items-center  justify-between pb-6 xs:pb-0 ">
            <h2 className="text-3xl font-bold text-DarkText xs:text-5xl">
              RULES
            </h2>
            <img
              src={CloseButton}
              alt="CloseButton"
              onClick={closeRules}
              onMouseOver={(e) => (e.currentTarget.src = CloseButtonHover)}
              onMouseOut={(e) => (e.currentTarget.src = CloseButton)}
              className="xs:hidden"
            />
          </div>
          <img
            src={RulesImage}
            alt="RulesImage"
            className="xs:pt-12 xs:pb-32 py-4"
          />
          <img
            src={CloseButton}
            alt="CloseButton"
            onClick={closeRules}
            onMouseOver={(e) => (e.currentTarget.src = CloseButtonHover)}
            onMouseOut={(e) => (e.currentTarget.src = CloseButton)}
            className="hidden xs:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Rules;
