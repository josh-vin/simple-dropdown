import React from 'react';
import './App.css';
import DropDown from './DropDown.js'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class  App extends React.Component {
  state = {
    numChildren: 2
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }

  onSubtractChild = () => {
    this.setState({
      numChildren: this.state.numChildren - 1
    });
  }

  render () {
    const dropdowns = [];
    for(var i = 0; i < this.state.numChildren; i +=1) {
      dropdowns.push(<DropDown key={i} number={i} />);
    }
    return (
      <div className="App">
        <h1>Homework Grading Calculations</h1>
          {dropdowns}
        <Button variant="secondary" onClick={this.onSubtractChild} style={{margin: "5px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
        </svg>
        </Button> 
        <Button variant="secondary" onClick={this.onAddChild} style={{margin: "5px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
        </Button>
      </div>
    )
  }

}

export default App;
