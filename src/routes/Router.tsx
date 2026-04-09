import { Component } from "solid-js";
import { Route, Router as SolidRouter } from "@solidjs/router";

import CV from "../pages/CV";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout/Layout";
import { Routes } from "./paths";

const Router: Component = () => {
  return (
    <SolidRouter root={Layout}>
      <Route path={Routes.Root} component={Home} />
      <Route path={Routes.Cv} component={CV} />
      <Route path={Routes.NotFound} component={NotFound} />
    </SolidRouter>
  );
};

export default Router;
