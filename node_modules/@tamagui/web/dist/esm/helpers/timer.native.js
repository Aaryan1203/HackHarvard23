const timer = require("@tamagui/timer").timer();
setTimeout(() => {
  timer.print();
}, 2e3);
const time = timer.start({
  quiet: !0
});
export {
  time
};
//# sourceMappingURL=timer.js.map
