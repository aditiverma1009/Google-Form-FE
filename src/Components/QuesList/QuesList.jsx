import React from 'react';
import QuestionContainer from '../QuestionContainer/QuestionContainer';
import './ques-list.css';

class QuesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <QuestionContainer />
      </div>
    );
  }
}

export default QuesList;

