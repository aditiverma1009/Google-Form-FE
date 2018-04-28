import React from 'react';
import './input-field.css';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (

      <input className="InputField" type="text" placeholder="Untitled Form" value={this.props.questext} />

    );
  }
}

export default InputField;

