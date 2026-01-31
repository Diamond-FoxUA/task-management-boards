import { Router } from "express";
import { getCardById, createCard, updateCard, deleteCard } from "../routes/cardRoutes.js";
const router = Router();

router.get('/columns/:columnId', getCardById);
router.post('/column', createCard);
router.patch('/columns/columnId', updateCard);
router.delete('/columns/columnId', deleteCard);

export default router;
