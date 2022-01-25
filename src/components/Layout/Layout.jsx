import React from "react";
import { Container } from "reactstrap";
import { Outlet } from "react-router-dom";

import PAGES from "../../data/pages";

import "./layout.scss";

const Layout = () => {
  return (
    <>
      <Container className="page-container">
        <div className="header">
          <div className="nav-left">
            <div className="logo">
              <img src="logo.jpg" alt="logo" width={100} height={200} />
            </div>
            <div className="site-name">Matthew Bulger</div>
          </div>
          <div className="links">
            <ul>
              {PAGES.map((page) => (
                <li className="link" key={page.path}>
                  <a href={page.path}>{page.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </Container>
      <div className="footer">Footer text</div>
    </>
  );
};

export default Layout;
