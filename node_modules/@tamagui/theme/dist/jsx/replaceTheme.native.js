import { _mutateTheme } from "./_mutateTheme";
function replaceTheme({
  name,
  theme
}) {
  return _mutateTheme({ name, theme, insertCSS: !0, mutationType: "replace" });
}
export {
  replaceTheme
};
//# sourceMappingURL=replaceTheme.js.map
