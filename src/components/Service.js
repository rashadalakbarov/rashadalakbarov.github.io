import React, { useState } from "react";
import SectionTitle from "../parts/SectionTitle";
import { serviceData } from "../constants/ServicesData";

const Service = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <SectionTitle title="Services" subtitle="What i offer" />

      <div className="services__container container grid">
        {serviceData.map((serviceItem, index) => {
          return (
            <div className="services__content" key={index}>
              <div>
                <i className={serviceItem.icon}></i>
                <h3 className="services__title">{serviceItem.title}</h3>
              </div>
              <span
                className="services__button"
                onClick={() => toggleTab(serviceItem.id)}
              >
                View More{" "}
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>
              <div
                className={
                  toggleState === serviceItem.id
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">{serviceItem.title}</h3>
                  <p className="services__modal-description">
                    {serviceItem.desc}
                  </p>

                  <ul className="services__modal-services grid">
                    {serviceItem.datas.map((dataService, integ) => {
                      return (
                        <li className="services__modal-service" key={integ}>
                          <i className="uil uil-check-circle services__modal-icon"></i>
                          <p className="services__modal_info">
                            {dataService.text}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
