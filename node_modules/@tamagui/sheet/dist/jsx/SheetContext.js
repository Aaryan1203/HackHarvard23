import { createContextScope } from "@tamagui/create-context";
import { SHEET_NAME } from "./constants";
const [createSheetContext, createSheetScope] = createContextScope(SHEET_NAME), [SheetProvider, useSheetContext] = createSheetContext(
  SHEET_NAME,
  {}
);
export {
  SheetProvider,
  createSheetContext,
  createSheetScope,
  useSheetContext
};
//# sourceMappingURL=SheetContext.js.map
