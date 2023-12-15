import { skills } from "../../../../data/portfolioInfo";
import UserInfo from "../../../../data/UserInfo";
import { SmNavs } from "../../../Designs";

const Skills = () => {
  return (
    <div className="skills-page d-flex s_height jc-c ai-c bend" id="Skills">
      <div
        className="sec s2 w-100 h-100 d-flex flex-column jc-c paint"
        style={{ flexBasis: "80%" }}
      >
        <div className="contain d-flex flex-column x5-gap jc-c ai-c p-5">
          <h2 className="special-txt-2 cap-txt">personal</h2>
          <h1 className="special-txt-1 upp-txt">skills</h1>
          <p
            style={{ lineHeight: "1.6em", textAlign: "justify" }}
            className="p-4"
          >
            {UserInfo.skills && UserInfo.skills}
          </p>
          <SmNavs />
        </div>
      </div>
      <div className="sec s1 relative-p h-100 w-100 o-hidden d-flex flex-column jc-c">
        <div
          className="contain d-flex flex-wrap ai-c custom-scroll-bar p-3 justify-content-evenly m-full"
          style={{
            gap: "10px",
            // height: "calc(100% - 300px)",
            overflowY: "auto",
          }}
        >
          {skills.map((skill) => {
            return (
              <span className="skill-modal paint br-4 py-2 px-2" key={skill.id}>
                <i className={skill.icon.i} aria-hidden="true"></i>
                <h4 className="cap-txt">{skill.title}</h4>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
