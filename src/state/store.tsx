import { CategoryButton, Tasks } from "../../types.tsx";

interface Store {
  categoryList: CategoryButton[];
  taskList: Tasks[];
}

export const store: Store = {
  categoryList: [
    { id: 1, color: "#F0A04B" },
    { id: 2, color: "#F55050" },
    { id: 3, color: "#AD7BE9" },
    { id: 4, color: "#537FE7" },
    { id: 5, color: "#C9F4AA" },
  ],

  taskList: [
    // { id: 1, categoryId: 1, textContent: "some text", color: "#F0A04B"},
  ],
};
