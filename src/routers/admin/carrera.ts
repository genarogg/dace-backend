import express from "express";

import {
  addCarreraGet,
  addCarreraPost,
  addPensumGet,
  addPensumPost,
} from "../../controllers/carrera";

import checkRole from "../middleware/checkRole";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola desde admin");
});

router.get("/carrera/add-pensum", addPensumGet);
router.get("/carrera/add-pensum", checkRole("esAdmin"), addPensumPost);

router.get("/carrera/add-carrera", addCarreraGet);
router.post("/carrera/add-carrera", checkRole("esAdmin"), addCarreraPost);

export default router;
