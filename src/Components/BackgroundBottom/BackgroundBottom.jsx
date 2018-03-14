import React from 'react';
import './background-bottom.css';
// import FloatingCard from '../FloatingCard/FloatingCard';
class BackgroundBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="BackgroundBottom" >{this.props.children}</div>
    );
  }
}

export default BackgroundBottom;

