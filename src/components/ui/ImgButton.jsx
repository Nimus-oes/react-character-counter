export default function ImgButton({
  boxClass,
  iconClass,
  src,
  alt,
  handleClick,
}) {
  return (
    <div className={boxClass}>
      <img src={src} alt={alt} className={iconClass} />
    </div>
  );
}
