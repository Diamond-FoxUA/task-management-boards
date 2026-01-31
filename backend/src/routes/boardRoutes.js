import { Router } from "express";
import { getBoardById, createBoard, updateBoard, deleteBoard } from "../controllers/boardController.js";

const router = Router();

router.get('/boards/:boardId', getBoardById);
router.post('/boards', createBoard);
router.patch('/boards/:boardId', updateBoard);
router.delete('/boards/:boardId', deleteBoard);

export default router;
