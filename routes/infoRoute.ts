import express from "express";
import { getInfo } from "../controllers/info/getInfo";
export const router = express.Router();

router.get("/", getInfo);
