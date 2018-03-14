import React from 'react';
import Background from '../Background/Background';
import FloatingCard from '../FloatingCard/FloatingCard';
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
        <FloatingCard />
      </div>
    );
  }
}

export default CreateForm;

