import express from "express";
import { getAllPersons } from "../controllers/persons/getAllPersons";
import { getSinglePerson } from "../controllers/persons/getSinglePerson";
import { addPerson } from "../controllers/persons/addPerson";
import { deletePerson } from "../controllers/persons/deletePerson";
export const router = express.Router();

router.get("/persons", getAllPersons);
router.post("/persons", addPerson);
router.get("/persons/:id", getSinglePerson);
router.delete("/persons/:id", deletePerson);
