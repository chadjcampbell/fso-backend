import express from "express";
const app = express();
const PORT = 3000;
import { router as personsRoute } from "./routes/personsRoute";
import { router as infoRoute } from "./routes/infoRoute";

app.use(express.json());

app.use("/api", personsRoute);
app.use("/info", infoRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
