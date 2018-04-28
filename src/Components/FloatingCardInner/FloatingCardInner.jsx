import React from 'react';
import TitleFloatingCardInner from '../TitleFloatingCardInner/TitleFloatingCardInner';
import QuesList from '../QuesList/QuesList';
import './floating-card-inner.css';

class FloatingCardInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formhistory: [],
    };
  }


  render() {
    return (
      <div className="FloatingCardInner">
        <TitleFloatingCardInner onAddClick={() => this.props.onAddClick()} />
        <QuesList createdQues={this.props.createdQues} />
      </div>
    );
  }
}

export default FloatingCardInner;

