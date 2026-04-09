import { Component } from "solid-js";
import { Route, Router as SolidRouter } from "@solidjs/router";

import CV from "./pages/CV";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Router: Component = () => {
  return (
    <SolidRouter>
      <Route path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="*404" component={NotFound} />
    </SolidRouter>
  );
};

export default Router;
