import { _mutateTheme } from "./_mutateTheme";
function updateTheme({
  name,
  theme
}) {
  return _mutateTheme({ name, theme, insertCSS: !0, mutationType: "update" });
}
export {
  updateTheme
};
//# sourceMappingURL=updateTheme.js.map
