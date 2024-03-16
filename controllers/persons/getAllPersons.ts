import { Request, Response } from "express";

import { persons } from "../../data";

export const getAllPersons = (_req: Request, res: Response) => {
  res.send(persons);
};
