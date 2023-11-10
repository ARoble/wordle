import { useContext } from "react";
import { GameContext } from "@/app/Context";

export default function Keys({ keys, index }) {
  const { handleOnKeyPress } = useContext(GameContext);
  return (
    <div>
      <button
        className={`bg-gray-500 ${
          keys?.type == "special" ? "w-20" : "w-12"
        } h-12 rounded-sm font-bold mt-2`}
        keys={index}
        onClick={() => {
          handleOnKeyPress(keys.letter);
        }}
      >
        {keys.letter}
      </button>
    </div>
  );
}
