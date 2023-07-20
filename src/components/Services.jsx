import { services } from "../data";
import Title from "./Title";
import "./Services.css";

const Services = () => {
  const renderServices = services.map((service) => {
    return (
      <article key={service.id} className="service">
        <span>
          <i className={service.icon}></i>
        </span>
        <div className="service-info">
          <h4>{service.title}</h4>
          <p>{service.text}</p>
        </div>
      </article>
    );
  });

  return (
    <section className="section" id="services">
      {/* <!-- title --> */}
      <Title title="خدمات" subTitle="ما" />
      {/* <!-- /title --> */}

      <div className="container">
        {/* <!-- single service --> */}
        {renderServices}
        {/* <!-- /single service --> */}
      </div>
    </section>
  );
};

export default Services;
