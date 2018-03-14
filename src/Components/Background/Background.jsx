import React from 'react';
import './background.css';
// import FloatingCard from '../FloatingCard/FloatingCard';
class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="Background">
        <div className="BackgroundTop" />
        <div className="BackgroundBottom" />
      </div>
    );
  }
}

export default Background;

