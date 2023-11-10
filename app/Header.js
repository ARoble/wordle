import { BsQuestion } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { useContext } from "react";
import { GameContext } from "./Context";
export default function Header() {
  const { setModal } = useContext(GameContext);
  return (
    <div className="flex justify-between items-center pt-10">
      <div className="flex space-x-2">
        {/* <FiMenu size={28} /> */}
        <BsQuestion
          size={28}
          onClick={() => setModal({ status: true, type: "rules" })}
          className="hover:cursor-pointer"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">WORDLE</h1>
      </div>
      <div className="flex space-x-2">
        <MdLeaderboard size={25} />
        {/* <AiOutlineSetting size={25} /> */}
      </div>
    </div>
  );
}
