import { useState } from "react";
import Settings from "./Settings";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useSettings } from "../context/SettingsContext";
import { useEffect } from "react";

function ModalComp() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useSettings();
  const [background, setBackground] = useState("");

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "70%",
      bottom: "30%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: background,
      color: "rgb(55, 65, 81)",
    },
  };

  const setbg = (color) => {
    if (color === "bg-orange-400") {
      setBackground("rgb(251 146 60)");
    } else if (color === "bg-cyan-500") {
      setBackground("rgb(6 182 212)");
    } else if (color === "bg-violet-700") {
      setBackground("rgb(109 40 217)");
    } else {
      setBackground("rgb(75 85 99)");
    }
  };

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  useEffect(() => {
    setbg(theme);
  }, [theme]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = (color) => {
    setTheme(color);
  };

  return (
    <div>
      <div>
        <button
          className={`${theme} w-24 p-2 rounded-md hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600`}
          onClick={openModal}
        >
          <FontAwesomeIcon icon={faGear} />
        </button>
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="flex flex-row justify-between items-center mb-3">
            <div className="font-bold text-2xl text-white font-lato">
              Settings
            </div>
            <div className="flex justify-end font-bold w-10 text-red-500">
              <button onClick={closeModal}>X</button>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 items-center my-8">
            <div className="font-bold text-2xl text-white font-lato">
              Themes :
            </div>
            <div>
              <button
                onClick={() => handleClick("bg-orange-400")}
                className="rounded-full bg-orange-600 p-4"
              ></button>
            </div>
            <div>
              <button
                onClick={() => handleClick("bg-gray-600")}
                className="rounded-full bg-gray-800 p-4"
              ></button>
            </div>
            <div>
              <button
                onClick={() => handleClick("bg-cyan-500")}
                className="rounded-full  bg-cyan-700 p-4"
              ></button>
            </div>
            <div>
              <button
                onClick={() => handleClick("bg-violet-700")}
                className="rounded-full  bg-violet-900 p-4"
              ></button>
            </div>
          </div>

          <div className="flex gap-x-5 font-bold ">
            <label className="text-2xl text-white font-lato items-center">
              Set Background :
            </label>
            <Settings />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ModalComp;
