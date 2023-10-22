var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  cleanAndSortTree: () => cleanAndSortTree,
  compareIndexPaths: () => compareIndexPaths,
  flattenChildren: () => flattenChildren,
  mapToChildren: () => mapToChildren,
  parseIndexPath: () => parseIndexPath,
  sortMapByIndexPath: () => sortMapByIndexPath,
  useIndex: () => useIndex,
  useIndexedChildren: () => useIndexedChildren,
  usePrerender: () => usePrerender,
  useRovingIndex: () => useRovingIndex,
  useTree: () => useTree,
  useTreeId: () => useTreeId,
  useTreeNode: () => useTreeNode,
  useTreeState: () => useTreeState
});
module.exports = __toCommonJS(src_exports);

// src/use-indexed-children.tsx
var React3 = __toESM(require("react"));

// src/contexts.ts
var React = __toESM(require("react"));
var PrerenderContext = React.createContext(false);
PrerenderContext.displayName = "PrerenderContext";
var MaxIndexContext = React.createContext([]);
MaxIndexContext.displayName = "MaxIndexContext";
var IndexContext = React.createContext(null);
IndexContext.displayName = "IndexContext";
var TreeStateContext = React.createContext(null);
TreeStateContext.displayName = "TreeStateContext";

// src/utils.ts
var React2 = __toESM(require("react"));
var import_performant_array_to_tree = require("performant-array-to-tree");
var isServer = typeof window === "undefined";
var useIsomorphicLayoutEffect = isServer ? React2.useEffect : React2.useLayoutEffect;
function parseIndexPath(indexPathString) {
  return indexPathString.split(".").map((index) => parseInt(index, 10));
}
function compareIndexPaths(a = "", b = "") {
  var _a, _b;
  let aArray = a.split(".").map(Number);
  let bArray = b.split(".").map(Number);
  if (aArray.includes(NaN) || bArray.includes(NaN)) {
    throw new Error("Version contains parts that are not numbers");
  }
  const maxLength = Math.max(a.length, b.length);
  for (let index = 0; index < maxLength; index++) {
    const difference = ((_a = aArray[index]) != null ? _a : 0) - ((_b = bArray[index]) != null ? _b : 0);
    if (difference === 0) {
      continue;
    }
    return difference > 0 ? 1 : -1;
  }
  return 0;
}
function cleanAndSortTree(tree) {
  var _a;
  if (((_a = tree.children) == null ? void 0 : _a.length) > 0) {
    tree.children.sort((a, b) => compareIndexPaths(a.indexPathString, b.indexPathString));
    return {
      ...tree.data,
      children: tree.children.map(cleanAndSortTree)
    };
  }
  return tree.data;
}
function mapToChildren(dataMap) {
  const parsedValues = Array.from(dataMap.entries()).map(([indexPathString, data]) => {
    const parentIndexPathString = parseIndexPath(indexPathString).slice(0, -1).join(".");
    return {
      data,
      parentId: parentIndexPathString,
      id: indexPathString
    };
  });
  const tree = (0, import_performant_array_to_tree.arrayToTree)(parsedValues, { dataField: null });
  const cleanedTree = cleanAndSortTree({ children: tree });
  return cleanedTree ? cleanedTree.children : [];
}
function sortMapByIndexPath(treeMap) {
  const sortedEntries = Array.from(treeMap.entries()).sort((a, b) => compareIndexPaths(a[0], b[0]));
  return new Map(sortedEntries);
}
function flattenChildren(children) {
  const flatChildren = children.flatMap(
    (child) => child.children ? flattenChildren(child.children) : [child]
  );
  return flatChildren;
}

// src/use-indexed-children.tsx
function useIndex() {
  const maxIndexPath = React3.useContext(MaxIndexContext);
  const indexPathString = React3.useContext(IndexContext);
  return React3.useMemo(() => {
    if (indexPathString === null) {
      return null;
    }
    const indexPath = parseIndexPath(indexPathString);
    const maxIndex = maxIndexPath[maxIndexPath.length - 1];
    const index = indexPath[indexPath.length - 1];
    return {
      maxIndex,
      maxIndexPath,
      index,
      indexPath,
      indexPathString,
      isFirst: index === 0,
      isLast: index === maxIndex,
      isEven: index % 2 === 0,
      isOdd: Math.abs(index % 2) === 1
    };
  }, [maxIndexPath, indexPathString]);
}
function useIndexedChildren(children) {
  const parentMaxIndexPath = React3.useContext(MaxIndexContext);
  const indexPathString = React3.useContext(IndexContext);
  const childrenCount = React3.Children.count(children);
  const maxIndexPath = React3.useMemo(
    () => parentMaxIndexPath.concat(childrenCount - 1),
    [childrenCount]
  );
  return /* @__PURE__ */ React3.createElement(MaxIndexContext.Provider, { value: maxIndexPath }, React3.Children.map(
    children,
    (child, index) => React3.isValidElement(child) ? /* @__PURE__ */ React3.createElement(
      IndexContext.Provider,
      {
        key: child.key,
        value: indexPathString ? `${indexPathString}.${index.toString()}` : index.toString()
      },
      child
    ) : child
  ));
}

