import { TBM } from "../../../UI";
import NothingBox from "../NothingBox";

const Trending = ({ blogs }) => {
  return (
    <div
      className="trending-section d-flex flex-column jc-c ai-c x0-gap"
      style={{ minHeight: "auto", maxWidth: "980px", margin: "0 auto" }}
    >
      <div className="to d-flex ai-c">
        <h1 className="fw-9 ta-c">Trending</h1>
      </div>
      <div
        className="inner d-flex x30-gap w-100 ai-c custom-scroll-bar p-4"
        style={{ overflowX: "auto" }}
      >
        {blogs &&
          blogs.map((blog, index) => {
            return <TBM blog={blog} key={index} />;
          })}
        {blogs && blogs.length === 0 && <NothingBox />}
      </div>
    </div>
  );
};

export default Trending;
