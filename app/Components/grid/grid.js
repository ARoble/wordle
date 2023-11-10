import Row from "./row";

export default function Grid() {
  const noRows = [0, 1, 2, 3, 4, 5];
  return (
    <div className="text-white">
      {noRows.map((row, index) => (
        <Row row={row} key={index} />
      ))}
    </div>
  );
}
