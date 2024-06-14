import express from "express";

const router = express.Router();

import {
  cargarNotasGet,
  cargarNotasPut,
  subirNotasPut,
} from "../controllers/notas";

router.get("/cargar", cargarNotasGet);

router.put("/cargar", cargarNotasPut);

router.put("/subir", subirNotasPut);

export default router;
