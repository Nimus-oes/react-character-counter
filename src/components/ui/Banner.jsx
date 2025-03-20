export default function Banner({ count, label }) {
  return (
    <div className="banner-item">
      <div>{count}</div>
      <div>{label}</div>
    </div>
  );
}
