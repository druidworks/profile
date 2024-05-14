import { negotiatedCompression } from "@major-tanya/itty-compression";
import { Router, html, error } from "itty-router";

import { RouteInitializer } from "../types/RouteInitializer.js";

export default {
  init: (edge?: any) => {
    const router = Router({
      base: "/education",
      before: [], // upstream middleware
      catch: error, // error handling
      finally: [html, negotiatedCompression], // downstream response formatting
    });
  
    router
      .get("/:id", ({ params }) => `Education ${params.id}`)
      .get("/", () => `Education`);
  
    return router;
  }
} as RouteInitializer;
