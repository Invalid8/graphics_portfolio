import { GridLines } from "../components/Designs";
import {
  PopularBlogs,
  TopBlogs,
  Trending,
  Category,
  Newsletter,
  Contact,
} from "../components/Layout";
import { blogs } from "../data/blogs";

const Blogs = () => {
  return (
    <div className="blogs-section">
      <GridLines fix />
      <Trending blogs={blogs} />
      <TopBlogs blogs={blogs} />
      <PopularBlogs blogs={blogs} />
      <Category blogs={blogs} />
      <Newsletter />
      <div className="w-100 bg-special-0">
        <Contact />
      </div>
    </div>
  );
};

export default Blogs;
