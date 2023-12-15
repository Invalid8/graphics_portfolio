const Socials = ({ mini, col, atNav }) => {
  return (
    <div
      className={`stacks d-flex ${!atNav && "flex-wrap"} ${
        col && "flex-column"
      } x10-gap w-100 jc-c ai-c ${atNav && "navi"}`}
    >
      <span className="stack animated zoomIn">
        <i className="bi bi-discord" aria-hidden="true"></i>
      </span>
      <span className="stack animated zoomIn">
        <i className="bi bi-facebook" aria-hidden="true"></i>
      </span>
      <span className="stack animated zoomIn">
        <i className="bi bi-behance" aria-hidden="true"></i>
      </span>
      <span className="stack animated zoomIn">
        <i className="bi bi-twitter" aria-hidden="true"></i>
      </span>
      <span className="stack animated zoomIn">
        <i className="bi bi-instagram" aria-hidden="true"></i>
      </span>
      {!mini && (
        <>
          <span className="stack animated zoomIn">
            <i className="bi bi-whatsapp" aria-hidden="true"></i>
          </span>
          <span className="stack animated zoomIn">
            <i className="bi bi-google" aria-hidden="true"></i>
          </span>
        </>
      )}
    </div>
  );
};

export default Socials;
