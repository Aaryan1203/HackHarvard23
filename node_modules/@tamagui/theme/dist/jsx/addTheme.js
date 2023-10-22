import { _mutateTheme } from "./_mutateTheme";
function addTheme(props) {
  return _mutateTheme({ ...props, insertCSS: !0, mutationType: "add" });
}
export {
  addTheme
};
//# sourceMappingURL=addTheme.js.map
