import { TBM } from "../../../UI";
import NothingBox from "../NothingBox";

const PopularBlogs = ({ blogs }) => {
  return (
    <div
      className="popular-section d-flex flex-column jc-c ai-c x20-gap p-5 mt-3"
      style={{ minHeight: blogs && blogs.length > 0 ? "100vh" : "auto" }}
    >
      <div className="to d-flex ai-c">
        <h2 className="fw-9 ta-c">Popular Posts</h2>
      </div>
      <div
        className="inner d-flex x30-gap w-100 ai-c custom-scroll-bar pb-4"
        style={{ overflowX: "auto" }}
      >
        {blogs &&
          blogs.map((blog, index) => {
            return <TBM col blog={blog} key={index} />;
          })}
        {blogs && blogs.length === 0 && <NothingBox />}
      </div>
    </div>
  );
};

export default PopularBlogs;
