import React from 'react';

const StocksForm = (props) => {
    return (
        <div className="stocks-form-content">
            <form className="stocks-form" onSubmit={props.handleStocksSubmit}>
                <input
                    id="stock"
                    name="stock"
                    autoComplete="off"
                    value={props.stocksvalue}
                    onChange={props.handleStocksChange}
                    required={true}
                    placeholder="add stock"
                />
                <textarea
                    id="stock-info"
                    name="stockinfo"
                    rows="3"
                    autoComplete="off"
                    value={props.stocksinfovalue}
                    onChange={props.handleStocksInfoChange}
                    required={true}
                    placeholder="stock info"
                />
                <button className="form-btn" onSubmit={props.handleStocksSubmit}>add</button>
            </form>
        </div>
    )
}
export default StocksForm;