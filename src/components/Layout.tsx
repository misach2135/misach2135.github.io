import { ParentComponent } from "solid-js";

const Layout: ParentComponent = (props) => {
  return <div class="w-full flex-col">{props.children}</div>;
};

export default Layout;
