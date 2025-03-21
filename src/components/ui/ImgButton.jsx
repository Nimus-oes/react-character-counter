export default function ImgButton({ src, alt, handleClick }) {
  return (
    <div>
      <img src={src} alt={alt} onClick={handleClick} />
    </div>
  );
}
