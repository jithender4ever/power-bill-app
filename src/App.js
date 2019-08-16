import React from 'react';
import './App.css';
import {CommonMeter} from "./CommonMeter";
import {TwoBRMeter} from "./TwoBRMeter";
import {OwnerMeter} from "./OwnerMeter";
import {OneBRMeter} from "./OneBRMeter";

const style = {
  cardDisplay: {
    display: 'flex'
  }
};

function App() {
  return (
    <div className="App">
      <h2>Bill Dashboard</h2>
      <div style={ style.cardDisplay }>
        <CommonMeter />
        {/*<TwoBRMeter />*/}
        {/*<OwnerMeter />*/}
        {/*<OneBRMeter />*/}
      </div>
    </div>
  );
}

export default App;
