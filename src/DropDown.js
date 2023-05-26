import React, { Component } from 'react';
import Select from 'react-select';
import $ from 'jquery';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: { value: 7, label: 7},
            options: [],
            rows: []
        };
    }

  createComboBox() {
    let items = [];
    for (let i = 5; i <= 40; i++) {
      items.push({ value: i, label: i});
    }
    items.push({value: 60, label: 60});
    this.setState({options: items});
  }
  onDropdownSelected = e => {
    console.log(e);
    this.setState({selected: {value: e.value, label: e.label}});
    this.createTableRows();
    let items = [];
    for (let i = 1; i <= e.value; i++) {
      items.push({ value: i, percent: parseFloat((i/e.value)*100).toFixed(2)+"%"});
    }
    this.setState({rows: items});
  }

  createTableRows() {
    let items = [];
    for (let i = 1; i <= this.state.selected.value; i++) {
      items.push({ value: i, percent: parseFloat((i/this.state.selected.value)*100).toFixed(2)+"%"});
    }
    this.setState({rows: items});
  }

  componentDidMount() {
    this.createComboBox();
    this.createTableRows(this.state.selected.value);
    console.log($('#numberDrop').find('input'));
    $('#numberDrop').find('input').get(0).setAttribute('pattern', '[0-9]*');
    $('#numberDrop').find('input').get(0).setAttribute('inputmode', 'numeric');
  }

  render() {
    return (
      <div>
        <Select 
          className="normal-text" 
          onChange={this.onDropdownSelected} 
          value={this.state.selected} 
          options={this.state.options}
          id="numberDrop"
          theme={(theme)=>({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary: 'black',
            }
            })
          }
        />
        <br/> <br/>
        <table className="normal-text">
            <thead>
              <tr>
                  <th>Number</th>
                  <th>Percent %</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rows.map(({value, percent}) => (
                <tr key={value}>
                    <td>{value}</td>
                    <td>{percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    );
  }
}

export default DropDown;
