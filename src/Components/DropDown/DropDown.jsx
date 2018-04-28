import React from 'react';
import './dropdown.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const EnumType = this.props.enum_questions_questype;
    return (
      <div className="DropDown">
        <select name="questionType">
          <option value="Date" selected={EnumType === 'date'}><i className="material-icons">date_range</i>Date</option>
          <option value="Short answer" selected={EnumType === 'shortans'}><i className="material-icons">short_text</i>Short answer</option>
          <option value="Paragraph" selected={EnumType === 'para'}><i className="material-icons">view_headline</i>Paragraph</option>
        </select>
      </div>
    );
  }
}

export default DropDown;

