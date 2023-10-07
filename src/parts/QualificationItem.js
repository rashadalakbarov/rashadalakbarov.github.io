import React from "react";

const QualificationItem = (props) => {
  return (
    <>
      {props.data.locate === "left" && (
        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">{props.data.title}</h3>
            <span className="qualification__subtitle">
              {props.data.subtitle}
            </span>
            <div className="qualification__calendar">
              <i
                className="uil uil-calendar-alt"
                style={{ marginRight: "7px" }}
              ></i>
              {props.data.start_date} - {props.data.finish_date}
            </div>
          </div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        </div>
      )}

      {props.data.locate === "right" && (
        <div className="qualification__data">
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
          <div>
            <h3 className="qualification__title">{props.data.title}</h3>
            <span className="qualification__subtitle">
              {props.data.subtitle}
            </span>
            <div className="qualification__calendar">
              <i
                className="uil uil-calendar-alt"
                style={{ marginRight: "7px" }}
              ></i>
              {props.data.start_date} - {props.data.finish_date}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QualificationItem;
