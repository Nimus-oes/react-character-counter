export default function Banner(props) {
  return (
    <div className="banner">
      <div>{props.value}</div>
      <div>{props.title}</div>
    </div>
  );
}
