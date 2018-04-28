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
    const { allForms } = this.props;
    console.log('hi', allForms);
    const allBoxes = allForms.map(step => (
      <FormBox id={step.id} formtitle={step.formtitle} />
    ));
    return (
      <div className="FormList">
        {allBoxes}
      </div>
    );
  }
}

export default FormList;

