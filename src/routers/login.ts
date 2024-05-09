import express from "express";

const router = express.Router();

import { loginGet, loginPost } from"../controllers/auth";

router.get("/", loginGet);

router.post("/", loginPost);

export default router;
