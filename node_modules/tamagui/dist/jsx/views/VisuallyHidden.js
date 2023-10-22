import { Stack, styled } from "@tamagui/core";
const VisuallyHidden = styled(Stack, {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  zIndex: -1e4,
  overflow: "hidden",
  opacity: 1e-8,
  pointerEvents: "none",
  variants: {
    preserveDimensions: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto"
      }
    },
    visible: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto",
        margin: 0,
        zIndex: 1,
        overflow: "visible",
        opacity: 1,
        pointerEvents: "auto"
      }
    }
  }
});
VisuallyHidden.isVisuallyHidden = !0;
export {
  VisuallyHidden
};
//# sourceMappingURL=VisuallyHidden.js.map
