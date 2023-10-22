const useSheetOffscreenSize = ({
  snapPoints,
  position,
  screenSize,
  frameSize,
  snapPointsMode
}) => {
  if (snapPointsMode === "fit")
    return 0;
  if (snapPointsMode === "constant") {
    const maxSize2 = Number(snapPoints[0]), currentSize2 = Number(snapPoints[position] ?? 0);
    return maxSize2 - currentSize2;
  }
  if (snapPointsMode === "percent") {
    const maxPercentOpened = Number(snapPoints[0]) / 100, percentOpened = Number(snapPoints[position] ?? 0) / 100;
    return (maxPercentOpened - percentOpened) * screenSize;
  }
  const maxSnapPoint = snapPoints[0];
  if (maxSnapPoint === "fit")
    return 0;
  const maxSize = typeof maxSnapPoint == "string" ? Number(maxSnapPoint.slice(0, -1)) / 100 * screenSize : maxSnapPoint, currentSnapPoint = snapPoints[position] ?? 0, currentSize = typeof currentSnapPoint == "string" ? Number(currentSnapPoint.slice(0, -1)) / 100 * screenSize : currentSnapPoint, offscreenSize = maxSize - currentSize;
  return Number.isNaN(offscreenSize) ? 0 : offscreenSize;
};
export {
  useSheetOffscreenSize
};
//# sourceMappingURL=useSheetOffscreenSize.js.map
