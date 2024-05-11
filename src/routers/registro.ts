import express from "express";

const router = express.Router();

import { registroGet, registroPost, registroAdmin } from "../controllers/auth";

router.get("/", registroGet);

router.post("/", registroPost);

router.post("/admin", registroAdmin);

export default router;
