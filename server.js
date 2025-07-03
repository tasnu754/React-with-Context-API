// server.js
import jsonServer from "json-server";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Convert ESM path to usable directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
