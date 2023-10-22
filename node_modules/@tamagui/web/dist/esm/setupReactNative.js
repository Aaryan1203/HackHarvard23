const ReactNativeStaticConfigs = /* @__PURE__ */ new WeakMap();
function getReactNativeConfig(Component) {
  if (Component)
    return Component.getSize && Component.prefetch ? RNConfigs.Image : Component.displayName === "Text" && Component.render ? RNConfigs.Text : Component.render && (Component.displayName === "ScrollView" || Component.displayName === "View") ? RNConfigs.default : Component.State?.blurTextInput ? RNConfigs.TextInput : ReactNativeStaticConfigs.get(Component);
}
const RNConfigs = {
  Image: {
    isReactNative: !0,
    inlineProps: /* @__PURE__ */ new Set(["src", "width", "height"])
  },
  Text: {
    isReactNative: !0,
    isText: !0
  },
  TextInput: {
    isReactNative: !0,
    isInput: !0,
    isText: !0
  },
  default: {
    isReactNative: !0
  }
};
function setupReactNative(rnExports) {
}
export {
  getReactNativeConfig,
  setupReactNative
};
//# sourceMappingURL=setupReactNative.js.map
