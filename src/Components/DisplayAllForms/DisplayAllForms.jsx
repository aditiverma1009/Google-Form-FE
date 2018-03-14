import React from 'react';
import AddBtn from '../AddBtn/AddBtn';
import BackgroundTop from '../BackgroundTop/BackgroundTop';
import BackgroundBottom from '../BackgroundBottom/BackgroundBottom';
import FormList from '../FormList/FormList';
import './display-all-forms.css';

class DisplayAllForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="DisplayAllForms">
        <BackgroundTop>
          <AddBtn />
          <span>CREATE FORM </span>
        </BackgroundTop>
        <BackgroundBottom>
          <p className="available-forms">AVAILBLE FORMS</p>
          <FormList />
        </BackgroundBottom>

      </div>
    );
  }
}

export default DisplayAllForms;

