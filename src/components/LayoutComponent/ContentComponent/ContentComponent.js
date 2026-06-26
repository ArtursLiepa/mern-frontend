import { Outlet } from "react-router-dom";
import "./ContentComponent.css";

const ContentComponent = () => {
  return (
    <div className="contentContainer">
      <Outlet />
    </div>
  );
};

export default ContentComponent;
