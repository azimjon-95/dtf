// import { lazy } from "react";
import NotFoundPage from "../components/PageNotFound";
import Content from "../components/content/Content";

// Lazy-load pages

// Define routes
const routes = [
  { path: "*", element: <NotFoundPage />, protected: false },
  { path: "/", element: <Content />, protected: false },
];

export default routes;
