
// @ts-ignore
import express from "express";
// @ts-ignore
import serveStatic from "serve-static";
import {resolve} from "path";

const app = express();
const PORT = 3000;

app.use(serveStatic(resolve(__dirname, "../dist")))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});