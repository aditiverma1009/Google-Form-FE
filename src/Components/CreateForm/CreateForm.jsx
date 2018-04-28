import React from 'react';
import BackgroundTop from '../BackgroundTop/BackgroundTop';
import BackgroundBottom from '../BackgroundBottom/BackgroundBottom';
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
        <BackgroundTop />
        <BackgroundBottom />
        <FloatingCard>
          <FloatingCardInner onAddClick={() => this.props.onAddClick()} createdQues={this.props.createdQues} />
        </FloatingCard>
      </div>
    );
  }
}

export default CreateForm;

