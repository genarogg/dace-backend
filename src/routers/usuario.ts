import express from "express";

const router = express.Router();

import {
  addProfesorAMateriaGet,
  addProfesorAMateriaPost,
  usersGet,
  usersUpdatePut,
} from "../controllers/usuario";

router.get("/add-materia-a-profesor", addProfesorAMateriaGet);

router.post("/add-materia-a-profesor", addProfesorAMateriaPost);

router.get("/data", usersGet);

router.put("/data", usersUpdatePut);

export default router;
