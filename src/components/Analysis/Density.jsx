export default function Density({ inputText, children }) {
  const noGraph = (
    <p className="no-graph">
      No characters found. Start typing to see letter density.
    </p>
  );

  return (
    <>
      <h3 className="density-title">Letter Density</h3>
      <div>{inputText ? children : noGraph}</div>
    </>
  );
}
