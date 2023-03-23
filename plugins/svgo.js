import SVGO from "svgo";
import { customTransformStreamFn } from "./through.js";

const base = {
    plugins: [
        { cleanupAttrs: false },
        { removeDoctype: false },
        { removeXMLProcInst: false },
        { removeXMLNS: false },
        { removeComments: false },
        { removeMetadata: false },
        { removeTitle: true },
        { removeDesc: false },
        { removeUselessDefs: false },
        { removeEditorsNSData: false },
        { removeEmptyAttrs: false },
        { removeHiddenElems: false },
        { removeEmptyText: false },
        { removeEmptyContainers: false },
        { removeViewBox: false },
        { cleanupEnableBackground: false },
        { convertStyleToAttrs: false },
        { convertColors: false },
        { convertPathData: false },
        { convertTransform: false },
        { removeUnknownsAndDefaults: false },
        { removeNonInheritableGroupAttrs: false },
        { removeUselessStrokeAndFill: false },
        { removeUnusedNS: false },
        { cleanupIDs: false },
        { cleanupNumericValues: false },
        { moveElemsAttrsToGroup: false },
        { moveGroupAttrsToElems: false },
        { collapseGroups: false },
        { removeRasterImages: false },
        { mergePaths: false },
        { convertShapeToPath: true },
        { sortAttrs: false },
        { removeDimensions: false },
    ],
};
export const svgo = () => {
    const svgoer = new SVGO(base);
    return customTransformStreamFn(async (bufferString) => {
        const { data } = await svgoer.optimize(bufferString);
        return data;
    }, true);
};
