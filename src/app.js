import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/common/Header";
import HomeBody from "./components/Home/Body";
import AgentsBody from "./components/agents/Body";
import WeaponBody from "./components/weapons/Body"
import MapsBody from "./components/maps/Body.JS";
import MyStatsBody from "./components/mystats/Body";
import Footer from "./components/common/Footer";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/common/ErrorPage";
import AgentInfo from "./components/agents/AgentInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*********Full App Layout*********/

const AppLayout = () => {
  return (
    <div id="page-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/", 
        element: <HomeBody /> },
      { 
        path: "/agents",
         element: <AgentsBody /> },
      { 
        path: "/weapons",
         element: <WeaponBody /> },
      { 
        path: "/maps", 
        element: <MapsBody /> },
      {
         path: "/mystats",
          element: <MyStatsBody /> },
      {
        path: "/agents/:name",
        element: <AgentInfo />
      },
    ],
  },
]);

/****** ***Render App*********/
root.render(<RouterProvider router={approuter} />);
