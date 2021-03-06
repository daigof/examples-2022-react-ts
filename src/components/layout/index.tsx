import React from "react";
import { Outlet, Link } from "react-router-dom";
import { MainWrapper, NavBar } from "./styles";

const Layout = () => (
  <div>
    {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
    <NavBar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/anagram">Anagram</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/todo-list">Todo list</Link>
        </li>
        <li>
          <Link to="/tasks-app">Tasks App</Link>
        </li>
        <li>
          <Link to="/list-items">List items</Link>
        </li>
        <li>
          <Link to="/misc">Miscellaneous</Link>
        </li>
        <li>
          <Link to="/no/match-page">404 page</Link>
        </li>
      </ul>
    </NavBar>

    <hr />

    {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  </div>
);

export default Layout;
