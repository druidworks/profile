import { negotiatedCompression } from "@major-tanya/itty-compression";
import { Router, html, error } from "itty-router";
import { Edge } from "edge.js";

import { withEdgeRenderer } from "../middleware/withEdgeRenderer.js";
import type { RouteInitializer } from "../types/RouteInitializer.js";
import { route } from "../library/route.js";

import education from "./education.js";
import project from "./project.js";

export default {
  init: (edge: Edge) => {
    const educationRouter = education.init(edge);
    const projectRouter = project.init(edge);

    const router = Router({
      base: "/",
      before: [], // upstream middleware
      catch: error, // error handling
      finally: [html, negotiatedCompression], // downstream response formatting
    });

    router
      .all('*', withEdgeRenderer(edge))
      .get("/healthy-checking", () => `ok`)
      .get("/about-me", () => `All about me`)
      .get("/kurtosys", () => `Kurtosys Experience`)
      .get("/comprsa", () => `CompRSA Experience`)
      .get("/online-innovations", () => `Online Innovations Experience`)
      .get("/skills", () => `Skills`)
      .get("/contact", () => `Contact`)
      .all("/education/*", (request) => educationRouter.fetch(request))
      .all("/project/*", (request) => projectRouter.fetch(request))
      .get("/", route({ view: 'home', title: 'Home', description: 'Home Page', keywords: 'Home, Profile' }))
      .all("*", () => error(404));

    return router;
  },
} as RouteInitializer;
