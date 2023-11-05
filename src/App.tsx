import React from "react";
import { Routes, Route } from "react-router-dom";
import routes, { Route as CustomRoute } from "./routes/Routes";

function App() {
  return (
    <Routes>
      {routes.map((route: CustomRoute, index: number) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
