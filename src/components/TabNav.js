import React, { useRef } from "react";

export default function TabNav() {
  const ref = useRef();
  const handleClick = (node) => {
    console.log(node);
  };
  console.log(ref);
  return (
    <div className="TabNav container">
      <h2>Everything You Need</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.</p>
      <ul className="nav-tab">
        <li ref={handleClick} className="tab active">
          Dashboard
        </li>
        <li ref={handleClick} className="tab">
          Invoicing
        </li>
        <li ref={handleClick} className="tab">
          Payments
        </li>
        <li ref={handleClick} className="tab ">
          Financial Reports
        </li>
        <li ref={handleClick} className="tab">
          Ledger
        </li>
      </ul>
      <div className="tab-image">
        <img
          src="https://frappebooks.com/files/books-dashboarda2ada9.png"
          alt=""
        />
      </div>
    </div>
  );
}
