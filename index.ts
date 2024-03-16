import express from "express";
const app = express();
const PORT = 3001;
import { router as personsRoute } from "./routes/personsRoute";

app.use(express.json());

app.use("/api", personsRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
