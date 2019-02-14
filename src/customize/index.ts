// @ts-ignore
import Nav from "./Nav";
// @ts-ignore
import Logo from "./Public/Logo";

let components = {
  Nav,
  Logo,
};

let publicComponents = {
  ...components
};

const install = function(Vue: any, options = {}) {
  Object.keys(publicComponents).forEach(key => {
    // @ts-ignore
    Vue.component(key, publicComponents[key]);
  });
};

const PublicComponents = {
  install,
  ...components
};

export default PublicComponents;
