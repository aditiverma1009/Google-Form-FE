import React from 'react';
import './title-input-field.css';

class TitleInputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (

      <input className="TitleInputField" type="text" placeholder="Untitled Form" />

    );
  }
}

export default TitleInputField;

