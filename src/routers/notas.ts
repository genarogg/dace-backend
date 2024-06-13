import express from "express";

const router = express.Router();

import { cargarNotasGet, cargarNotasPost }from "../controllers/notas";

router.get("/cargar/:id", cargarNotasGet);

router.post("/cargar", cargarNotasPost);

export default router;
