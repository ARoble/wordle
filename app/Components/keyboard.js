"use client";
import { useState } from "react";

export default function Keyboard({ handleOnClickKey, keys }) {
  return (
    <div className="mt-20">
      {keys.map((row, index) => (
        <div className="flex justify-center" key={index}>
          <div className="flex gap-2 ">
            {row.map((key, index) => (
              <button
                className={`${key.color ? key.color : "bg-gray-500"} ${
                  key?.type == "special" ? "w-20" : "w-12"
                } h-12 rounded-sm font-bold mt-2`}
                key={index}
                onClick={(e) => handleOnClickKey(key.letter)}
              >
                {key.letter}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
