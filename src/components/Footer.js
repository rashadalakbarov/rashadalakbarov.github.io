import React from "react";
import { dataInformation } from "../constants/AboutData";

const Footer = () => {
  const infoData = dataInformation[0];
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{infoData.name}</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {infoData.social.map((item, index) => {
            return (
              <a
                href={item.link}
                className="footer__social-link"
                target="_blank"
                key={index}
              >
                <i className={item.icon}></i>
              </a>
            );
          })}
        </div>

        <span className="footer__copy">
          &#169; {infoData.name}. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
