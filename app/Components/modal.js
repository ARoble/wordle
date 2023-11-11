import { MdClose } from "react-icons/md";
import Rules from "./modals/rules";
import Main from "./modals/main";
export default function Modal({ onClick, modal, newGame, setModal }) {
  return (
    <div className="absolute top-[-75px]">
      <div className="text-white h-screen w-screen opacity-90 bg-gray-900"></div>
      <div className="flex justify-center">
        <div className="absolute top-32 bg-black w-[400px]  rounded-md">
          <div className="flex justify-end px-5 py-4">
            <MdClose
              size={23}
              onClick={() => setModal({ ...modal, status: false })}
              className="hover:cursor-pointer"
            />
          </div>
          {modal.type == "rules" && <Rules />}
          {modal.type == "won" && <Main won={true} />}
          {modal.type == "lost" && <Main won={false} />}
        </div>
      </div>
    </div>
  );
}
