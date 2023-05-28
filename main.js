import { Application } from "oak";
import "./fake.js";
import "./homepage.js";
import "./any.js";
import router from "./router.js"

const app = new Application();
app.use(router.routes()).use(router.allowedMethods());

console.log(`App listening on localhost:8000`);
await app.listen({ port: 8000 });