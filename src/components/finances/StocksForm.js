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
                <input
                    id="shares"
                    name="shares"
                    autoComplete="off"
                    value={props.sharesvalue}
                    onChange={props.handleSharesChange}
                    required={true}
                    placeholder="total shares at $"
                />
                <input
                    id="dividend"
                    name="dividend"
                    autoComplete="off"
                    value={props.dividendvalue}
                    onChange={props.handleDividendChange}
                    required={true}
                    placeholder="dividend yield"
                />
                <button className="form-btn" onSubmit={props.handleStocksSubmit}>add</button>
            </form>
        </div>
    )
}
export default StocksForm;