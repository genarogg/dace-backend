import { Request, Response } from "express";



const addPensumGet = (req: Request, res: Response): void => {
  res.render("admin/carrera/addPensum");
};

const addPensumPost = async (req: Request, res: Response): Promise<void> => {
  // Aquí va tu código
};

export { addPensumGet, addPensumPost };
