import "./ColorTile.css";
import classNames from "classnames";
import { useDrag } from "react-dnd";

interface Props {
  color: string | undefined;
  id: number | undefined;
}

const Tile = ({ color, id }: Props) => {
  const tileClasses = classNames({
    Tile: true,
    red: color === "red",
    blue: color === "blue",
    white: color === "white",
    black: color === "black",
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tile",
    item: { id: id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return <div className={tileClasses} ref={drag}></div>;
};

export default Tile;
