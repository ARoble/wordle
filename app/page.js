"use client";
import Grid from "./Components/grid";
import Keyboard from "./Components/keyboard";
import { useState, useEffect } from "react";
import data from "./data/words.json";
import Modal from "./Components/modal";
import Header from "./Header";
import Confetti from "react-confetti";

export default function Home() {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState([0, 0]); //number of guess max=5
  const [board, setBoard] = useState([
    [
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
    ],
    [
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
    ],
    [
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
    ],
    [
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
    ],
    [
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
    ],
    [
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
      { letter: "" },
    ],
  ]);
  const [keys, setKeys] = useState([
    [
      { letter: "Q" },
      { letter: "W" },
      { letter: "E" },
      { letter: "R" },
      { letter: "T" },
      { letter: "Y" },
      { letter: "U" },
      { letter: "I" },
      { letter: "O" },
      { letter: "P" },
    ],
    [
      { letter: "A" },
      { letter: "S" },
      { letter: "D" },
      { letter: "F" },
      { letter: "G" },
      { letter: "H" },
      { letter: "J" },
      { letter: "K" },
      { letter: "L" },
    ],
    [
      { letter: "Enter", type: "special" },
      { letter: "Z" },
      { letter: "X" },
      { letter: "C" },
      { letter: "V" },
      { letter: "B" },
      { letter: "N" },
      { letter: "M" },
      { letter: "←", type: "special" },
    ],
  ]);
  const [openModal, setOpenModal] = useState({ state: false, type: "won" });
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length) + 1; //index of the words
    setWord(data[randomIndex].toUpperCase());
  }, []);
  //1. generate random 5 letter word
  //2.

  const guessGridChange = (letter) => {
    if (guess[1] != 5) {
      const updateBoard = board;
      updateBoard[guess[0]][guess[1]].letter = letter;
      setBoard(updateBoard);
      setGuess([guess[0], guess[1] + 1]);
      return;
    }
  };
  const checkGuess = () => {
    //1.wrong

    const guessedWord = board[guess[0]].map((letter) => {
      return letter.letter;
    });
    const updateBoard = board;
    guessedWord.map((guessLetter, guessIndex) => {
      word.split("").map((wordLetter, wordIndex) => {
        if (guessLetter === wordLetter) {
          if (guessIndex === wordIndex) {
            updateBoard[guess[0]][guessIndex].color = "bg-green-400";
            keyboardColoring(guessLetter, "bg-green-400");
          } else {
            updateBoard[guess[0]][guessIndex].color = "bg-yellow-500";
            keyboardColoring(guessLetter, "bg-yellow-500");
          }
        }
      });
    });
    setBoard(updateBoard);
    //correct
    if (guessedWord.join("") === word) {
      setOpenModal({ state: true, type: "correct" });
    }
    if (guess[0] > 5) {
      console.log("Game Over!");
    } else {
      setGuess([guess[0] + 1, 0]);
    }
    //2.right
  };

  const keyboardColoring = (guessLetter, bgColor) => {
    keys.map((row, index) =>
      row.filter((keyy, indexx) => {
        if (keys[index][indexx].letter === guessLetter) {
          const updateKeys = keys;
          updateKeys[index][indexx].color = bgColor;
          setKeys(updateKeys);
        }
      })
    );
  };

  const handleOnBackSpace = () => {
    if (guess[1] == 0) return;
    const updatedBoard = board;
    updatedBoard[guess[0]][guess[1] - 1].letter = "";
    setBoard(updatedBoard);
    setGuess([guess[0], guess[1] - 1]);
  };

  const handleOnClickKey = (letter) => {
    if (letter === "Enter") {
      if (guess[1] === 5) checkGuess();
      return;
    }
    if (letter === "←") {
      handleOnBackSpace();
      return;
    }
    guessGridChange(letter);
  };

  const handleModel = (type) => {
    setOpenModal({ ...openModal, state: true, type });
  };

  const handleCloseModel = () => {
    setOpenModal({ state: false });
  };
  return (
    <div>
      <Header handleOnClick={handleModel} />
      {openModal.type == "correct" && <Confetti width={2000} height={1000} />}
      <main className="relative flex flex-col items-center justify-center p-24">
        {word}
        {openModal.state && (
          <Modal onClick={handleCloseModel} modal={openModal} word={word} />
        )}
        <Grid board={board} />
        <Keyboard handleOnClickKey={handleOnClickKey} keys={keys} />
      </main>
    </div>
  );
}
