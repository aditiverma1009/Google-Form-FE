import React from 'react';
import QuestionContainer from '../QuestionContainer/QuestionContainer';
import './ques-ans.css';

class QuesAns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="QuesAns">
        <p>ques</p>
        <p>ans</p>
      </div>
    );
  }
}

export default QuesAns;

