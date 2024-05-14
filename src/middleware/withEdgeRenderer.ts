import { IRequest } from "itty-router";
import { Edge } from "edge.js";

export const withEdgeRenderer = (edge: Edge) => {
    return (request: IRequest) => {
        request.renderer = edge.createRenderer();
    }
};
