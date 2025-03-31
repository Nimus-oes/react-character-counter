import "./BannerList.css";

export default function Banner({ value, title }) {
  return (
    <div className="banner">
      <div>{value}</div>
      <div>{title}</div>
    </div>
  );
}
