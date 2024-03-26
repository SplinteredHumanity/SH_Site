import "../index.css";

function Header() {
  return (
    <>
      <div className="fixed top-0 z-50 border-b backdrop-blur-sm flex w-screen justify-center">
        <p className="text-3xl basis-1/3">This is a triumph!</p>
        <p className="text-3xl basis-1/3">
          I'm making a note here, great success
        </p>
        <p className="text-3xl sbasis-1/3">
          It's hard to overstate my satisfaction
        </p>
      </div>
    </>
  );
}

export default Header;
