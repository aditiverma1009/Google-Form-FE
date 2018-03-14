import React from 'react';
import QuestionContainerTop from '../QuestionContainerTop/QuestionContainerTop';
import QuestionContainerBottom from '../QuestionContainerBottom/QuestionContainerBottom';
import './question-container.css';

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="QuestionContainer">
        <QuestionContainerTop />
        <QuestionContainerBottom />
      </div>
    );
  }
}

export default QuestionContainer;

