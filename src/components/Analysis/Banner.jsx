export default function Banner(props) {
  return (
    <div>
      <div className="banner-value">{props.value}</div>
      <div className="banner-title">{props.title}</div>
    </div>
  );
}
