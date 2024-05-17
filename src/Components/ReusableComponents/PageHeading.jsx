import "./PageHeading.scss";

const PageHeading = (props) => {
  return (
    <div className="page-heading-container">
      <h4 className="section-title">{props.title || "Gallery"}</h4>
      <h2 className="headline">{props.headline}</h2>
      <h3 className="subtitle">
        {props.subtitle || "Created by Melvin Lozado"}
      </h3>
    </div>
  );
};

export default PageHeading;
