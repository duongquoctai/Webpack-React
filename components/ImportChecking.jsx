import React from 'react';
import { createStore } from "redux"; 
import reducer from "../reducers"
const store = createStore(reducer);

class ImportChecking extends React.Component {
  componentDidMount() {
    console.log(store.getState());
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked
    });
  }
  render() {
    return <div className="import-checking"><button className="jsx-babel" onClick={() => this.onClicked()}>Checking Import</button></div>;
  }
}

export default ImportChecking;