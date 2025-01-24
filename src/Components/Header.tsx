import { Divide as Hamburger } from "hamburger-react";

function Header() {
  return (
    <>
      <div className="max-h-fit flex font-nasa justify-between text-4xl items-center antialiased">
        <p className="text-left pl-5">SPLINTERED HUMANITY PRODUCTIONS</p>
        <p className="flex text-right hamburger-wrapper items-center pr-3">
          MENU
          <Hamburger rounded />
        </p>
      </div>
      <div className="horizontal-rule" />
    </>
  );
};

export default Header;
