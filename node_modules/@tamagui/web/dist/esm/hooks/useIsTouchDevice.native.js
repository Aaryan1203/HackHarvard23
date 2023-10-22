import { isTouchable, isWeb } from "@tamagui/constants";
import { useDidFinishSSR } from "@tamagui/use-did-finish-ssr";
const useIsTouchDevice = () => isWeb ? useDidFinishSSR() ? isTouchable : !1 : !0;
export {
  useIsTouchDevice
};
//# sourceMappingURL=useIsTouchDevice.js.map
