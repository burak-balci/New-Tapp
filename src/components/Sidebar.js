import { useState } from "react";
import ModalComp from "./ModalComp";
import Todo from "./Todo";
import Timer from "./Timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { useSettings } from "../context/SettingsContext";

function Sidebar() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const { theme } = useSettings();

  const handleClick = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div>
      <div className="flex overflow-x-hidden h-screen -mt-6">
        <aside
          className={`${
            sideBarOpen && `-ml-96`
          } flex-shrink-0 w-96 flex flex-col border-r transition-all duration-300 `}
        >
          <nav className="flex-1 flex flex-col bg-gradient-to-b from-green-300 via-blue-500 to-purple-600 overflow-auto pb-5">
            <Todo />
          </nav>
        </aside>
        <div className="flex-1 ">
          <header className="flex justify-between items-center p-4 text-semibold text-lg text-gray-300 bg-transparent">
            <button
              className="p-1 mr-4 flex justify-center"
              onClick={() => handleClick()}
            >
              <div
                className={`${theme} w-24 p-2 rounded-md hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600`}
              >
                {sideBarOpen ? (
                  <FontAwesomeIcon icon={faAnglesRight} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesLeft} />
                )}
              </div>
            </button>
            <div className="flex">
              <ModalComp />
            </div>
          </header>
          <main className="flex justify-center mt-96">
            <Timer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
