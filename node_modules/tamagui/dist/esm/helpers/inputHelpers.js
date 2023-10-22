import { getVariableValue, isWeb } from "@tamagui/core";
import { getButtonSized } from "@tamagui/get-button-sized";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSpace } from "@tamagui/get-token";
const inputSizeVariant = (val = "$true", extras) => {
  if (extras.props.multiline || extras.props.numberOfLines > 1)
    return textAreaSizeVariant(val, extras);
  const buttonStyles = getButtonSized(val, extras), paddingHorizontal = getSpace(val, {
    shift: -1,
    bounds: [2]
  }), fontStyle = getFontSized(val, extras);
  return !isWeb && fontStyle && delete fontStyle.lineHeight, {
    ...fontStyle,
    ...buttonStyles,
    paddingHorizontal
  };
}, textAreaSizeVariant = (val = "$true", extras) => {
  const { props } = extras, buttonStyles = getButtonSized(val, extras), fontStyle = getFontSized(val, extras), lines = props.rows ?? props.numberOfLines, height = typeof lines == "number" ? lines * getVariableValue(fontStyle.lineHeight) : "auto", paddingVertical = getSpace(val, {
    shift: -2,
    bounds: [2]
  }), paddingHorizontal = getSpace(val, {
    shift: -1,
    bounds: [2]
  });
  return {
    ...buttonStyles,
    ...fontStyle,
    paddingVertical,
    paddingHorizontal,
    height
  };
};
export {
  inputSizeVariant,
  textAreaSizeVariant
};
//# sourceMappingURL=inputHelpers.js.map
