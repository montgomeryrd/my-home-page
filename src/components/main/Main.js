import React from 'react';
import robinhood from '../../assets/robinhood.png';
import robintrack from '../../assets/robintrack.svg';
import predictions from '../../assets/predictions.png'
import reddit from '../../assets/reddit.png'
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
                    <a href="https://www.robintrack.net/" rel="noopener noreferrer" target="_blank"><img src={robintrack} alt="robintrack"/> RobinTrack</a>
                </li>
                <li className="links">
                    <a href="https://stockmarketpredictionsdaily.com/" rel="noopener noreferrer" target="_blank"><img src={predictions} alt="Surjit Chhabra's Predictions"/> Surjit Chhabra</a>
                </li>
                <li className="links">
                    <a href="https://www.reddit.com/r/all/" rel="noopener noreferrer" target="_blank"><img src={reddit} alt="reddit"/> Reddit</a>
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