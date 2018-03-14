import React from 'react';
import FormCard from '../FormCard/FormCard';
import './form-box.css';

class FormBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="FormBox">
        <FormCard />
        <p className="ResponsesText">Responses</p>
      </div>
    );
  }
}
export default FormBox;

