import React from 'react';
import BackgroundTop from '../BackgroundTop/BackgroundTop';
import BackgroundBottom from '../BackgroundBottom/BackgroundBottom';
import FloatingCard from '../FloatingCard/FloatingCard';
import FloatingCardOneForm from '../FloatingCardOneForm/FloatingCardOneForm';
import './display-one-form.css';

class DisplayOneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="DisplayAllForms">
        <BackgroundTop />
        <BackgroundBottom />
        <FloatingCard><FloatingCardOneForm /></FloatingCard>

      </div>
    );
  }
}

export default DisplayOneForm;

