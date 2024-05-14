import { Edge } from "edge.js";
import { IRequest, RouterType } from "itty-router";

export interface RouteInitializer {
  init: (edge: Edge) => RouterType<IRequest, [], any>;
}