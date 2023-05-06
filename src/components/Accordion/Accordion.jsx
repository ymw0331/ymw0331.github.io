import React, { useState } from "react";
import "./Accordion.scss";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? "open" : ""}`} onClick={handleClick}>
        <h2>{title}</h2>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}


export default Accordion