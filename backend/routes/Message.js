import express from "express";
import { CreateMessage, deleteMessage, getAllMessages, getMessage, readMessage } from "../controllers/Message.js";



const router = express.Router();



router.route('/')
        .get(getAllMessages)
        .post(CreateMessage)

        
router.route('/:id')
        .get(getMessage)
        .patch(readMessage)
        .delete(deleteMessage)

export default router;