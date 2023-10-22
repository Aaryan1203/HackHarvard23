import { useComposedRefs } from "@tamagui/compose-refs";
import { usePrevious } from "@tamagui/use-previous";
import * as React from "react";
const BubbleSelect = React.forwardRef((props, forwardedRef) => {
  const { value, ...selectProps } = props, ref = React.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), prevValue = usePrevious(value);
  return React.useEffect(() => {
    const select = ref.current, selectProto = window.HTMLSelectElement.prototype, setValue = Object.getOwnPropertyDescriptor(
      selectProto,
      "value"
    ).set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", { bubbles: !0 });
      setValue.call(select, value), select.dispatchEvent(event);
    }
  }, [prevValue, value]), null;
});
//# sourceMappingURL=BubbleSelect.js.map
