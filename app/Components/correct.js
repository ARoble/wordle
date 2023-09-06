export default function Correct({ word }) {
  return (
    <div className="p-5">
      <h1 className="text-2xl text-center font-bold">Correct!</h1>

      <div className="py-2">
        <div className="flex justify-center gap-2 mt-5">
          {word.split("").map((letter) => (
            <div className="w-14 h-14 flex justify-center items-center bg-green-400 text-black font-black">
              {letter}
            </div>
          ))}
        </div>

        <div className="text-center py-5">
          <p>congratulations on gerring the right word</p>
        </div>

        <button className="bg-blue-400 w-full py-5">Play again!</button>
      </div>
    </div>
  );
}
