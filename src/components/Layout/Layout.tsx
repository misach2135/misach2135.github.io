import { Component, ParentComponent } from "solid-js";

const Header: Component = () => {
  return (
    <header class="w-full flex gap-1 justify-center">
      <h1 class="flex w-fit">My personal webpage</h1>
    </header>
  );
};

const Layout: ParentComponent = (props) => {
  return (
    <div class="w-full flex-col">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
