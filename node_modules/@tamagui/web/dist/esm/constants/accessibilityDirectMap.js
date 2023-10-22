const accessibilityDirectMap = {};
{
  const items = {
    Hidden: !0,
    ActiveDescendant: !0,
    Atomic: !0,
    AutoComplete: !0,
    Busy: !0,
    Checked: !0,
    ColumnCount: "colcount",
    ColumnIndex: "colindex",
    ColumnSpan: "colspan",
    Current: !0,
    Details: !0,
    ErrorMessage: !0,
    Expanded: !0,
    HasPopup: !0,
    Invalid: !0,
    Label: !0,
    Level: !0,
    Modal: !0,
    Multiline: !0,
    MultiSelectable: !0,
    Orientation: !0,
    Owns: !0,
    Placeholder: !0,
    PosInSet: !0,
    Pressed: !0,
    RoleDescription: !0,
    RowCount: !0,
    RowIndex: !0,
    RowSpan: !0,
    Selected: !0,
    SetSize: !0,
    Sort: !0,
    ValueMax: !0,
    ValueMin: !0,
    ValueNow: !0,
    ValueText: !0
  };
  for (const key in items) {
    let val = items[key];
    val === !0 && (val = key.toLowerCase()), accessibilityDirectMap[`accessibility${key}`] = `aria-${val}`;
  }
}
const webToNativeAccessibilityDirectMap = null, nativeAccessibilityValue = null, nativeAccessibilityState = null, accessibilityWebRoleToNativeRole = null;
export {
  accessibilityDirectMap,
  accessibilityWebRoleToNativeRole,
  nativeAccessibilityState,
  nativeAccessibilityValue,
  webToNativeAccessibilityDirectMap
};
//# sourceMappingURL=accessibilityDirectMap.js.map
