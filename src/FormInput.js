import React, { useState } from 'react';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        display: 'flex'
    }
}

export function FormInput() {
    const [billAmount, setBillAmount] = useState(0);
    const [consumersCount, setConsumersCount] = useState(0);

    const deriveAmount = () => {
        if(isNaN(billAmount) || isNaN(consumersCount)) return 0;

        const result = billAmount/consumersCount;

        return (isNaN(result) || result === Infinity) ? 0 : result;
    };

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
                        value={billAmount}
                        onChange={(e) => setBillAmount(e.target.value)} />
                    <div className="ui basic label">.00</div>
                </div>
            </div>
            <div className="inline field">
                <label>No. of consumers: </label>
                <input
                    type="number"
                    id="count"
                    min={0}
                    step={1}
                    value={consumersCount}
                    onChange={(e) => setConsumersCount(e.target.value)} />
            </div>
            <div className="inline field">
                <label>Amount per consumer: </label>
                <input
                    readOnly
                    value={deriveAmount()} />
            </div>
        </div>
    )
}
