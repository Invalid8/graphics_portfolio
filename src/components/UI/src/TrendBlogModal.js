const TBM = ({ blog, col }) => {
  return (
    <a href={`/blog/${blog.id}`} className="mod">
      <div
        className={`bloggy big blog-trend-modal d-flex ai-c p-2 x20-gap ${
          col && "column"
        }`}
      >
        <div className="img-box br-4 animated slideInDown">
          <img src={blog.image.big} alt="..." />
        </div>
        <div className="info box d-flex flex-column x10-gap animated slideInDown">
          <div className="header d-flex">
            {col && (
              <h6>
                <span className="category upp-txt fw-8">{blog.category}</span>
                <span className="time"> - {blog.date}</span>
              </h6>
            )}
            {!col && (
              <h5>
                <span className="category upp-txt fw-8">{blog.category}</span>
                <span className="time"> - {blog.date}</span>
              </h5>
            )}
          </div>
          {col && <h3 className="title fw-7">{blog.title}</h3>}
          {!col && <h2 className="title fw-7">{blog.title}</h2>}

          <p className="description ta-j">
            {col ? blog.summuary : blog.description}
          </p>
          <div className="poster d-flex ai-c x10-gap">
            <div className="poster-img img-box icon">
              <img src={blog.writer.img} alt="..." />
            </div>
            <div className="poster-info">
              {col && <h6 className="name cap-txt">{blog.writer.name}</h6>}
              {!col && <h5 className="name cap-txt">{blog.writer.name}</h5>}

              <p className="occupation">{blog.writer.role}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TBM;
