import type { Request, Response } from "express";

export function getAllUsers(req: Request, res: Response) {
  res.send([]);
}

export function getUserById(req: Request, res: Response) {
  res.send({});
}
