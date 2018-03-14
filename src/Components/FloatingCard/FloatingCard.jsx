import React from 'react';
import PropTypes from 'prop-types';
import './floating-card.css';

function FloatingCrd(props) {
  return (
      <div className={`FancyBorder FancyBorder-${  props.color}`}>
        {props.children}
      </div>
  );
}

function WelcomeDialog() {
  return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
  );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root'),
);


