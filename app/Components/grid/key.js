import { useContext, useEffect } from "react";
import { GameContext } from "@/app/Context";
export default function Key({ row, index }) {
  const { guesses } = useContext(GameContext);

  return (
    <div
      className={`${
        guesses[row][index]?.color
          ? ` ${guesses[row][index]?.color} text-white`
          : "bg-white"
      }
               h-16 w-16 text-black font-bold flex justify-center items-center mt-3`}
    >
      {guesses[row][index]?.letter}
    </div>
  );
}
