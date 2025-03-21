export default function Banner({ count, label }) {
  return (
    <div className="banner-item">
      <div className="banner-count">{count}</div>
      <div className="banner-label">{label}</div>
    </div>
  );
}
