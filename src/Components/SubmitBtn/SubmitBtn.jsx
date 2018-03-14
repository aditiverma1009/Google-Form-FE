import React from 'react';
import './submit-btn.css';

class SubmitBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <button className="SubmitBtn" type="submit" value="submit" >SUBMIT</button>
      </div>
    );
  }
}

export default SubmitBtn;

