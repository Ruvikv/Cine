import React, { useEffect } from "react";
import logoPequeno from "../../images/Milenium-isotipo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import './headerStyle.css';
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("down", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fondo navbar navbar-expand-lg fixed-top p-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a href="/">
          <img
            style={{ height: "38px", width: "auto" }}
            src={logoPequeno}
            alt="logo"
          />
        </a>

        {/* Íconos de redes sociales siempre visibles */}
        <nav className="d-flex justify-content-end">
          <ul className="navbar-nav gap-3 d-flex flex-row">
            <li className="nav-item">
              <Link to='https://www.instagram.com/cinesantarosa/'><i className="bi bi-instagram fs-3"></i></Link>
            </li>
            <li className="nav-item">
              <Link to='https://www.facebook.com/CinesSantaRosa/'><i className="bi bi-facebook fs-3"></i></Link>
            </li>
            <li className="nav-item">
              <Link to='https://x.com/cinesantarosa?lang=es'><i className="bi bi-twitter fs-3"></i></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

export default Header;
