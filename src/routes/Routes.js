// import { lazy } from "react";
import NotFoundPage from "../components/PageNotFound";
import About from "../components/about/About";
import Content from "../components/content/Content";
import NewContent from "../components/new/NewContent";
import Rules from "../components/rules/Rules";

import Settings from "../pages/settings/Settings";
import NotificationSettings from "../pages/notificationSettings/NotificationSettings";
import Blog from "../pages/blog/Blog";
import Feeds from "../pages/feeds/Feeds";
import General from "../pages/general/General";

// Lazy-load pages

// Define routes
const routes = [
  { path: "*", element: <NotFoundPage />, protected: false },
  { path: "/", element: <Content />, protected: false },
  { path: "/new", element: <NewContent />, protected: false },
  { path: "/about", element: <About />, protected: false },
  { path: "/rules", element: <Rules />, protected: false },

  // Setting pages
  { path: "/settings", element: <Settings />, protected: false },
  { path: "/settings/notifications", element: <NotificationSettings />, protected: false },
  { path: "/settings/blog", element: <Blog />, protected: false },
  { path: "/settings/feeds", element: <Feeds />, protected: false },
  { path: "/settings/general", element: <General />, protected: false },
];

export default routes;
