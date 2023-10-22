import React from "react";
import { jsx } from "react/jsx-runtime";
function wrapChildrenInText(TextComponent, propsIn, extraProps) {
  const {
    children,
    textProps,
    size,
    noTextWrap,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    fontStyle,
    maxFontSizeMultiplier
  } = propsIn;
  if (noTextWrap || !children)
    return [children];
  const props = {
    ...extraProps
  };
  return color && (props.color = color), fontFamily && (props.fontFamily = fontFamily), fontSize && (props.fontSize = fontSize), fontWeight && (props.fontWeight = fontWeight), letterSpacing && (props.letterSpacing = letterSpacing), textAlign && (props.textAlign = textAlign), size && (props.size = size), fontStyle && (props.fontStyle = fontStyle), maxFontSizeMultiplier && (props.maxFontSizeMultiplier = maxFontSizeMultiplier), React.Children.toArray(children).map((child, index) => typeof child == "string" ? (
    // so "data-disable-theme" is a hack to fix themeInverse, don't ask me why
    /* @__PURE__ */ jsx(TextComponent, { ...props, ...textProps, children: child }, index)
  ) : child);
}
export {
  wrapChildrenInText
};
//# sourceMappingURL=wrapChildrenInText.js.map
