import { Request, Response } from "express";
import axios from "axios";

import { Carrera } from "../../models";

const addPensumGet = async (req: Request, res: Response): Promise<any> => {
  const carreras = await Carrera.findAll();
  res.render("admin/carrera/addPensum", { data: carreras });
};

const addPensumPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const pensumData = req.body;

    const response = await axios.post(
      "http://localhost:8001/pensum",
      pensumData
    );

    console.log(response.data);

    res.json({ message: "Pensum creado" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al crear el pensum");
  }
};

export { addPensumGet, addPensumPost };
