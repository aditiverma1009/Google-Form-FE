import React from 'react';
import TitleInputField from '../TitleInputField/TitleInputField';
import QuesAns from '../QuesAns/QuesAns';
import './floating-card-one-form.css';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

class FloatingCardOneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="FloatingCardOneForm">
        <TitleInputField />
        <QuesAns />
        <SubmitBtn />
      </div>
    );
  }
}

export default FloatingCardOneForm;

