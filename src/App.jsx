import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/Routes";
import AuthRoute from "./authentication/AuthRoute";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Suspense
      fallback={
        <div className="main_loader">
          <div id="loader"></div>
        </div>
      }
    >
      <div className="app">
        <Navbar />

        <Routes>
          {routes.map(({ path, element, protected: isProtected }, index) => (
            <Route
              key={index}
              path={path}
              element={isProtected ? <AuthRoute>{element}</AuthRoute> : element}
            />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
