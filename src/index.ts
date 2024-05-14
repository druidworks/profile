import { createServerAdapter } from "@whatwg-node/server";
import { createServer } from "http";

import { router } from "./bootstrap.js";

// Define server port
const PORT = 3002;

// create a @whatwg-node/server
const ittyServer = createServerAdapter(router.fetch);

// then pass that to Node
const httpServer = createServer(ittyServer);
httpServer.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
