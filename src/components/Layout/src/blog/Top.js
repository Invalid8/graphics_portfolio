import { BlogCard } from "../../../UI";
import NothingBox from "../NothingBox";

const TopBlogs = ({ blogs }) => {
  return (
    <div
      className="top-blogs d-flex flex-column jc-c ai-c x10-gap p-5 bg-special-0"
      style={{ minHeight: blogs && blogs.length > 0 ? "100vh" : "auto" }}
    >
      <div className="to d-flex ai-c">
        <h2 className="fw-9 ta-c">Most Commented</h2>
      </div>
      <div className="inner d-flex flex-wrap x30-gap jc-c w-100 custom-scroll-bar pb-4">
        {blogs &&
          blogs.map((blog, index) => {
            return <BlogCard col blog={blog} key={index} />;
          })}
        {blogs && blogs.length === 0 && <NothingBox />}
      </div>
    </div>
  );
};

export default TopBlogs;
