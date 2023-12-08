import "./PageHeading.css";

const PageHeading = (props) => {
  return (
    <>
      <h4 className="section-title">Gallery</h4>
      <h2 className="headline">{props.headline}</h2>
      <h3 className="subtitle">Created by Melvin Lozada</h3>
    </>
  );
};

export default PageHeading;
