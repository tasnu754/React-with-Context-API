import { create, router as _router, defaults } from "json-server";

const server = create();
const router = _router("db.json");
const middlewares = defaults();

server.use(middlewares);

// Handle the http://localhost:3000 prefix from Vercel routing
server.use("http://localhost:3000", router);

export default server;
