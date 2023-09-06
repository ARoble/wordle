"use client";
import { useState } from "react";

export default function Grid({ board }) {
  return (
    <div>
      {board.map((box, index) => (
        <div className="flex gap-3" key={index}>
          {box.map((value, index) => (
            <div
              className={`${
                value.color ? value.color : "bg-white"
              } h-16 w-16 text-black flex justify-center items-center mt-3`}
              key={index}
            >
              <h2 className="text-4xl font-bold">{value.letter}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
