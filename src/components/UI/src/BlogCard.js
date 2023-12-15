const BlogCard = ({ blog, col, pre, row, hide_img, small }) => {
  return (
    <a href={`/blog/${blog.id}`} className="mod">
      <div
        className={`bloggy small d-flex ai-c x10-gap ${col && "column"} ${
          row && "row"
        } ${pre && "pre"} animated zoomIn`}
      >
        {!hide_img && (
          <div className="img-box br-4">
            <img src={blog.image.small} alt="..." />
          </div>
        )}

        <div className="info d-flex flex-column x10-gap">
          <div className="header d-flex">
            <h6>
              <span className="category upp-txt fw-8">{blog.category}</span>
              <span className="time"> - {blog.date}</span>
            </h6>
          </div>
          {small && <h6 className="title fw-7">{blog.title}</h6>}
          {!small && <h4 className="title fw-7">{blog.title}</h4>}
          {!pre && <p className="description">{blog.description}</p>}

          <div className="poster d-flex ai-c x10-gap">
            <div className="img-box icon poster-img">
              <img src={blog.writer.img} alt="..." />
            </div>
            <div className="poster-info">
              <h6 className="name fw-6 cap-txt">{blog.writer.name}</h6>
              <p className="occupation cap-txt">{blog.writer.role}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
