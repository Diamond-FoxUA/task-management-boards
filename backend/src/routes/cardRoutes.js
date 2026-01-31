import { Router } from "express";
import { getCardById, createCard, updateCard, deleteCard } from "../routes/cardRoutes.js";
const router = Router();

router.get('/cards/:cardId', getCardById);
router.post('/cards', createCard);
router.patch('/cards/:cardId', updateCard);
router.delete('/cards/:cardId', deleteCard);

export default router;
