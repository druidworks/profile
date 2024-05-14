import { Edge } from 'edge.js'

import routes from "./routes/index.js";

// Setup Views
const edge = Edge.create()
edge.mount(new URL('./views', import.meta.url))

// initialize routes and inject dependencies.
export const router = routes.init(edge);
