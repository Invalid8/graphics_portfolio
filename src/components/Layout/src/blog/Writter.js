import { Button } from "react-bootstrap";

const Writter = ({ blog }) => {
  return (
    <div
      className="inner-wrapper container p-4 bg-special-0 br-4"
      style={{ maxWidth: "1440px" }}
    >
      <div className="topper">
        <div className="p-info d-flex x5-gap align-content-end justify-content-end w-100">
          <div className="img-box icon">
            <img
              src={blog.writer.img}
              style={{ width: "42px", minWidth: "42px", height: "42px" }}
              alt="..."
            />
          </div>
          <div className="dff">
            <h5 className="name fw-6 m-0 cap-txt">{blog.writer.name}</h5>
            <span className="occupation cap-txt">{blog.writer.role}</span>
          </div>
        </div>
        <div className="blog-info d-flex flex-column x10-gap">
          <h5 className="d-flex x5-gap upp-txt ai-c m-0">
            <span className="fw-9">category:</span>
            <span className="special-txt-2">{blog.category}</span>
          </h5>
          <h3 className="title fw-8 m-0">{blog.title}</h3>
          <span className="summary">{blog.description}</span>
        </div>
      </div>
      <br />
      <div className="bottomer d-flex flex-column x20-gap">
        <div className="img-box br-4 ta-c">
          <img src={blog.image.big} alt="..." style={{ maxWidth: "720px" }} />
        </div>
        <div className="article d-flex x10-gap flex-column">
          <Button
            onClick={(e) => {
              e.currentTarget.parentElement.classList.add("special-txt-2");
              e.currentTarget.parentElement.innerHTML = blog.write.text;
            }}
            className="px-5"
            style={{ maxWidth: "300px", margin: "0 auto" }}
          >
            Click to read blog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Writter;
