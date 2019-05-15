import React from 'react';
import master from './master.png';
import visa from './visa.png';
import chips from './chips.png';
import './App.css';

class Header extends React.Component {
  render() { return ( <h2 className="header" ><strong>CREDIT CARD</strong></h2> );}
}
class Chips extends React.Component {
  render() { return (  <img src={chips} className="chips" alt="chips"/> );}
}
class Logos extends React.Component {
  render() { return ( 
  <div class="logos">
    <img src={master} alt="masterCard" height="47" width="75"/>
    <img src={visa} alt="visaCard" height="50" width="75"/>
  </div>
   );}
}
class Number extends React.Component {
  render() { return (  <p className="number" > 7253 3256 7895 1245</p> ); }
}
class Expiration extends React.Component {
  render() { return (  
  <div class="exp-date-wrapper">
    <div class="left-label upper-labels">VALID THRU</div>
    <div class="exp-date">
        <div class="upper-labels">MONTH/YEAR</div>
        <div class="date" title="01/17">01/17</div>
    </div>
  </div> ); }
}
class Row extends React.Component {
  render() { return (  
    <div>
      <div className="row-card">
          <p className="secret-number"> 5422</p>
          <Expiration/>
      </div>
      <p className="last">CARDHOLDER</p>
    </div>
  
   ); }
}

function App() {
  return (
    <div className="card"><Header/><Chips/><Number/><div class="data-card"><Row/><Logos/></div></div>
  );
}

export default App;
