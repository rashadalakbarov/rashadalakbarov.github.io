import React from "react";
import SectionTitle from "../parts/SectionTitle";

import { dataSkill } from "../constants/SkillData";
import SkillCart from "../parts/SkillCart";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <SectionTitle title="Skills" subtitle="My technical level" />

      <div className="skills__container container grid">
        {dataSkill.map((item, index) => {
          return (
            <div className="skills__content" key={index}>
              <h3 className="skills__title">{item.title}</h3>
              <div className="skills__box">
                {item.info.map((data, int) => {
                  return (
                    <div key={int}>
                      {data.locate === "left" && (
                        <div className="skills__group">
                          {data.infor.map((itemSkill, itemIndex) => {
                            return (
                              <SkillCart
                                key={itemIndex}
                                skill_infor={itemSkill}
                              />
                            );
                          })}
                        </div>
                      )}

                      {data.locate === "right" && (
                        <div className="skills__group">
                          {data.infor.map((itemSkill, itemIndex) => {
                            return (
                              <SkillCart
                                key={itemIndex}
                                skill_infor={itemSkill}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
