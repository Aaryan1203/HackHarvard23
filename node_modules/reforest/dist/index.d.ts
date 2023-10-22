import { UseBoundStore, StoreApi } from 'zustand';
import * as React from 'react';

type TreeState = {
    treeMap: Map<string, any>;
    prerenderedTreeIds: Map<string, string>;
    shouldPrerender: boolean;
    setTreeData: (key: string, value: any, shouldUpdate?: boolean) => void;
    deleteTreeData: (key: string, shouldUpdate?: boolean) => void;
};
type TreeStateStore = UseBoundStore<StoreApi<TreeState>>;

/** Returns the index path data based on the closest useIndexedChildren. */
declare function useIndex(): {
    maxIndex: number;
    maxIndexPath: number[];
    index: number;
    indexPath: number[];
    indexPathString: string;
    isFirst: boolean;
    isLast: boolean;
    isEven: boolean;
    isOdd: boolean;
} | null;
/** Provides the current index path for each child. */
declare function useIndexedChildren(children: React.ReactNode): React.JSX.Element;

/**
 * Manage an active index that needs to be contained or wrap.
 *
 * @example
 * const {
 *   activeIndex,
 *   moveActiveIndex,
 * } = useRovingIndex({ maxIndex: items.length - 1 })
 */
declare function useRovingIndex({ contain, defaultIndex, maxIndex, wrap, }: {
    /** The default index used when first mounting. */
    defaultIndex?: number;
    /** The max index used to know when to contain or wrap. */
    contain?: boolean;
    /** The max index used to know when to contain or wrap. */
    maxIndex?: number;
    /** Wrap index when navigating outside the first or last index. */
    wrap?: boolean;
}): {
    /** The active index. */
    activeIndex: number;
    /** Whether the active index can be moved backward. */
    moveBackwardDisabled: boolean;
    /** Whether the active index can be moved forward. */
    moveForwardDisabled: boolean;
    /** Move the index backwards. */
    moveBackward: () => void;
    /** Move the index forwards. */
    moveForward: () => void;
    /** Move the active index by a positive or negative amount. */
    moveActiveIndex: (amount: number) => void;
    /** Set any active index. */
    setActiveIndex: (nextIndex: number) => void;
};

/**
 * Control tree state from outside a component.
 *
 * @example
 * import type { TreeMap } from "reforest"
 * import { useTree, useTreeNode, useTreeMap } from "reforest"
 *
 * function Item({ children, value }) {
 *   useTreeNode(value)
 *   return <li>{children}</li>
 * }
 *
 * function ItemList({ children }: { children: React.ReactNode, treeState: TreeState }) {
 *   const tree = useTree(children, treeState)
 *   return <ul>{tree.children}</ul>
 * }
 *
 * function App() {
 *   const treeState = useTreeState()
 *   return (
 *     <ItemList treeState={treeState}>
 *       <Item value="apple">Apple</Item>
 *       <Item value="banana">Banana</Item>
 *       <Item value="cherry">Cherry</Item>
 *     </ItemList>
 *   )
 * }
 */
declare function useTreeState(): TreeStateStore;
declare function useTreeState<U>(selector: (state: TreeState) => U): U;
/** Determine if the current render is a prerender. */
declare function usePrerender(): boolean;
/**
 * Manage ordered data subscriptions for components.
 *
 * @example create a tree of data subscriptions
 * import { useTree, useTreeNode } from "reforest"
 *
 * function Item({ children, value }) {
 *   useTreeNode(value)
 *   return <li>{children}</li>
 * }
 *
 * function ItemList({ children }: { children: React.ReactNode }) {
 *   const tree = useTree(children)
 *   return <ul>{tree.children}</ul>
 * }
 */
declare function useTree(children: React.ReactNode, treeState?: TreeStateStore): {
    children: React.JSX.Element;
    useStore: TreeStateStore;
    isPrerender: boolean;
    isRoot: boolean;
};
/** Generate an id for use with useTreeNode. */
declare function useTreeId(): string;
/** Subscribe data to the root useTree hook. */
declare function useTreeNode(treeId: string, getData: () => any, dependencies?: React.DependencyList): any;

/**
 * Parses a numerical dot-separated string as an index path.
 *
 * @example
 * parseIndexPath('0.10.2') -> [0, 10, 2]
 */
declare function parseIndexPath(indexPathString: string): number[];
/**
 * Compares two index path strings.
 * Credit: https://twitter.com/katylava/status/1558222958702780418
 */
declare function compareIndexPaths(a?: string, b?: string): 0 | 1 | -1;
/** Recursive function that removes "id" and "parentId" keys and returns each indexed data. */
declare function cleanAndSortTree(tree: any): any;
/** Builds an array of trees from a Map of data collected in useTree. */
declare function mapToChildren(dataMap: Map<string, any>): Array<any>;
/** Sorts a map by an indexPathString property. */
declare function sortMapByIndexPath(treeMap: Map<string, any>): Map<string, any>;
/** Flattens all tree nodes into one array. */
declare function flattenChildren(children: any[]): any;

export { TreeState, TreeStateStore, cleanAndSortTree, compareIndexPaths, flattenChildren, mapToChildren, parseIndexPath, sortMapByIndexPath, useIndex, useIndexedChildren, usePrerender, useRovingIndex, useTree, useTreeId, useTreeNode, useTreeState };
