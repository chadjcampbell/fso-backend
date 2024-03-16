import { Request, Response } from "express";

import { persons } from "../../data";

export const addPerson = (req: Request, res: Response) => {
  const { name, number } = req.body;
  if (!name || !number) {
    res.status(40).send({ error: "name and number are required" });
  }
  const person = persons.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  if (person) {
    res.status(404).send({ error: "name must be unique" });
  } else {
    const id = Math.floor(Math.random() * 10000);
    persons.push({ name, number, id });
    res.end();
  }
};
