import UserInfo from "../../../../data/UserInfo";
import { SmNavs } from "../../../Designs";

const About = () => {
  return (
    <div className="about-page d-flex s_height jc-c ai-c bend rv" id="About">
      <div className="sec s1 relative-p h-100 w-100 o-hidden d-flex flex-column jc-c h-grid">
        <div className="contain d-flex flex-column x5-gap jc-c ai-c p-5 paint">
          <h2 className="special-txt-2">Introducing</h2>
          <h1 className="special-txt-1 upp-txt">About Me</h1>
          <p
            style={{ lineHeight: "1.6em", textAlign: "justify" }}
            className="p-4"
          >
            {UserInfo.about && UserInfo.about}
          </p>
          <SmNavs />
        </div>
      </div>
      <div
        className="sec s2 w-100 h-100 d-flex flex-column jc-c"
        style={{ flexBasis: "90%" }}
      >
        <div className="imgBox relative-p">
          <img src={UserInfo.image && UserInfo.image.value} alt="user" />
          <div
            className="name-bar w-100 d-flex flex-column cap-txt ai-c pt-3 absolute-p"
            style={{
              backgroundColor: "#ffffffba",
              bottom: "0",
              fontWeight: "bold",
            }}
          >
            <h3 className="text-special-0">{UserInfo.name && UserInfo.name}</h3>
            <p className="text-special-0">
              {UserInfo.occupation && UserInfo.occupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
