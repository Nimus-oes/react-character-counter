export default function ImgButton({ className, src, alt, handleClick }) {
  return (
    <img src={src} alt={alt} onClick={handleClick} className={className} />
  );
}
