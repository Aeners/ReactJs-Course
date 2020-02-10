import React from "react";

import Button from "./Button";

import "./styles/Section.css";

const SectionStateless = () => {
  const [nbClick, setNbClick] = React.useState(0);

  React.useEffect(() => {
    if (nbClick) {
      alert("I will re-render because nbClick state value changed !\n");
    }
  }, [nbClick]);

  const handleClick = e => {
    setNbClick(nbClick + 1);
  };

  console.log(nbClick);

  return (
    <div className="section-container">
      <div className="row-container">
        <p className="clickcount-content">Clicked {nbClick} times</p>
        <Button handleClick={handleClick} text="Click Me !" />
      </div>
    </div>
  );
};

export default SectionStateless;
