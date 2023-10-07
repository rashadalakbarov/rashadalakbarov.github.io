import React from "react";

const SkillCart = (props) => {
  return (
    <div className="skills__data">
      <i className="bx bx-badge-check"></i>

      <div>
        <h3 className="skills__name">{props.skill_infor.skill}</h3>
        <span className="skills__level">{props.skill_infor.level}</span>
      </div>
    </div>
  );
};

export default SkillCart;
