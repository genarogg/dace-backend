import express from "express";

const router = express.Router();

import { registroGet, registroPost } from "../controllers/auth/registro";

router.get("/", registroGet);

router.post("/", registroPost);

export default router;
