import express from "express";

const router = express.Router();

import {
    addProfesorAMateriaGet,
    addProfesorAMateriaPost,
    addProfesorAMateriaPut,
    addProfesorAMateriaDelete,
  } from "../controllers/usuario";

router.get("/add-materia-a-profesor", addProfesorAMateriaGet);

router.post("/add-materia-a-profesor", addProfesorAMateriaPost);


export default router;