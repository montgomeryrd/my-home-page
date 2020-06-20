import React, { useState } from 'react';

const Finances = (props) => {
    const [savings, setSavings] = useState(false);
    const toggleSavings = () => setSavings(!savings);

    const [stocks, setStocks] = useState(false);
    const toggleStocks = () => setStocks(!stocks);

    return (
        <div>
            <h1>finances</h1>
            <div>
                <h2>savings:</h2>
                <span onClick={toggleSavings}>update savings</span>
            </div>
            <div>
                <h3>stocks:</h3>
                <span onClick={toggleStocks}>manage stocks</span>
            </div>
        </div>
    )
}
export default Finances;