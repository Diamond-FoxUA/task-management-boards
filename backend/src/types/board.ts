export type ColumnType = "ToDo" | "InProgress" | "Done";

export interface Board {
  id: string;
  columns: Column[];
}

export interface Column {
  id: string;
  boardId: string;
  cards: Card[];
}

export interface Card {
  id: string;
  title: string;
  description: string;
}
