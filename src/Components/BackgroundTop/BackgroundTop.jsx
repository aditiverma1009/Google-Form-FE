import React from 'react';
import './background-top.css';
// import FloatingCard from '../FloatingCard/FloatingCard';
class BackgroundTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="BackgroundTop" >{this.props.children}</div>
    );
  }
}

export default BackgroundTop;

