import React from "react";

import Button from "./Button";

import "./styles/Section.css";

class Section extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     nbClick: 0
  //   };
  //   this.handleClickNotBound = this.handleClickNotBound.bind(this);
  // }

  state = {
    nbClick: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nbClick !== this.state.nbClick) {
      alert("I will re-render because nbClick state value changed !\n");
    }
  }

  handleClickNotBound(e) {
    this.setState(prevState => ({
      nbClick: prevState.nbClick + 1
    }));
  }

  handleClickAutoBound = e => {
    this.setState(prevState => ({
      nbClick: prevState.nbClick + 1
    }));
  };

  handleClickAutoBoundBUTNEVER_EVER_EVER_EVER_EVER_DOTHAT = e => {
    this.state.nbClick++;
  };

  render() {
    const { nbClick } = this.state;

    return (
      <div className="section-container">
        <div className="row-container">
          <p className="clickcount-content">Clicked {nbClick} times</p>
          <Button handleClick={this.handleClickNotBound} text="Click Me !" />
        </div>
      </div>
    );
  }
}

export default Section;
