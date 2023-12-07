import { CategoryButton } from "../../interfaces.tsx";

interface Store {
  categoryList: CategoryButton[];
}

export const store: Store = {
  categoryList: [
    { id: 1, color: "#F0A04B" },
    { id: 2, color: "#F55050" },
    { id: 3, color: "#AD7BE9" },
    { id: 4, color: "#537FE7" },
    { id: 5, color: "#C9F4AA" },
  ],
};
