import "./Footer.css";
import { socialLinks, pageLinks } from "../data";

const Footer = () => {
  const renderPageLinks = pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href}>{link.text}</a>
      </li>
    );
  });

  const renderSocialLinks = socialLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href}>
          <i className={link.icon}></i>
        </a>
      </li>
    );
  });

  return (
    <footer className="section" id="footer">
      {/* <!-- footer link --> */}
      <ul className="footer-link">{renderPageLinks}</ul>

      {/* <!-- footer icons --> */}
      <ul className="footer-icons">{renderSocialLinks}</ul>

      <p>
        <span>کپی رایت</span>
        <span>&copy;</span>
        <span>تمامی حقوق محفوظ میباشد</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
