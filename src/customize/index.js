var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// @ts-ignore
import Nav from "./Nav";
// @ts-ignore
import Logo from "./Public/Logo";
var components = {
    Nav: Nav,
    Logo: Logo,
};
var publicComponents = __assign({}, components);
var install = function (Vue, options) {
    if (options === void 0) { options = {}; }
    Object.keys(publicComponents).forEach(function (key) {
        // @ts-ignore
        Vue.component(key, publicComponents[key]);
    });
};
var PublicComponents = __assign({ install: install }, components);
export default PublicComponents;
