import React from "react";
import PropTypes from "prop-types";

import "./styles/Button.css";

const Button = ({ handleClick, text }) => {
  return (
    <button className="generic-btn" type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypses = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
