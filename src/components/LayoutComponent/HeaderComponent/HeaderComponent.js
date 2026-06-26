import "./HeaderComponent.css";

const HeaderComponent = (props) => {
  return (
    <div className="headerContainer">
      <h1>
        {`${props.user.name}`} <span>{`${props.user.lastname}`}</span>
      </h1>
    </div>
  );
};

export default HeaderComponent;
