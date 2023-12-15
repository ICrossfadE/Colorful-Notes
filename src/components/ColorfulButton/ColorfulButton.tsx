import { ColorStyleButton, CategoryButton } from "../../../types";

interface ColorfulButtonProps {
  item: CategoryButton;
}

const ColorfulButton: React.FC<ColorfulButtonProps> = ({ item }) => {
  const classes = `h-4 w-4 my-2 rounded-full `;

  const buttonColorStyle: ColorStyleButton = {
    backgroundColor: item.color,
  };

  return <button style={buttonColorStyle} className={classes}></button>;
};

export default ColorfulButton;
