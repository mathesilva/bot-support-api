import { Router } from "express";
import {getMessages,chatWithAI,updateMessageResponse, deleteMessage } from "../controllers/messageController";

const router = Router();

router.post("/messages", chatWithAI);
router.get("/messages", getMessages);
router.put("/messages/:id", updateMessageResponse);
router.delete("/messages/:id", deleteMessage);


export default router;