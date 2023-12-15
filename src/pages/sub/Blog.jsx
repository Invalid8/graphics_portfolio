import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { GridLines } from "../../components/Designs";
import {
  Comment,
  Contact,
  Form1,
  Newsletter,
  NothingBox,
  Writter,
} from "../../components/Layout";
import { BlogCard } from "../../components/UI";
import { categories } from "../../data/blogInfo";
import { blogs } from "../../data/blogs";
import UserInfo from "../../data/UserInfo";
import "./Blog.css";

const Blog = () => {
  const { id } = useParams();
  const fBlog = blogs.find((blog) => blog.id === id);

  return (
    <>
      <Helmet>
        <title>
          {UserInfo.name && UserInfo.name} - Blog /{" "}
          {fBlog ? fBlog.title : "Blog not found"}
        </title>
      </Helmet>
      <div className="blog-container d-flex ai-c flex-column w-100">
        <GridLines fix />
        {fBlog && (
          <>
            <div className="merge">
              <Writter blog={fBlog} />
              <div className="fit bg-special-0 p-5 d-flex flex-column ai-c x20-gap">
                <div className="relateds d-flex flex-column ai-c x30-gap br-4">
                  <div className="to d-flex ai-c">
                    <h3 className="fw-9 ta-c">Related Blogs</h3>
                  </div>
                  <div className="inner d-flex flex-wrap x30-gap w-100 ai-c custom-scroll-bar pb-4">
                    {blogs &&
                      blogs.map((blog, index) => {
                        return (
                          <div
                            className="bg-special w-100 p-4 br-4"
                            key={index}
                          >
                            <BlogCard
                              blog={blog}
                              small
                              hide_img
                              pre
                              key={index}
                            />
                          </div>
                        );
                      })}
                    {blogs && blogs.length === 0 && <NothingBox />}
                  </div>
                </div>
                <div className="tags w-100">
                  <div className="to d-flex ai-c">
                    <h3 className="fw-9 ta-c upp-txt">Tags</h3>
                  </div>
                  <div className="all-categories-container d-flex flex-wrap x10-gap">
                    {fBlog.tags.map((category, index) => {
                      return (
                        <button
                          className="category-modal bg-special br-4 d-flex ai-c jc-c x5-gap text-light p-2 px-3"
                          key={index}
                          style={{ minWidth: "90px" }}
                        >
                          <span className="icon mt-1">
                            <i
                              className={
                                categories.findIndex(
                                  (cate) => cate.name === category
                                ) !== -1
                                  ? categories[
                                      categories.findIndex(
                                        (cate) => cate.name === category
                                      )
                                    ].icon
                                  : "bx bx-desktop"
                              }
                            ></i>
                          </span>
                          <span className="title cap-txt h6 name m-0">
                            {category}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="categories w-100">
                  <div className="to d-flex ai-c">
                    <h3 className="fw-9 ta-c upp-txt">Popular Categories</h3>
                  </div>
                  <div className="inner pt-2">
                    <ul className="m-0">
                      {categories.map((cat, index) => {
                        return (
                          <li
                            className="cap-txt"
                            key={index}
                            style={{ fontSize: "20px" }}
                          >
                            {cat.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="merge set x30-gap ai-c bg-special-0 p-4 br-4 my-5">
              <Comment comments={fBlog.comments} />
              <Form1 />
            </div>
            <div className="bg-special-0 w-100">
              <Newsletter />
            </div>
            <div className="w-100 bg-special-0">
              <Contact />
            </div>
          </>
        )}
        {!fBlog && (
          <div className="w-100 h-100 ta-c d-flex flex-column jc-c ai-c">
            <h1 className="text-lg-left lh-1 font-normal text-uppercase text-decoration-none text-monospace fw-8">
              Blog does not exit
            </h1>
            <Button
              className="back s-btn px-3"
              onClick={() => {
                window.history.back();
              }}
            >
              Back
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
