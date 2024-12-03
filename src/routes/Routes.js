// import { lazy } from "react";
import NotFoundPage from "../components/PageNotFound";
import Layout from "../components/layout/Layout";

// Lazy-load pages

// Define routes
const routes = [
  { path: "*", element: <NotFoundPage />, protected: false },
  { path: "/", element: <Layout />, protected: false },
];

export default routes;
