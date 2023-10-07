import React from "react";

const SectionTitle = (props) => {
  return (
    <>
      <h2 className="section__title">{props.title}</h2>
      <span className="section__subtitle">{props.subtitle}</span>
    </>
  );
};

export default SectionTitle;
