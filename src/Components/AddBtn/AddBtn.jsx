import React from 'react';
import './add-btn.css';

class AddBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <i
        className="AddBtn material-icons"
        onClick={() => this.props.onAddClick()}
      >
      &#xE3BA;
      </i>
    );
  }
}

export default AddBtn;

