import "./BannerList.css";

export default function Banner({ value, title }) {
  return (
    <div className="banner">
      <div className="banner-value">{value}</div>
      <div className="banner-title">{title}</div>
    </div>
  );
}
