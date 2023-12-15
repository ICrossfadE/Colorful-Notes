export interface CategoryButton {
  id: number;
  color: string;
}

export interface Tasks {
  id: number;
  categoryId: number;
  textContent: string;
  color: string;
}
