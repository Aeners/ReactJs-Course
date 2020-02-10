import React from "react";
import PropTypes from "prop-types";

const GuestListItem = props => <li>{props.name}</li>;

GuestListItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default GuestListItem;
