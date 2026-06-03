export default function Decor() {
  return (
    <>
      <div className="decor decor--top-left" aria-hidden="true">
        <img src="/images/left-corner.png" alt="" />
      </div>
      <div className="decor decor--bottom-right" aria-hidden="true">
        <img src="/images/right-corner.png" alt="" />
      </div>
    </>
  );
}
