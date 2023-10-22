import { getMedia } from "../hooks/useMedia";
function getGroupPropParts(groupProp) {
  const mediaQueries = getMedia(), [_, name, part3, part4] = groupProp.split("-");
  let pseudo;
  const media = part3 in mediaQueries ? part3 : void 0;
  return media ? pseudo = part4 : pseudo = part3, { name, pseudo, media };
}
export {
  getGroupPropParts
};
//# sourceMappingURL=getGroupPropParts.js.map
