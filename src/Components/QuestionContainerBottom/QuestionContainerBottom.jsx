import React from 'react';
import './question-container-bottom.css';

class QuestionContainerBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <i className="material-icons">delete</i>
        <form>
          <input type="checkbox" name="vehicle" value="Bike" />
          <span>Required</span>
        </form>
      </div>
    );
  }
}

export default QuestionContainerBottom;

