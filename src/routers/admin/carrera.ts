import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola desde admin");
});

router.get("/carrera", (req, res) => {
  res.render("./admin/carrera");
});

export default router;
