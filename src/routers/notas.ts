import express from "express";

const router = express.Router();

import {
  cargarNotasGet,
  cargarNotasPut,
  
} from "../controllers/notas";

router.get("/cargar", cargarNotasGet);

router.put("/cargar", cargarNotasPut);



export default router;
