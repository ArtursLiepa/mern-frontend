import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutComponent from "./components/LayoutComponent/LayoutComponent";
import StartUpComponent from "./components/StartUpComponent/StartUpComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<StartUpComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
