import logoImg from "../images/logo.svg";
import "./Navbar.css";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
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
    <nav className="navbar">
      <div className="navbar-container">
        {/* <!-- nav header --> */}
        <div className="nav-header">
          <img src={logoImg} alt="" />
          <i className="bx bx-menu" id="nav-toggle"></i>
        </div>

        {/* <!-- links --> */}
        <ul className="nav-links" id="nav-links">
          {renderPageLinks}
        </ul>

        {/* <!-- icons --> */}
        <ul className="nav-icons">{renderSocialLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
