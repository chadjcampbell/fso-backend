import express from "express";
import { getAllPersons } from "../controllers/persons/getAllPersons";
export const router = express.Router();

router.get("/persons", getAllPersons);
