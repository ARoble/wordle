import { GameContext } from "@/app/Context";
import { useContext, useEffect, useState } from "react";
import Key from "./key";
export default function Row({ row }) {
  const { letters } = useContext(GameContext);
  const [column, setColumn] = useState([]);
  useEffect(() => {
    const newCol = [];
    for (let i = 1; i <= letters; i++) {
      newCol.push(i);
    }
    setColumn(newCol);
  }, [letters]);
  return (
    <div className="flex gap-3">
      {column.map((column, index) => (
        <Key index={index} row={row} key={index} />
      ))}
    </div>
  );
}
