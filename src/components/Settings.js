import { Helmet } from "react-helmet";
import { useSettings } from "../context/SettingsContext";
import ReactFileReader from "react-file-reader";

function Settings() {
  const { image, setImage } = useSettings();

  const handleFiles = (files) => {
    setImage(files.base64[0]);
    localStorage.setItem("image", files.base64[0]);
  };

  return (
    <div>
      <Helmet>
        <title>New Tab</title>
        <style>{`body { background-image: url(${image}) }`}</style>
      </Helmet>
      <ReactFileReader
        fileTypes={[".csv", ".zip"]}
        base64={true}
        multipleFiles={true}
        handleFiles={handleFiles}
      >
        <button className={`p-2 rounded-sm  bg-gray-200 hover:bg-gray-100`}>
          Upload image
        </button>
      </ReactFileReader>
    </div>
  );
}

export default Settings;
