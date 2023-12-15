import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { GridLines } from "./components/Designs";
import {
  About,
  Skills,
  Experience,
  Education,
  Project,
  Contact,
  ProtectedRoute,
} from "./components/Layout";

import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";

import Blog from "./pages/sub/Blog";

import { Login } from "./components/Layout";
import { projects } from "./data/portfolioInfo";
import UserInfo from "./data/UserInfo";
import { Helmet } from "react-helmet";

const PageRoutes = () => {
  return (
    <Suspense fallback={<h3>loading...</h3>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <>
              <Helmet>
                <title>About - {UserInfo.name && UserInfo.name}</title>
              </Helmet>
              <About />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Helmet>
                <title>{UserInfo.name && UserInfo.name} - Skills</title>
              </Helmet>
              <Skills />
            </>
          }
        />
        <Route
          path="/experience"
          element={
            <>
              <Helmet>
                <title>
                  {UserInfo.name && UserInfo.name} - Work Experience
                </title>
              </Helmet>
              <Experience />
            </>
          }
        />
        <Route
          path="/education"
          element={
            <>
              <Helmet>
                <title>{UserInfo.name && UserInfo.name} - Education</title>
              </Helmet>
              <Education />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Helmet>
                <title>{UserInfo.name && UserInfo.name} - Projects</title>
              </Helmet>
              <Project projects={projects} />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Helmet>
                <title>Contact - {UserInfo.name && UserInfo.name}</title>
              </Helmet>
              <Contact />
            </>
          }
        />

        <Route
          path="/blogs"
          element={
            <>
              <Helmet>
                <title>Blogs - {UserInfo.name && UserInfo.name}</title>
              </Helmet>
              <Blogs />
            </>
          }
        />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={
            <div className="NotFount fixed w-100 h-100 d-flex jc-c ai-c flex-column">
              <GridLines />
              <div className="container fw-8 d-flex jc-c ai-c flex-column">
                <h3>Error 404</h3>
                <h1>Page Not Found</h1>
                <button
                  className="back s-btn-1 px-4 py-2"
                  onClick={() => {
                    window.history.back();
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;
