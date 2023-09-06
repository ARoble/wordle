import { MdClose } from "react-icons/md";
import Rules from "./rules";
import Correct from "./correct";
export default function Modal({ onClick, modal, word }) {
  return (
    <div className="absolute top-[-75px]">
      <div className="text-white h-screen w-screen opacity-90 bg-gray-900"></div>
      <div className="flex justify-center">
        <div className="absolute top-32 bg-black w-[400px]  rounded-md">
          <div className="flex justify-end px-5 py-4">
            <MdClose size={23} onClick={onClick} />
          </div>
          {modal.type == "rules" && <Rules />}
          {modal.type == "correct" && <Correct word={word} />}
        </div>
      </div>
    </div>
  );
}
