import { experience } from "../../../../data/portfolioInfo";
import UserInfo from "../../../../data/UserInfo";
import { Socials } from "../../../Designs";

const Experience = () => {
  return (
    <div
      className="experience-page d-flex flex-column w-100 s_height jc-c ai-c bend"
      id="Experience"
    >
      <div
        className="sec s2 w-100 h-100 d-flex flex-column jc-c paint"
        style={{ flexBasis: "70%" }}
      >
        <div className="contain d-flex x20-gap justify-content-between w-100 ai-c p-5 bend">
          <div className="d1 w-100">
            <h2 className="special-txt-2 cap-txt">Work</h2>
            <h1 className="special-txt-1 upp-txt">Experience</h1>
            <p style={{ lineHeight: "1.6em", textAlign: "justify" }}>
              {UserInfo.experince && UserInfo.experince}
            </p>
          </div>
          <Socials />
        </div>
      </div>
      <div className="sec s1 relative-p h-100 w-100 o-hidden d-flex flex-column ai-c jc-c">
        <div
          className="contain d-flex ai-c custom-scroll-bar m-4 drop p-4"
          style={{
            gap: "50px",
            width: "calc(100%)",
            overflow: "auto hidden",
          }}
        >
          {experience.map((ex) => {
            return (
              <span
                className="experience-modal em2 paint p-4 br-4 d-flex flex-column"
                key={ex.id}
              >
                <div className="t1 d-flex x5-gap flex-column">
                  <div className="rd"></div>
                  <p className="fw-7 ">{ex.year}</p>
                  <div className="d-flex flex-column x5-gap p-2">
                    <p className="text-decoration-underline">Job:</p>
                    <p>
                      Position:
                      <span className="cap-txt fw-9 ">{ex.position}</span>
                    </p>
                    <p>
                      Company:
                      <span className="cap-txt fw-9 ">{ex.place}</span>
                    </p>
                    <p className="upp-txt ">Location: {ex.location}</p>
                  </div>
                </div>
                <div className="t2 p-3">
                  <p className="text-decoration-underline">Roles:</p>
                  <ul>
                    {ex.roles.map((role) => {
                      return (
                        <li className="cap-txt" key={role.id}>
                          {role.did}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
