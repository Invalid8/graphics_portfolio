import PageRoutes from "./Routes";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Navbar } from "./components/Layout";
import { useLocation } from "react-router-dom";

const Main = () => {
  const [gotTop, setGoTop] = useState(window.scrollY > 80);

  useEffect(() => {
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const scrollEffect = () => {
    window.scrollY > 80 ? setGoTop(true) : setGoTop(false);
  };

  const locate = useLocation();
  const pages = locate.pathname.split("/");
  const page = pages[1].toLowerCase();

  return (
    <>
      {!["admin"].includes(page) && <Navbar isFixed={gotTop} />}
      <main className="animated fadeIn">
        <PageRoutes />
        <div
          className="ops fixed-p b-1 r-1"
          style={{ bottom: "20px", right: "20px" }}
        >
          {gotTop && (
            <Button
              className="p-4 stack animated bounce infinite"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                });
              }}
            >
              <i className="bx bx-arrow-to-top is-3"></i>
            </Button>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
