import React from 'react';
import Background from '../Background/Background';
import FloatingCard from '../FloatingCard/FloatingCard';

import FloatingCardInner from '../FloatingCardInner/FloatingCardInner';
import './create-form.css';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="CreateFormPage">
        <Background />
        <FloatingCard><FloatingCardInner /></FloatingCard>
      </div>
    );
  }
}

export default CreateForm;

