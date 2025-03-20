export default function Button({ src, alt, handleClick }) {
  return (
    <div>
      <img src={src} alt={alt} onClick={handleClick} />
    </div>
  );
}
