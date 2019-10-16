import React, {Component} from 'react';
import './App.css';
import {MenuButton} from './MenuButton';

const as = document.getElementById('a');
const a1=document.getElementById('three');

class TitlePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className="App">
      <div className="grid-container" >
        <h1 className="itemHead">Stefan Heller</h1>
          <div className="item3" >
      <div className="options">
      <MenuButton text={"about"} href="#about"/>
      <MenuButton text={"resume"} href="#resume"/>
      <MenuButton text={"contact"} href="#about"/>
      </div>
      </div>
    </div>
  </div>);
  }

}

export default TitlePage;
