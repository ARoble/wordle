import { BsQuestion } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { useContext, useState } from "react";
import { GameContext } from "./Context";
export default function Header() {
  const { setModal } = useContext(GameContext);
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-between  pt-10  text-white">
      <div className="flex space-x-2">
        {/* <FiMenu size={28} /> */}
        <BsQuestion
          size={28}
          onClick={() => setModal({ status: true, type: "rules" })}
          className="hover:cursor-pointer"
        />
      </div>
      <div className="text-center ">
        <h1 className="text-3xl font-bold space-x-1">
          <span className="bg-green-500 px-4 py-2">W</span>
          <span className="bg-yellow-500 px-4 py-2">O</span>
          <span className="bg-gray-500 px-4 py-2">R</span>
          <span className="bg-green-500 px-4 py-2">D</span>
          <span className="bg-yellow-500 px-4 py-2">L</span>
          <span className="bg-gray-500 px-4 py-2">E</span>
        </h1>
        <h1 className="mt-4 text-xs">A WORD GAME</h1>
      </div>
      <div className="flex space-x-2 relative  ">
        <MdLeaderboard
          size={25}
          className="hover:cursor-pointer"
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
        />

        <div
          className={`${
            !show && "hidden"
          } absolute bg-gray-900 py-2 w-52 top-7 -left-[120px] rounded-sm`}
        >
          <h1 className="text-center text-sm">Feature coming soon 😅 </h1>
        </div>

        {/* <AiOutlineSetting size={25} /> */}
      </div>
    </div>
  );
}
