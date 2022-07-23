import { Helmet } from "react-helmet";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import { useSettings } from "./context/SettingsContext";

function App() {
  const { image, setImage } = useSettings();

  useEffect(() => {
    setImage(localStorage.getItem("image"));
  }, [image]);

  return (
    <>
      <Helmet>
        <title>New Tab</title>
        <style>{`body { background-image: url(${image}) }`}</style>
      </Helmet>
      ;
      <div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
