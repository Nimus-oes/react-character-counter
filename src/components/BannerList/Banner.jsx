import "./BannerList.css";

export default function Banner({ value, title, className }) {
  return (
    <div className={`banner ${className}`}>
      <div className="banner-value">{value}</div>
      <div className="banner-title">{title}</div>
    </div>
  );
}
