import { tours } from "../data";
import Title from "./Title";
import "./Tours.css";

const Tours = () => {
  const renderTours = tours.map((tour) => {
    const { id, image, date, title, info, location, duration, cost } = tour;
    return (
      <article key={id} className="tour-card">
        <div className="img-container">
          <img src={image} alt="" className="img" />
          <p>{date}</p>
        </div>

        {/* <!-- tour info --> */}
        <div className="tour-info">
          <h4>{title}</h4>
          <p>{info}</p>
        </div>

        {/* <!-- tour footer --> */}
        <small className="tour-footer">
          <span>
            <i className="bx bxs-map-alt"></i>
            {location}
          </span>
          <span>
            <i className="bx bxs-map-alt"></i>
            {duration} روزه
          </span>
          <span>
            <i className="bx bxs-map-alt"></i>از {cost}
          </span>
        </small>
      </article>
    );
  });

  return (
    <section className="section" id="featured">
      {/* <!-- title --> */}
      <Title title="تور" subTitle="مسافرتی" />
      {/* <!-- /title --> */}

      <div className="container">
        {/* <!-- single tour --> */}
        {renderTours}
        {/* <!-- /single tour --> */}
      </div>
    </section>
  );
};

export default Tours;
