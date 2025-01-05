import { CgWebsite } from "react-icons/cg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/favicon.png";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-lime-950 text-textPrimaryColor p-10">
      <aside>
        <img src={logo} alt="" />
        <p className="font-bold text-3xl">
          Golam Sarwar
          <br />
          <span className="text-xl">
            Building Scalable & Maintainable Web Applications
          </span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://github.com/golamsarwar96">
            <FaGithub className="text-3xl"></FaGithub>
          </Link>
          <Link to="https://www.linkedin.com/in/md-golam-sarwar-20a1522ba/">
            <FaLinkedin className="text-3xl"></FaLinkedin>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100070767671286">
            <FaFacebook className="text-3xl"></FaFacebook>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
