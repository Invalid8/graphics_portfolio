import UserInfo from "../../../../data/UserInfo";
import { SmNavs, Socials } from "../../../Designs";

const Contact = () => {
  return (
    <div
      className="contact-page d-flex s_height jc-c ai-c bend rv"
      id="Contact"
    >
      <div
        className="sec s2 w-100 h-100 d-flex flex-column jc-c"
        style={{ flexBasis: "80%" }}
      >
        <div className="contained d-flex flex-column x5-gap jc-c ai-c p-4">
          <h1 className="d-flex flex-wrap x5-gap upp-txt">
            <span className="special-txt-2">thank you for</span>
            <span className="special-txt-1">your attention</span>
          </h1>
          <SmNavs />
        </div>
      </div>
      <div className="sec s1 relative-p h-100 w-100 o-hidden d-flex flex-column jc-c h-grid paint">
        <div className="contained d-flex flex-column flex-wrap custom-scroll-bar p-4">
          <h1 className="special-txt-2">Contact Me</h1>
          <div className="info">
            <p>For futher information, please contact me via:</p>

            <div className="handles stacks d-flex flex-column x10-gap">
              <div className="d-flex ai-c x10-gap">
                <span className="p-1 px-2 fw-5 text-white bg-black br-4 animated zoomIn">
                  <i className="bx bx-message" aria-hidden="true"></i>
                </span>
                <span>{UserInfo.email && UserInfo.email}</span>
              </div>
              <div className="d-flex ai-c x10-gap">
                <span className="p-1 px-2 fw-5 text-white bg-black br-4 animated zoomIn">
                  <i className="bx bx-phone" aria-hidden="true"></i>
                </span>
                <span>
                  +{UserInfo.phone_no && UserInfo.phone_no.country_code}{" "}
                  {UserInfo.phone_no && UserInfo.phone_no.number} (WhatsApp)
                </span>
              </div>
              <div className="d-flex ai-c x10-gap">
                <span className="p-1 px-2 fw-5 text-white bg-black br-4 animated zoomIn">
                  <i className="bx bx-plus" aria-hidden="true"></i>
                </span>
                <span>{UserInfo.phone_no && UserInfo.phone_no.country}</span>
              </div>
            </div>
            <div className="socials p-4">
              <h4>My Socials</h4>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
