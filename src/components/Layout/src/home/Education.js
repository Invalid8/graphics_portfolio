import { education } from "../../../../data/portfolioInfo";
import UserInfo from "../../../../data/UserInfo";
import { SmNavs } from "../../../Designs";

const Education = () => {
  return (
    <div
      className="education-page d-flex s_height jc-c ai-c bend"
      id="Education"
    >
      <div className="sec s1 relative-p h-100 w-100 o-hidden d-flex flex-column jc-c h-grid paint">
        <div className="contain d-flex flex-column x5-gap jc-c ai-c p-5">
          <h1 className="special-txt-1 upp-txt">Education</h1>
          <p
            style={{ lineHeight: "1.6em", textAlign: "justify" }}
            className="p-4"
          >
            {UserInfo.education && UserInfo.education}
          </p>
          <SmNavs />
        </div>
      </div>
      <div
        className="sec s2 w-100 h-100 jc-c o-hidden p-4"
        style={{
          flexBasis: "120%",
        }}
      >
        <div
          className="container d-flex flex-wrap ai-c jc-c custom-scroll-bar"
          style={{
            gap: "30px",
            overflow: "hidden auto",
            height: "calc(100%)",
            margin: "0 auto",
          }}
        >
          {education.map((ed) => {
            return (
              <span
                className="education-modal n-modal d-flex flex-column em-2 x10-gap paint p-4 br-4"
                key={ed.id}
              >
                <div className="topd">
                  <p>
                    <b>{ed.year}</b>
                  </p>
                  <p className="special-txt-2">{ed.certificate}</p>
                </div>
                <div className="bottomd">
                  <p>{ed.school},</p>
                  <p>{ed.location}</p>
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
