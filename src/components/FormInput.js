import React, { useState, useContext } from 'react';
import BillAmountContext from "./BillAmountContext";

const unitConfig = {
    "common": "Amount per consumer",
    "2br": "Total amount to be paid"
};

export function FormInput({ unitType = '' }) {

    const myContext = useContext(BillAmountContext);

    // TODO: What happens when the state is not set to a default value.
    const [bill, setBill] = useState(0);
    const [consumers, setConsumers] = useState(0);

    const deriveAmount = () => {
        if(isNaN(bill) || isNaN(consumers)) return 0;

        const result = bill/consumers;

        if(isNaN(result) || result === Infinity) {
            myContext.setBillAmount(0);
            return 0;
        }

        myContext.setBillAmount(result);

        return result;
    };

    function handleBillChange(e) {
        setBill(Number(e.target.value));
    }

    function handleConsumersChange(e) {
        setConsumers(Number(e.target.value));
    }

    function handleOnBlurBill(e) {
        if (e.target.value === '') setBill(0);
    }

    function handleOnFocusBill(e) {
        const value = Number(e.target.value);
        if (value === 0) setBill('');
    }

    function handleOnBlurConsumers(e) {
        if (e.target.value === '') setConsumers(0);
    }

    function handleOnFocusConsumers(e) {
        const value = Number(e.target.value);
        if (value === 0) setConsumers('');
    }


    return (
        <div className="ui form">
            <div className="inline field">
                <label>Bill</label>
                <div className="ui right labeled input">
                    <input
                        type="number"
                        id="amount"
                        min={0}
                        step={0.01}
                        value={bill}
                        onChange={handleBillChange}
                        onBlur={handleOnBlurBill}
                        onFocus={handleOnFocusBill}
                    />
                    <div className="ui basic label">.00</div>
                </div>
            </div>
            {
                unitType.toLowerCase() === "common" &&
                <div className="inline field">
                    <label>No. of consumers: </label>
                    <input
                        type="number"
                        id="count"
                        min={0}
                        step={1}
                        value={consumers}
                        onChange={handleConsumersChange}
                        onBlur={handleOnBlurConsumers}
                        onFocus={handleOnFocusConsumers}
                    />
                </div>
            }
            <div className="inline field">
                <label>{ unitConfig[unitType.toLowerCase()] }</label>
                <div className="ui right labeled input">
                    <input
                        readOnly
                        value={deriveAmount()} />
                    <div className="ui basic label">.00</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FormInput);
