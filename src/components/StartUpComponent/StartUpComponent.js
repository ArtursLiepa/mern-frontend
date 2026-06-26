import "./StartUpComponent.css";

const StartUpComponent = () => {
  return (
    <div className="startupContainer">
      {`This MERN (MongoDB, Express, React and Nodejs) full-stack app is meant for testing:`}
      <ul className="testingList">
        <li>The MINIKUBE Node work</li>
      </ul>
    </div>
  );
};

export default StartUpComponent;
