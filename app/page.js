"use client";
import Grid from "./Components/grid/grid";
// import Keyboard from "./Components/keyboard";
import { useState, useEffect } from "react";
import data from "./data/words.json";
import letters4 from "./data/4letters.json";
import letters5 from "./data/5letters.json";
import letters6 from "./data/6letters.json";
import Modal from "./Components/modal";
import Header from "./Header";
import Confetti from "react-confetti";
import initKeys from "./data/keys.json";
import initBoard from "./data/board.json";
import LettersSelector from "./Components/lettersSelector";
import { GameContext } from "./Context";
import Keyboard from "./Components/Keyboard/keyboard";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  const [word, setWord] = useState("GOODP");
  const [letters, setLetters] = useState(4);
  const [row, setRow] = useState(0); // row on the grid players on
  const [guesses, setGuesses] = useState([[], [], [], [], [], []]); // an array of words guessed
  // const [board, setBoard] = useState([]);
  const [keys, setKeys] = useState([...initKeys]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [won, setWon] = useState(false);
  const [modal, setModal] = useState({ status: false, type: "" });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initGame();
    setLoading(false);
  }, [letters]);

  const initGame = () => {
    setIsPlaying(true);
    setModal({ status: false, type: "" });
    setWon(false);
    setRow(0);
    setGuesses([[], [], [], [], [], []]);
    setKeys([...initKeys]);
    const randomIndex = Math.floor(Math.random() * data.length) + 1; //index of the words
    if (letters === 4) setWord(letters4[randomIndex].toUpperCase());
    if (letters === 5) setWord(letters5[randomIndex].toUpperCase());
    if (letters === 6) setWord(letters6[randomIndex].toUpperCase());
  };

  const handleOnKeyPress = (letter) => {
    if (letter == "Enter") return handleOnEnter();
    if (letter == "←") return handleOnBackspace();
    if (guesses[row].length >= letters) return;
    let newGuess = guesses;
    newGuess[row].push({ letter: letter });
    setGuesses([...newGuess]);
  };

  const handleOnEnter = () => {
    //code

    if (guesses[row].length < letters) return;
    // check if words right
    checkIfCorrectGuess();

    if (row === 5) gameOver();

    //Color grid
    const splitWord = word.split("");

    const guessesCopy = guesses;
    //Note: we dont need red just yellow and green

    guesses[row].map((letter, index) => {
      guessesCopy[row][index].color = "bg-gray-500";
      if (splitWord.includes(letter.letter)) {
        guessesCopy[row][index].color = "bg-yellow-500";
      }
      if (splitWord[index] == guesses[row][index].letter) {
        guessesCopy[row][index].color = "bg-green-500";
      }
    });
    setGuesses([...guessesCopy]);
    //game over
    setRow(row + 1);
  };

  const handleOnBackspace = () => {
    //code
    const guessesCopy = guesses;
    guessesCopy[row].pop();
    setGuesses([...guessesCopy]);
  };

  const handleOnChangeLetters = (letters) => {
    if (guesses[0].length > 0) return;
    setLetters(letters * 1); //cause letters returns string
  };

  const checkIfCorrectGuess = () => {
    const guessedWord = guesses[row]
      .map((row) => {
        return row.letter;
      })
      .join("");
    if (word !== guessedWord) return;

    setIsPlaying(false);
    setWon(true);
    setModal({ status: true, type: "won" });
  };

  const gameOver = () => {
    setIsPlaying(false);
    setModal({ status: true, type: "lost" });
  };

  const newGame = () => {
    initGame();
  };

  if (loading) return;
  return (
    <div>
      <GameContext.Provider
        value={{
          letters,
          setLetters,
          keys,
          handleOnKeyPress,
          guesses,
          handleOnEnter,
          handleOnChangeLetters,
          row,
          word,
          newGame,
          modal,
          setModal,
          setIsPlaying,
        }}
      >
        <Header />
        {won && <Confetti width={2000} height={1000} />}
        <main className="relative flex flex-col items-center justify-center p-14">
          {word}
          <LettersSelector />
          <Grid />
          {(won || modal.giveUp) && (
            <button
              className="bg-blue-400 w-64 py-5 mt-10"
              onClick={() => newGame()}
            >
              Play again!
            </button>
          )}
          {isPlaying && <Keyboard keys={keys} />}
          {modal.status && <Modal modal={modal} setModal={setModal} />}
          <Link
            href="https://github.com/ARoble/wordle"
            target="_blank"
            className="absolute bottom-0 flex items-center space-x-1 text-gray-700 hover:cursor-pointer hover:text-gray-300"
          >
            <h1 className=" text-sm">Github</h1>
            <AiOutlineLink className=" mt-0.5" />
          </Link>
        </main>
      </GameContext.Provider>
    </div>
  );
}
