import { lazy } from "react";
import NotFoundPage from "../components/PageNotFound";

// Lazy-load pages

// Define routes
const routes = [
  { path: "*", element: <NotFoundPage />, protected: false },
];

export default routes;

