// import { lazy } from "react";
import NotFoundPage from "../components/PageNotFound";
import About from "../components/about/About";
import Content from "../components/content/Content";
import NewContent from "../components/new/NewContent";
import Rules from "../components/rules/Rules";

// Lazy-load pages

// Define routes
const routes = [
  { path: "*", element: <NotFoundPage />, protected: false },
  { path: "/", element: <Content />, protected: false },
  { path: "/new", element: <NewContent />, protected: false },
  { path: "/about", element: <About />, protected: false },
  { path: "/rules", element: <Rules />, protected: false },
];

export default routes;
