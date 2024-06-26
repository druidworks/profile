import { negotiatedCompression } from "@major-tanya/itty-compression";
import { Router, html, error } from "itty-router";
import { Edge } from "edge.js";

import { RouteInitializer } from "../types/RouteInitializer.js";

export default {
  init: () => {
    const router = Router({
      base: "/project",
      before: [], // upstream middleware
      catch: error, // error handling
      finally: [html, negotiatedCompression], // downstream response formatting
    });
  
    router
      .get("/:id", ({ params }) => `Project ${params.id}`)
      .get("/", () => `Projects`);
  
    return router;
  }
} as RouteInitializer;
