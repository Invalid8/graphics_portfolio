import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import UserInfo from "../../../data/UserInfo";
import { Socials } from "../../Designs";
import { Button } from "react-bootstrap";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { useUserAuth } from "../../../context/UserAuthContext";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = ({ isFixed }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const { user } = useUserAuth();

  const locate = useLocation();
  const pages = locate.pathname.split("/");
  const page = pages[1].toLowerCase();

  useEffect(() => {
    if (!menuIsOpen) enableBodyScroll(document.body);
    else disableBodyScroll(document.body);
  }, [menuIsOpen]);

  return (
    <div
      className={`navbars animated ${
        isFixed && "fixed-p bg-special-0"
      } d-flex justify-content-between ai-c px-4 py-3 ${
        menuIsOpen && "fall bg-special-0"
      } bend-nav w-100`}
    >
      {/* {menuIsOpen && <GridLines />} */}

      <div className="imp d-flex justify-content-between w-100 ai-c">
        <div className="logo">
          <a href="/" className="mod">
            <img
              src={UserInfo.logo ? UserInfo.logo.img : "/favicon.ico"}
              style={{ width: "45px" }}
              alt="User Logo"
            />
          </a>
        </div>
        <div className="btn-box d-flex ai-c x10-gap">
          {/* {menuIsOpen && <h3 className="text-special fw-7 m-0">Menu</h3>} */}
          <button
            className={`menu-btn s-btn-1 px-1 py-1 ${
              menuIsOpen && "bg-danger"
            }`}
            style={{ fontSize: "32px", outline: "1px solid grey" }}
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}
          >
            {menuIsOpen ? (
              <i className="bx bx-plus" style={{ rotate: "45deg" }}></i>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </button>
        </div>
      </div>

      <div
        className={`nav-links-container nav-l-c bend-nav d-flex x20-gap ai-c flex-row-reverse ${
          !menuIsOpen && "hide"
        }`}
      >
        {!["admin"].includes(page) && <NormNav setMenuIsOpen={setMenuIsOpen} />}
        {["admin"].includes(page) && <AuthNav setMenuIsOpen={setMenuIsOpen} />}
      </div>
    </div>
  );
};

export default Navbar;

const NormNav = ({ setMenuIsOpen }) => {
  return (
    <>
      <Socials mini atNav />
      <ul className="d-flex x20-gap m-0">
        {[
          "about",
          "skills",
          "experience",
          "education",
          "project",
          "blogs",
          "contact",
        ].map((paige, index) => {
          return (
            <li className="nav-link" key={index}>
              <NavLink
                className="sc dropdown-item"
                to={`/${paige}`}
                onClick={() => {
                  setMenuIsOpen(false);
                }}
              >
                {paige}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const AuthNav = ({ setMenuIsOpen }) => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <ul className="d-flex x20-gap m-0">
        <li className="nav-link">
          <NavLink
            className="sc dropdown-item"
            to="/shop"
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            className="sc dropdown-item"
            to="/blogs"
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <div className="d-flex">
        <Button
          variant="primary"
          style={{ width: "90px" }}
          className="d-flex ai-c jc-c"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
    </>
  );
};
