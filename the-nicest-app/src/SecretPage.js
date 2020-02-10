import React from "react";
import { Redirect } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

import useInterval from "./useInterval";

import "./styles/SecretPage.css";

let intervalId;

const SecretPage = () => {
  const [secondRemaning, setSecondRemaining] = React.useState(7);

  intervalId = useInterval(() => {
    setSecondRemaining(secondRemaning - 1);
  }, 1000);

  React.useEffect(() => () => clearInterval(intervalId), []);

  const LoremIpsumBody = React.useMemo(() => <LoremIpsum p={100} />, []);

  if (!secondRemaning) {
    return <Redirect to="/" />;
  }
  return (
    <div className="secret-page-container">
      <h1>Scroll fast ! Redirecting you in {secondRemaning}s </h1>
      {LoremIpsumBody}
    </div>
  );
};

export default SecretPage;
