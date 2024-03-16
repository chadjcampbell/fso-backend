import { Request, Response } from "express";

import { persons } from "../../data";

export const getInfo = (_req: Request, res: Response) => {
  const length = persons.length;
  const date = new Date();
  res.send(`<p>Phonebook has info for ${length} people</p>
            <p>${date}</p>`);
};
