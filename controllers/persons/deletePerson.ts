import { Request, Response } from "express";

import { persons } from "../../data";

export const deletePerson = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    const idx = persons.indexOf(person);
    persons.splice(idx, 1);
    res.end();
  } else {
    res.status(404).send({ error: "person not found" });
  }
};
