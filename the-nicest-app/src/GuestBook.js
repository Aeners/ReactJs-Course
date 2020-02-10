import React from "react";

import GuestListItem from "./GuestListItem";

import "./styles/GuestBook.css";

const guests = ["Michael Scott", "Dan Abramov", "Barack Obama"];

const GuestBook = () => {
  const renderGuests = () => {
    return guests.map(guestName => <GuestListItem name={guestName} />);
  };

  return (
    <div className="guestbook-container">
      <h1>Wall of fame</h1>
      <ul className="guest-list-container">{renderGuests()}</ul>
    </div>
  );
};
export default GuestBook;
