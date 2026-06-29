import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutComponent from "./components/LayoutComponent/LayoutComponent";
import StartUpComponent from "./components/StartUpComponent/StartUpComponent";
import { useEffect, useState } from "react";

function App() {
  const [techList, setTechList] = useState([]);
  const [projectInfo, setProjectInfo] = useState({});

  const url = process.env.REACT_APP_API_URL;

  const getTechList = () => {
    fetch(`${url}/technologies`)
      .then((response) => response.json())
      .then((data) => setTechList(data));
  };

  const getProjectInfo = () => {
    fetch(`${url}/projectinfos`)
      .then((response) => response.json())
      .then((data) => setProjectInfo(data));
  };

  useEffect(getTechList, []);
  useEffect(getProjectInfo, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route
            index
            element={
              <StartUpComponent projectInfo={projectInfo} techList={techList} />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
