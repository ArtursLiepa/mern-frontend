import "./LayoutComponent.css";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import ContentComponent from "./ContentComponent/ContentComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import { useEffect, useState } from "react";

const LayoutComponent = () => {
  const [information, setInformation] = useState({});
  // const url = process.env.REACT_APP_API_URL;
  // const url = "http://localhost:3005";

  const getInformationTitle = () => {
    fetch("http://localhost:3005/information")
      .then((response) => response.json())
      .then((data) => setInformation(data));
  };

  useEffect(getInformationTitle, []);

  return (
    <div className="layout">
      <HeaderComponent user={information} />
      <ContentComponent />
      <FooterComponent user={information} />
    </div>
  );
};

export default LayoutComponent;
