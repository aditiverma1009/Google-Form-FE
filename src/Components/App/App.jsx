import React from 'react';
// import CreateForm from '../CreateForm/CreateForm';
// import DisplayAllForms from '../DisplayAllForms/DisplayAllForms';
// import DisplayOneForm from '../DisplayOneForm/DisplayOneForm';
// import ErrorBox from '../ErrorBox/ErrorBox';
import Responses from '../Responses/Responses';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // page: 0,
      // page0resp: 0,
      // page1resp: 0,
      // page2resp: 0,
      // page3resp: 0,
    };
  }


  render() {
    // if (this.state.page === 0 && (this.state.page0resp === 200 || this.state.page0resp)) {
    //   return (<DisplayAllForms />);
    // } else if (this.state.page === 0) {
    //   return (<div><ErrorBox /><DisplayAllForms /></div>);
    // } else if (this.state.page === 1 &&
    //    (this.state.page1resp === 200 || this.state.page1resp === 201)) {
    //   return (<CreateForm />);
    // } else if (this.state.page === 1) {
    //   return (<div><ErrorBox /><CreateForm /></div>);
    // } else if (this.state.page === 2 &&
    //    (this.state.page2resp === 200 || this.state.page2resp === 201)) {
    //   return (<DisplayOneForm />);
    // } else if (this.state.page === 2) {
    //   return (<div><ErrorBox /><DisplayOneForm /></div>);
    // } else if (this.state.page === 3 &&
    //   (this.state.page3resp === 200 || this.state.page3resp === 201)) {
    //   return (<Responses />);
    // }

    return (<div><Responses /></div>);
  }
}

export default App;

