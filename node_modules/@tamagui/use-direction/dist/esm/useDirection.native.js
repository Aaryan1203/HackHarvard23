import * as React from "react";
import { jsx } from "react/jsx-runtime";
const DirectionContext = React.createContext(void 0), DirectionProvider = (props) => {
  const { dir, children } = props;
  return /* @__PURE__ */ jsx(DirectionContext.Provider, { value: dir, children });
};
function useDirection(localDir) {
  const globalDir = React.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
const Provider = DirectionProvider;
export {
  DirectionProvider,
  Provider,
  useDirection
};
//# sourceMappingURL=useDirection.js.map
