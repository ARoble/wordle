import { useContext } from "react";
import { GameContext } from "../Context";

export default function LettersSelector() {
  const { letters, setLetters, setModal, handleOnChangeLetters, setIsPlaying } =
    useContext(GameContext);

  return (
    <div className="flex items-center justify-center space-x-4 w-full ">
      <h1 className="text-lg">Letters:</h1>
      <div className="pt-2  w-60">
        <input
          type="range"
          min="4"
          max="6"
          value={letters}
          className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
          onChange={(e) => handleOnChangeLetters(e.target.value)}
        />
      </div>
      <button
        className="bg-gray-500 px-2 py-2 text-xs rounded hover:cursor-pointer"
        onClick={() => {
          setModal({ status: true, type: "lost" });
          setIsPlaying(false);
        }}
      >
        Give up
      </button>
    </div>
  );
}
