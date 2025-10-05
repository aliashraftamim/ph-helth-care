import cors from "cors";
import express from "express";
import { userRoutes } from "./modules/user/user.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/user", userRoutes);

export default app;
