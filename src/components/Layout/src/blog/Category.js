import { useState } from "react";
import { categories } from "../../../../data/blogInfo";
import { BlogCard } from "../../../UI";
import NothingBox from "../NothingBox";

const Category = ({ blogs }) => {
  const [fBlogs, setFBlogs] = useState(blogs);
  const [selected, setSelected] = useState("all");

  return (
    <div
      className="categories d-flex flex-column jc-c ai-c x30-gap p-5 bg-special-0"
      style={{ minHeight: blogs && blogs.length > 0 ? "100vh" : "auto" }}
    >
      <div className="to d-flex ai-c">
        <h2 className="fw-9 ta-c">Categories</h2>
      </div>
      <div className="all-categories-container d-flex flex-wrap x10-gap">
        <button
          className={`category-modal br-4 d-flex ai-c jc-c x5-gap text-light p-2 px-3 ${
            selected === "all" ? "bg-special-0 text-black" : "bg-special"
          }`}
          style={{ minWidth: "90px" }}
          onClick={() => {
            setFBlogs(blogs);
            setSelected("all");
          }}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              className={`category-modal br-4 d-flex ai-c jc-c x5-gap text-light p-2 px-3 ${
                selected === category.name
                  ? "bg-special-0 text-black"
                  : "bg-special"
              }`}
              key={index}
              style={{ minWidth: "90px" }}
              onClick={() => {
                const nBlogs = blogs.filter(
                  (blog) => blog.category === category.name
                );
                setFBlogs(nBlogs);
                setSelected(category.name);
              }}
            >
              <span className="icon">
                <i className={category.icon}></i>
              </span>
              <span className="title cap-txt">
                <h6 className="name m-0">{category.name}</h6>
              </span>
            </button>
          );
        })}
      </div>
      <div className="inner d-flex flex-wrap x30-gap jc-c w-100 ai-c custom-scroll-bar p-4 mx-4">
        {blogs && selected === "all"
          ? blogs.map((blog, index) => {
              return <BlogCard pre blog={blog} key={index} />;
            })
          : blogs
              .filter(
                (blog) => blog.category.toLowerCase() === selected.toLowerCase()
              )
              .map((blog, index) => {
                return <BlogCard pre blog={blog} key={index} />;
              })}
        {blogs && selected === "all"
          ? fBlogs.length === 0 && <NothingBox />
          : blogs.filter(
              (blog) => blog.category.toLowerCase() === selected.toLowerCase()
            ).length === 0 && <NothingBox />}
      </div>
    </div>
  );
};

export default Category;
