export default function Rules() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">How to play?</h1>
      <p className="text-lg">Guess the Wordle in 6 tries.</p>
      <ul className="py-4">
        <li>Each guess must be a valid 5-letter word.</li>
        <li>
          The color of the tiles will change to show how close your guess was to
          the word.
        </li>
      </ul>
      <h2 className="font-bold">Examples</h2>
      <div className="py-2">
        <div className="flex gap-2">
          <div className="w-10 h-10 flex justify-center items-center bg-green-400 text-black font-black">
            W
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-black font-black">
            E
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-black font-black">
            A
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-black font-black">
            R
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-black font-black">
            Y
          </div>
        </div>
        <p className="py-2">
          <b>W</b> is in the word and in the correct spot.
        </p>
      </div>
      <div className="py-2">
        <div className="flex gap-2">
          <div className="w-10 h-10 flex justify-center items-center bg-white text-black font-black">
            P
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-yellow-400 text-black font-black">
            I
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-black font-black">
            L
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-black font-black">
            L
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-black font-black">
            S
          </div>
        </div>
        <p className="py-2">
          <b>I</b> is in the word but in the wrong spot..
        </p>
      </div>
      <div className="border-t pt-3 text-sm">
        <p>
          A new puzzle is released daily at midnight. If you haven’t already,
          you can sign up for our daily reminder email.
        </p>
      </div>
    </div>
  );
}
