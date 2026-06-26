import "./FooterComponent.css";

const FooterComponent = (props) => {
  return (
    <div className="footerContainer">
      <></>
      <div className="copyrightBlock">
        <p>
          &copy; 2026 {`${props.user.name} ${props.user.lastname}`}. All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
