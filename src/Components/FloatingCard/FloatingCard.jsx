import React from 'react';
import PropTypes from 'prop-types';
import './floating-card.css';

const FloatingCard = props => (
  <div className="FloatingCard">
    {props.children}
  </div>
);

FloatingCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FloatingCard;
