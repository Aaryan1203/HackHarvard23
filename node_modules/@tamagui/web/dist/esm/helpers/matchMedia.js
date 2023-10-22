const matchMedia = typeof window < "u" && window.matchMedia || matchMediaFallback;
function matchMediaFallback(_) {
  return {
    match: (a, b) => !1,
    addListener() {
    },
    removeListener() {
    },
    matches: !1
  };
}
function setupMatchMedia(_) {
}
export {
  matchMedia,
  setupMatchMedia
};
//# sourceMappingURL=matchMedia.js.map
