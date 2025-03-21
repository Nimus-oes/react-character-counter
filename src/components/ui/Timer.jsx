export default function Timer({ readingTime }) {
  return (
    <div className="timer-item">
      Approx. reading time: <span>{"<"}</span> {readingTime} minute
    </div>
  );
}
