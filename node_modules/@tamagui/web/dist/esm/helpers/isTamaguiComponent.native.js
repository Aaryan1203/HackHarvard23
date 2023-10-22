function isTamaguiComponent(comp, name) {
  const config = comp?.staticConfig;
  return !!(config && (!name || name === config.componentName));
}
export {
  isTamaguiComponent
};
//# sourceMappingURL=isTamaguiComponent.js.map
