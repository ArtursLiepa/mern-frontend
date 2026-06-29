import "./StartUpComponent.css";

const StartUpComponent = ({ techList }) => {
  const UsedTechlist = techList.map((items) => {
    return <li key={items.id}>{items.name}</li>;
  });

  return (
    <div className="startupContainer">
      {`This project demonstrates modern full-stack web development using the MERN stack and cloud-native deployment technologies.`}
      <ul className="testingList">
        <fieldset>
          <legend></legend>
          <ul>{UsedTechlist}</ul>
        </fieldset>
      </ul>
    </div>
  );
};

export default StartUpComponent;
