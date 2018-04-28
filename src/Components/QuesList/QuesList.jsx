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
    const { createdQues } = this.props;
    const questionList = createdQues.map(step => (
      <QuestionContainer
        questext={step.questext}
        quesisreq={step.quesisreq}
        enum_questions_questype={step.enum_questions_questype}
      />));
    return (
      <div className="QuestionList">
        {questionList}
      </div>
    );
  }
}

export default QuesList;

