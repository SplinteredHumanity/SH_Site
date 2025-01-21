import "./index.css";
import { useState } from "react";
import Hamburger from "hamburger-react";

function App() {
  return (
    <>
      <div className="max-h-fit flex font-nasa justify-between text-4xl items-center">
        <div className="text-left pl-5">
          <p>SPLINTERED HUMANITY PRODUCTIONS</p>
        </div>
        <div className="flex text-right hamburger-wrapper items-center pr-3">
          <p>MENU</p>
          <Hamburger />
        </div>
      </div>
      <div className="horizontal-rule" />
    </>
  );
}

export default App;
