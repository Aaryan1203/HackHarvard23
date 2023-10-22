const BLUR = "blur", CONTEXT_MENU = "contextmenu", FOCUS_OUT = "focusout", MOUSE_DOWN = "mousedown", MOUSE_MOVE = "mousemove", MOUSE_UP = "mouseup", MOUSE_CANCEL = "dragstart", TOUCH_START = "touchstart", TOUCH_MOVE = "touchmove", TOUCH_END = "touchend", TOUCH_CANCEL = "touchcancel", SCROLL = "scroll", SELECT = "select", SELECTION_CHANGE = "selectionchange";
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
function isScroll(eventType) {
  return eventType === SCROLL;
}
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}
export {
  BLUR,
  CONTEXT_MENU,
  FOCUS_OUT,
  MOUSE_CANCEL,
  MOUSE_DOWN,
  MOUSE_MOVE,
  MOUSE_UP,
  SCROLL,
  SELECT,
  SELECTION_CHANGE,
  TOUCH_CANCEL,
  TOUCH_END,
  TOUCH_MOVE,
  TOUCH_START,
  isCancelish,
  isEndish,
  isMoveish,
  isScroll,
  isSelectionChange,
  isStartish
};
//# sourceMappingURL=types.js.map
