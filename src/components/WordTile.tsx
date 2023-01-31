import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Tile from "../models/Tile";
import "./WordTile.css";
import classNames from "classnames";

interface Props {
  word: string;
  tiles: Tile[];
  scoreUpdaterInc: (tile: Tile) => void;
}

const WordTile = ({ word, tiles, scoreUpdaterInc }: Props) => {
  const [populateTile, setPopulateTile] = useState<Tile[]>([
    { cardText: word },
  ]);

  const tileClasses = classNames({
    Tile: true,
    red: populateTile[0].color === "red",
    blue: populateTile[0].color === "blue",
    white: populateTile[0].color === "white",
    black: populateTile[0].color === "black",
  });

  const addTileSpace = (id: number) => {
    const newTile = tiles.filter((tile) => id === tile.id);
    setPopulateTile(newTile);
    // This code erases all tiles on the board when it's added in
    scoreUpdaterInc(newTile[0]);
  };

  const tileClickHandler = () => {
    if (populateTile[0].color === "red") {
    }
    const newTile: Tile[] = [{}];
    newTile[0].cardText = word;
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "tile",
    drop: (item: any) => addTileSpace(item.id),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  return (
    <div className="WordTile" ref={drop}>
      {populateTile[0].id ? (
        <div className={tileClasses} onClick={tileClickHandler}></div>
      ) : (
        <div className="blank-tile">{populateTile[0].cardText}</div>
      )}
    </div>
  );
};

export default WordTile;
