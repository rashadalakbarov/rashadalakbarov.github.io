import React from "react";

const ContactCart = (props) => {
  return (
    <div className="contact__card">
      <i className={`${props.data.icon} contact__card-icon`}></i>
      <h3 className="contact__card-title">{props.data.title}</h3>
      <span className="contact__card-data">{props.data.data}</span>
      <a href={props.data.link} className="contact__button">
        Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
      </a>
    </div>
  );
};

export default ContactCart;
