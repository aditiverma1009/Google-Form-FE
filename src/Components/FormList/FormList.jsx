import React from 'react';
import FormBox from '../FormBox/FormBox';
import './form-list.css';

class FormList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="FormList">
        <FormBox />
      </div>
    );
  }
}

export default FormList;

