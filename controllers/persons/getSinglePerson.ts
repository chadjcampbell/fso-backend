import { Request, Response } from "express";

import { persons } from "../../data";

export const getSinglePerson = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    res.send(person);
  } else {
    res.status(404).send({ error: "person not found" });
  }
};