// src/use-roving-index.ts
var React4 = __toESM(require("react"));
function useRovingIndex({
  contain = true,
  defaultIndex = 0,
  maxIndex = Infinity,
  wrap = false
}) {
  const [activeIndex, setLocalActiveIndex] = React4.useState(defaultIndex);
  const getNextIndex = React4.useCallback(
    (nextIndex) => {
      if (wrap) {
        return (nextIndex % maxIndex + maxIndex) % maxIndex;
      }
      if (contain) {
        return nextIndex > maxIndex ? maxIndex : nextIndex < 0 ? 0 : nextIndex;
      }
      return nextIndex;
    },
    [maxIndex, wrap]
  );
  const moveActiveIndex = React4.useCallback(
    (amountToMove) => {
      setLocalActiveIndex((currentIndex) => getNextIndex(currentIndex + amountToMove));
    },
    [getNextIndex]
  );
  const setActiveIndex = React4.useCallback(
    (nextIndex) => {
      setLocalActiveIndex(getNextIndex(nextIndex));
    },
    [getNextIndex]
  );
  const moveBackward = React4.useCallback(() => moveActiveIndex(-1), [moveActiveIndex]);
  const moveForward = React4.useCallback(() => moveActiveIndex(1), [moveActiveIndex]);
  return {
    activeIndex,
    moveActiveIndex,
    setActiveIndex,
    moveBackward,
    moveForward,
    moveBackwardDisabled: activeIndex <= 0,
    moveForwardDisabled: activeIndex >= maxIndex
  };
}

// src/use-tree.tsx
var React5 = __toESM(require("react"));
var import_zustand = require("zustand");
function useTreeState(selector) {
  const treeStateContext = React5.useContext(TreeStateContext);
  const [treeState] = React5.useState(
    () => treeStateContext || (0, import_zustand.create)((set, get) => ({
      treeMap: /* @__PURE__ */ new Map(),
      prerenderedTreeIds: /* @__PURE__ */ new Map(),
      shouldPrerender: true,
      setTreeData: (id, data) => {
        const { treeMap } = get();
        treeMap.set(id, data);
        set({ treeMap: sortMapByIndexPath(treeMap) });
      },
      deleteTreeData: (id) => {
        const { treeMap } = get();
        treeMap.delete(id);
        set({ treeMap: sortMapByIndexPath(treeMap) });
      }
    }))
  );
  return selector ? treeState(selector) : treeState;
}
function PrerenderTree({ children }) {
  const treeState = useTreeState();
  const shouldPrerender = treeState((state) => state.shouldPrerender);
  useIsomorphicLayoutEffect(() => {
    treeState.setState({
      prerenderedTreeIds: /* @__PURE__ */ new Map(),
      shouldPrerender: false
    });
  }, []);
  return shouldPrerender ? /* @__PURE__ */ React5.createElement(PrerenderContext.Provider, { value: true }, children) : null;
}
function usePrerender() {
  const isPrerender = React5.useContext(PrerenderContext);
  if (isPrerender === null) {
    throw new Error("usePrerender must be used in a descendant component of useTree.");
  }
  return isPrerender;
}
function useTree(children, treeState) {
  const treeStateContext = React5.useContext(TreeStateContext);
  const treeStateLocal = useTreeState();
  const parsedTreeState = treeStateContext || treeState || treeStateLocal;
  const isPrerender = React5.useContext(PrerenderContext);
  const isRoot = treeStateContext === null;
  const indexedChildren = useIndexedChildren(children);
  const childrenToRender = isRoot ? /* @__PURE__ */ React5.createElement(TreeStateContext.Provider, { value: parsedTreeState }, /* @__PURE__ */ React5.createElement(PrerenderTree, null, indexedChildren), indexedChildren) : indexedChildren;
  return {
    children: childrenToRender,
    useStore: parsedTreeState,
    isPrerender,
    isRoot
  };
}
function useTreeId() {
  const treeStateContext = React5.useContext(TreeStateContext);
  if (treeStateContext === null) {
    throw new Error("useTreeId must be used in a descendant component of useTree.");
  }
  const { prerenderedTreeIds } = treeStateContext.getState();
  const { indexPathString } = useIndex();
  const generatedId = React5.useId().slice(1, -1);
  const treeId = prerenderedTreeIds.get(indexPathString) || generatedId;
  return treeId;
}
function useTreeNode(treeId, getData, dependencies = []) {
  const isPrerender = React5.useContext(PrerenderContext);
  const treeStateContext = React5.useContext(TreeStateContext);
  if (treeStateContext === null) {
    throw new Error("useTreeNode must be used in a descendant component of useTree.");
  }
  const { deleteTreeData, prerenderedTreeIds, setTreeData, treeMap } = treeStateContext.getState();
  const { indexPathString } = useIndex();
  const treeData = React5.useMemo(
    () => Object.assign({ treeId }, getData()),
    dependencies.concat(treeId)
  );
  if (isPrerender) {
    treeMap.set(indexPathString, treeData);
    prerenderedTreeIds.set(indexPathString, treeId);
  } else {
    React5.useEffect(() => {
      setTreeData(indexPathString, treeData);
      return () => {
        deleteTreeData(indexPathString);
      };
    }, [indexPathString, treeData]);
  }
  return treeData;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cleanAndSortTree,
  compareIndexPaths,
  flattenChildren,
  mapToChildren,
  parseIndexPath,
  sortMapByIndexPath,
  useIndex,
  useIndexedChildren,
  usePrerender,
  useRovingIndex,
  useTree,
  useTreeId,
  useTreeNode,
  useTreeState
});
