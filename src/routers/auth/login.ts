import express from "express";

const router = express.Router();

import { loginGet, loginPost, verificarToken } from "../../controllers/auth";

router.get("/", loginGet);

router.post("/", loginPost);

router.post("/token", verificarToken);

export default router;
