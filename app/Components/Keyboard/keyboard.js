import { useState } from "react";
import { useContext } from "react";
import { GameContext } from "@/app/Context";
import Keys from "./keys";
export default function Keyboard() {
  const { keys } = useContext(GameContext);
  return (
    <div className="mt-8">
      {keys.map((row, index) => (
        <div className="flex justify-center" key={index}>
          <div className="flex gap-2 ">
            {row.map((keys, index) => (
              <Keys keys={keys} index={index} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
