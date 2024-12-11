// import { lazy } from "react";
import NotFoundPage from "../components/PageNotFound";
import About from "../components/about/About";
import Content from "../components/content/Content";
import NewContent from "../components/new/NewContent";
import Rules from "../components/rules/Rules";
import Terms from "../components/terms/Terms";
import Popular from "../components/popular/Popular";

import Settings from "../pages/settings/Settings";
import NotificationSettings from "../pages/notificationSettings/NotificationSettings";
import Blog from "../pages/blog/Blog";
import Feeds from "../pages/feeds/Feeds";
import General from "../pages/general/General";
import MyReels from "../components/myReels/MyReels";
import Message from "../components/message/Message";
import DraftList from "../pages/draftList/DraftList";

// Lazy-load pages

// Define routes
const routes = [
  { path: "*", element: <NotFoundPage />, protected: false },
  { path: "/", element: <Content />, protected: false },
  { path: "/new", element: <NewContent />, protected: false },
  { path: "/about", element: <About />, protected: false },
  { path: "/rules", element: <Rules />, protected: false },
  { path: "/terms", element: <Terms />, protected: false },
  { path: "/popular", element: <Popular />, protected: false },
  { path: "/my", element: <MyReels />, protected: false },
  { path: "/message", element: <Message />, protected: false },

  // Setting pages
  { path: "/settings", element: <Settings />, protected: false },
  {
    path: "/settings/notifications",
    element: <NotificationSettings />,
    protected: false,
  },
  { path: "/settings/blog", element: <Blog />, protected: false },
  { path: "/settings/feeds", element: <Feeds />, protected: false },
  { path: "/settings/general", element: <General />, protected: false },
  { path: "/drafts", element: <DraftList />, protected: false },
];

export default routes;
