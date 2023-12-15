const Landing = ({ UserInfo }) => {
  return (
    <div
      className="landing-page d-flex relative-p s_height o-hidden jc-c"
      id="Home"
    >
      <div
        className="contain d-flex x30-gap jc-c ai-c p-5 bend"
        style={{
          maxWidth: "960px",
          fontSize: "120%",
        }}
      >
        <div className="info w-100">
          <h4>Hello I'm,</h4>
          <h1 className="upp-txt d-flex x10-gap">
            <span className="special-txt-1 animated slideInLeft fast">
              {UserInfo.name && UserInfo.name.split(" ")[0]}
              {!UserInfo.name && (
                <span className="animated flash infinite">__</span>
              )}
            </span>
            <span className="special-txt-2 animated bounce">
              {UserInfo.name && UserInfo.name.split(" ")[1]}
            </span>
          </h1>
          <h3 className="cap-txt">{UserInfo.occupation}</h3>
          <p>{UserInfo.description && UserInfo.description}</p>
          <div className="d-flex x10-gap flex-wrap">
            <button className="s-btn-1">
              <span>Download CV</span>
              <i className="bx bx-download" aria-hidden="true"></i>
            </button>
            <a href="#Contact" className="mod" rel="norelated">
              <button className="s-btn-2">
                <span>Contact Me</span>
                <i className="bx bx-phone" aria-hidden="true"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="image w-100">
          <img
            src={UserInfo.s_image && UserInfo.s_image.value}
            className="animated zoomIn"
            alt="fronter"
            style={{
              rotate: "5deg",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
