import React, { useState } from 'react';
import SavingsForm from './SavingsForm';
import StocksForm from './StocksForm';

const Finances = (props) => {
    const [savings, setSavings] = useState(false);
    const toggleSavings = () => setSavings(!savings);

    const [stonks, setStonks] = useState(false);
    const toggleStonks = () => setStonks(!stonks);

    const savingslist = props.savingslist.length ? (
        props.savingslist.filter((e,i) => i < 3).map((money, index) => {
            return (
                <div className="savings-entry" key={index}>
                    <h5>{money.date} - ${money.value}</h5>
                    <span>current savings: ${money.total}</span>
                </div>
            );
        })
    ) : (
        <div></div>
    );

    const positions = props.stocks.length ? (
        props.stocks.map((stock, index) => {
            return (
                <div className="stocks-entry" key={index}>
                    <h5>{stock.moniker}</h5>
                    <p>{stock.shares}</p>
                    <p>dividend yield: {stock.dividend}</p>
                    <p className="sold" onClick={() => {props.removeStocks(stock.moniker)}}>- stock sold -</p>
                </div>
            )
        })
    ) : (
        <div></div>
    )

    return (
        <div>
            <h1>finances</h1>
            <div className="savings-title">
                <h2>savings:</h2>
                {savings ? <span className="finance-forms" onClick={toggleSavings}>( close form )</span> : <span className="finance-forms" onClick={toggleSavings}>( update savings )</span>}
                {savings ?
                    <SavingsForm 
                        savingsvalue = {props.savingsvalue}
                        totalvalue = {props.totalvalue}
                        savingslist = {props.savingslist}
                        handleSavingsChange = {props.handleSavingsChange} 
                        handleTotalChange = {props.handleTotalChange}
                        handleSavingsSubmit = {props.handleSavingsSubmit}
                    />
                :
                    <div></div>
                }
                <div className="savings-content">{savingslist}</div>
            </div>
            <div className="stocks-title">
                <h2>my stocks:</h2>
                {stonks ? <span className="finance-forms" onClick={toggleStonks}>( close form )</span> : <span className="finance-forms" onClick={toggleStonks}>( manage stocks )</span>}
                {stonks ?
                    <StocksForm 
                        stocksvalue = {props.stocksvalue}
                        sharesvalue = {props.sharesvalue}
                        dividendvalue = {props.dividendvalue}
                        handleStocksChange = {props.handleStocksChange}
                        handleSharesChange = {props.handleSharesChange}
                        handleDividendChange = {props.handleDividendChange}
                        handleStocksSubmit = {props.handleStocksSubmit}
                    />
                :
                    <div></div>
                }
                <div className="stocks-content">{positions}</div>
            </div>
        </div>
    )
}
export default Finances;