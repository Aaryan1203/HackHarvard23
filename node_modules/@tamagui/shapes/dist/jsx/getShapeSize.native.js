const getShapeSize = (size, { tokens }) => {
  const width = tokens.size[size] ?? size, height = tokens.size[size] ?? size;
  return {
    width,
    height,
    minWidth: width,
    maxWidth: width,
    maxHeight: height,
    minHeight: height
  };
};
export {
  getShapeSize
};
//# sourceMappingURL=getShapeSize.js.map
