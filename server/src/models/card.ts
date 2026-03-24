import mongoose from 'mongoose';
import { Types } from 'mongoose';

export type Card = {
  title: string;
  description?: string;
  boardId: Types.ObjectId;
  column: 'todo' | 'in-progress' | 'done';
  order: number;
};

const cardSchema = new mongoose.Schema<Card>(
  {
    title: { type: String, required: true },
    description: { type: String },

    boardId: { type: mongoose.Schema.ObjectId, required: true, ref: 'Board' },
    column: {
      type: String,
      enum: ['todo', 'in-progress', 'done'],
      required: true,
    },
    order: { type: Number, required: true },
  },
  { timestamps: true },
);

export const CardModel = mongoose.model<Card>('Card', cardSchema);
