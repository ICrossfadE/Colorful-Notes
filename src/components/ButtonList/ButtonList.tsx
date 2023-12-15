import ColorfulButton from "../ColorfulButton/ColorfulButton";
import { CategoryButton } from "../../../types";
import { store } from "../../state/store";

type ButtonListProps = {
  item?: CategoryButton[];
};

const ButtonList: React.FC<ButtonListProps> = () => {
  const buttonsCreate = store.categoryList.map((categoryItem) => {
    return <ColorfulButton key={categoryItem.id} item={categoryItem} />;
  });

  return <>{buttonsCreate}</>;
};

export default ButtonList;
