import aboutImg from "../images/about.jpeg";
import Title from "./Title";
import "./About.css";

const About = () => {
  return (
    <section className="section" id="about">
      {/* <!-- title --> */}
      <Title title="درباره" subTitle="ما" />
      {/* <!-- /title --> */}

      <div className="container">
        {/* <!-- about img --> */}
        <article className="about-img">
          <img src={aboutImg} alt="awesome beach" className="img" />
        </article>

        {/* <!-- about info --> */}
        <article className="about-info">
          <h3>عنوان اصلی درباره ما</h3>
          <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <a href="#" className="btn">
            مطالعه بیشتر
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
