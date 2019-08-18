import React, { useState } from 'react';
import './App.css';
import {CommonMeter} from "./CommonMeter";
import {TwoBRMeter} from "./TwoBRMeter";
import {OwnerMeter} from "./OwnerMeter";
import {OneBRMeter} from "./OneBRMeter";

import BillAmountContext from './BillAmountContext';

const style = {
    cardDisplay: {
        display: 'flex'
    }
};

function App() {

  const [commonBillAmount, setCommonBillAmount] = useState(0);

  return (
    <div className="App">
      <h2>Bill Dashboard</h2>
      <div style={ style.cardDisplay }>
          <BillAmountContext.Provider value={ { commonBillAmount, setBillAmount: (amount) => setCommonBillAmount(amount) } }>
              <CommonMeter />
              <TwoBRMeter />
        {/*<OwnerMeter />*/}
        {/*<OneBRMeter />*/}
          </BillAmountContext.Provider>
      </div>
    </div>
  );
}

export default App;
