import React from 'react';
import InputField from '../InputField/InputField';
import DropDown from '../DropDown/DropDown';
import './question-container-top.css';

class QuestionContainerTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="QuestionContainerTop">
        <InputField />
        <DropDown />
      </div>
    );
  }
}

export default QuestionContainerTop;

