import { styled } from "@tamagui/core";
import { getButtonSized } from "@tamagui/get-button-sized";
import { XStack } from "./Stacks";
import {
  bordered,
  circular,
  elevate,
  focusTheme,
  hoverTheme,
  pressTheme
} from "./variants";
const SizableStack = styled(XStack, {
  name: "SizableStack",
  variants: {
    unstyled: {
      true: {
        hoverTheme: !1,
        pressTheme: !1,
        focusTheme: !1,
        elevate: !1,
        bordered: !1
      }
    },
    hoverTheme,
    pressTheme,
    focusTheme,
    circular,
    elevate,
    bordered,
    size: {
      "...size": (val, extras) => getButtonSized(val, extras)
    }
  }
});
export {
  SizableStack
};
//# sourceMappingURL=SizableStack.js.map
