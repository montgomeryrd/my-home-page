import React from 'react';
import robinhood from '../../assets/robinhood.png';
import webull from '../../assets/webull.png';
import wsb from '../../assets/wsb.jpg';
import predictions from '../../assets/predictions.png';
import tradingview from '../../assets/tradingview.png';
import options from '../../assets/options.png';
import codecademy from '../../assets/codecademy.png';
import github from '../../assets/github.png';

const Main = (props) => {
    return (
        <div className="main-content">
            <ul>
                <li className="links">
                    <a href="https://robinhood.com/" rel="noopener noreferrer" target="_blank"><img src={robinhood} alt="robinhood"/> Robinhood</a>
                </li>
                <li className="links">
                    <a href="https://www.webull.com/center" rel="noopener noreferrer" target="_blank"><img src={webull} alt="webull"/> WeBull</a>
                </li>
                <li className="links">
                    <a href="https://www.reddit.com/r/wallstreetbets/" rel="noopener noreferrer" target="_blank"><img src={wsb} alt="wallstreetbets"/> WallStreetBets</a>
                </li>
                <li className="links">
                    <a href="https://stockmarketpredictionsdaily.com/" rel="noopener noreferrer" target="_blank"><img src={predictions} alt="Surjit Chhabra's Predictions"/> Surjit Chhabra</a>
                </li>
                <li className="links">
                    <a href="https://tradingview.com/" rel="noopener noreferrer" target="_blank"><img src={tradingview} alt="TradingView"/> TradingView</a>
                </li>
                <li className="links">
                    <a href="https://www.optionsprofitcalculator.com/" rel="noopener noreferrer" target="_blank"><img src={options} alt="options profit calculator"/> Options Calc.</a>
                </li>
                <li className="links">
                    <a href="https://www.codecademy.com/learn" rel="noopener noreferrer" target="_blank"><img src={codecademy} alt="codecademy"/> Codecademy</a>
                </li>
                <li className="links">
                    <a href="https://github.com/montgomeryrd" rel="noopener noreferrer" target="_blank"><img src={github} alt="github"/> Github</a>
                </li>
            </ul>
        </div>
    )
}
export default Main;