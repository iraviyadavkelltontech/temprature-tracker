import React from 'react';
import { Link, Navigate, useRoutes } from "react-router-dom";
import Main from "./Main";

import { Register } from "./modules/register";
import { TempTrackerComponent } from "./modules/tempTracker/";

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: "/",
    element: <Register />,
    children: [
      { path: "/", element: <Navigate to="/register" /> },
      { path: "/register", element: <Navigate to="/register" /> },
    ],
  };

  const tempRoutes = {
    path: "/",
    element: <TempTrackerComponent />,
    children: [
      { path: "/temp-tracker", element: <Navigate to="/temp-tracker" /> },
    ],
  };

  const routing = useRoutes([mainRoutes, tempRoutes]);

  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/anagram-test">Anagram Test</Link>
          </li>
          <li>
            <Link to="/temp-Tracker">Temp Tracker</Link>
          </li>
        </ul>
        <hr />
        <Main />
      </div>
    </>
  );
};;

export default App;