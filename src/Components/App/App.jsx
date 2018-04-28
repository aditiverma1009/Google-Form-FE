import React from 'react';
import axios from 'axios';
import CreateForm from '../CreateForm/CreateForm';
import DisplayAllForms from '../DisplayAllForms/DisplayAllForms';
// import DisplayOneForm from '../DisplayOneForm/DisplayOneForm';
import ErrorBox from '../ErrorBox/ErrorBox';
// import Responses from '../Responses/Responses';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      allForms: [],
      createdQues: [],
      page0resp: 0,
      // page1resp: 0,
      // page2resp: 0,
      // page3resp: 0,
    };
  }

  componentDidMount() {
    axios.get('/forms/all')
      .then((response) => {
        console.log(response);
        this.setState({
          allForms: response.data.data,
          page0resp: response.data.code,
        });
        console.log(this.state.allForms);
        console.log(this.state.page0resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onCreateNewForm=() => {
    this.setState({
      page: 1,
    });
  }

  addNewQues=() => {
    const { createdQues } = this.state;
    createdQues.push({
      formId: null,
      questext: null,
      quesisreq: null,
      enum_questions_questype: null,
    });
    this.setState({
      createdQues,
    });
  }

  render() {
    const showError = this.state.page === 0 && (this.state.page0resp === 200 || this.state.page0resp === 201);
    if (showError) {
      return (
        <DisplayAllForms
          allForms={this.state.allForms}
          onAddClick={() => this.onCreateNewForm()}
        />
      );
    } else if (this.state.page === 0) {
      return (
        <div>
          {showError && <ErrorBox />}
          <DisplayAllForms allForms={this.state.allForms} />
        </div>
      );
    } else if (this.state.page === 1) {
      return (
        <CreateForm
          onAddClick={() => this.addNewQues()}
          createdQues={this.state.createdQues}
        />);
    }
    // else if (this.state.page === 1) {
    //   return (<div><ErrorBox /><CreateForm /></div>);
    // }
    // else if (this.state.page === 2 &&
    //    (this.state.page2resp === 200 || this.state.page2resp === 201)) {
    //   return (<DisplayOneForm />);
    // } else if (this.state.page === 2) {
    //   return (<div><ErrorBox /><DisplayOneForm /></div>);
    // } else if (this.state.page === 3 &&
    //   (this.state.page3resp === 200 || this.state.page3resp === 201)) {
    //   return (<Responses />);
    // }

    // return (<div><CreateForm /></div>);
  }
}

export default App;

