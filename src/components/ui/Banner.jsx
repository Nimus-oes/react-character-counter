export default function Banner({ count, label, className }) {
  return (
    <div className={`banner-item ${className}`}>
      <div className="banner-count">{count}</div>
      <div className="banner-label">{label}</div>
    </div>
  );
}
