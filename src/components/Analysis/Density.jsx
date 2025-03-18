export default function Density({ inputText, children }) {
  const noGraph = (
    <p>No characters found. Start typing to see letter density.</p>
  );

  return (
    <>
      <h3>Letter Density</h3>
      <div>{inputText ? children : noGraph}</div>
    </>
  );
}
