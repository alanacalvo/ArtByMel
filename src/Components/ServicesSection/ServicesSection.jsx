import ServicesCards from "../ReusableComponents/ServicesCards";
import PageHeading from "../ReusableComponents/PageHeading";
import "./ServicesSection.scss";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <PageHeading
          title={"Services Offered"}
          headline={"Your Makeup Needs, Met"}
          subtitle={
            "Specializing in a variety of makeup and art services, so you can enjoy your special event."
          }
        />
        <ServicesCards />
      </div>
    </section>
  );
}

export default ServicesSection;
