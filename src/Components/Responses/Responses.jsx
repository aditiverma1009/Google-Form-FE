import React from 'react';
import BackgroundTop from '../BackgroundTop/BackgroundTop';
import BackgroundBottom from '../BackgroundBottom/BackgroundBottom';
import FloatingCard from '../FloatingCard/FloatingCard';

import ResponsesCard from '../ResponsesCard/ResponsesCard';
import './responses.css';

class Responses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="Responses">
        <BackgroundTop />
        <BackgroundBottom />
        <FloatingCard><ResponsesCard /></FloatingCard>
      </div>
    );
  }
}

export default Responses;

