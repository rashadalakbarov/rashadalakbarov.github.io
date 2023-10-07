import React, { useState } from "react";
import SectionTitle from "../parts/SectionTitle";
import { educationData, workData } from "../constants/QualificationData";
import QualificationItem from "../parts/QualificationItem";

const Qualification = () => {
  const [toggleStateQuali, setToggleStateQuali] = useState(1);

  const toggleTabQuali = (index) => {
    setToggleStateQuali(index);
  };
  return (
    <section className="qualification section">
      <SectionTitle title="Qualification" subtitle="My personel journey" />

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleStateQuali === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTabQuali(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleStateQuali === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTabQuali(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleStateQuali === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {educationData.map((data, index) => {
              return <QualificationItem data={data} key={index} />;
            })}
          </div>

          <div
            className={
              toggleStateQuali === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {workData.map((data, index) => {
              return <QualificationItem data={data} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
