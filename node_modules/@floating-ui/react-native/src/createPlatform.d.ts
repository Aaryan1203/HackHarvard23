import { Platform } from '@floating-ui/core';
export declare const createPlatform: ({ offsetParent, sameScrollView, scrollOffsets, }: {
    offsetParent: any;
    sameScrollView: boolean;
    scrollOffsets: {
        x: number;
        y: number;
    };
}) => Platform;
