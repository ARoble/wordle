import { useContext } from "react";
import { GameContext } from "../../Context";

export default function Correct({ won }) {
  const { word, newGame } = useContext(GameContext);
  return (
    <div className="p-5">
      <h1 className="text-2xl text-center font-bold">
        {won ? "Correct!" : "The word was"}
      </h1>

      <div className="py-2">
        <div className="flex justify-center gap-2 mt-5">
          {word.split("").map((letter, index) => (
            <div
              className="w-14 h-14 flex justify-center items-center bg-green-400 text-black font-black"
              key={index}
            >
              {letter}
            </div>
          ))}
        </div>

        <div className="text-center py-5">
          <p>
            {" "}
            {won
              ? "congratulations on gerring the right word"
              : "Good try! Better luck next time 😊"}
          </p>
        </div>

        <button className="bg-blue-400 w-full py-5" onClick={() => newGame()}>
          Play again!
        </button>
      </div>
    </div>
  );
}
