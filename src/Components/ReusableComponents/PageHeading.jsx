import "./PageHeading.scss";

const PageHeading = (props) => {
  return (
    <div className="page-heading-container">
      <h4 className="section-title">{props.title}</h4>
      <h2 className="headline">{props.headline}</h2>
      <h3 className="subtitle">{props.subtitle}</h3>
    </div>
  );
};

export default PageHeading;
