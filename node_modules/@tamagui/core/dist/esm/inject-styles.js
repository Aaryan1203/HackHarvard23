const stylesheets = {}, injectStyles = ({ filePath, css }) => {
  let stylesheet = stylesheets[filePath];
  if (!stylesheet) {
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-file", filePath), styleEl.setAttribute("type", "text/css"), stylesheet = stylesheets[filePath] = styleEl, document.head.appendChild(styleEl);
  }
  stylesheet.innerHTML = css;
};
export {
  injectStyles
};
//# sourceMappingURL=inject-styles.js.map
