import "./StartUpComponent.css";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const StartUpComponent = ({ techList, projectInfo }) => {
  const implementedTechList = techList
    .filter((item) => item.status === "implemented")
    .map((item) => (
      <div className="techItemBlock">
        <FaCheckCircle color="green" />
        <li className="techItem" key={item.id}>
          {item.name}
        </li>
      </div>
    ));

  const comingSoonTechList = techList
    .filter((item) => item.status !== "implemented")
    .map((item) => (
      <div className="techItemBlock">
        <FaExclamationCircle color="Yellow" />
        <li className="techItem" key={item.id}>
          {item.name}
        </li>
      </div>
    ));

  return (
    <div className="startupContainer">
      <article className="techArticle">{projectInfo.name}</article>
      <section className="techListSection">
        <fieldset>
          <legend>Implemented</legend>
          <ul className="techList">{implementedTechList}</ul>
        </fieldset>
        <fieldset>
          <legend>Coming soon</legend>
          <ul className="techList">{comingSoonTechList}</ul>
        </fieldset>
      </section>
    </div>
  );
};

export default StartUpComponent;
