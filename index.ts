import express from "express";
import { Request } from "express";
import morgan from "morgan";
const app = express();
const PORT = 3000;
import { router as personsRoute } from "./routes/personsRoute";
import { router as infoRoute } from "./routes/infoRoute";

app.use(express.json());
morgan.token("body", function (req: Request, _res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      tokens.body(req, res),
    ].join(" ");
  })
);

app.use("/api", personsRoute);
app.use("/info", infoRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
