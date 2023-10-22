import { useGet } from "./useGet";
function useEvent(callback) {
  return useGet(callback, defaultValue, !0);
}
const defaultValue = () => {
  throw new Error("Cannot call an event handler while rendering.");
};
export {
  useEvent
};
//# sourceMappingURL=useEvent.js.map
