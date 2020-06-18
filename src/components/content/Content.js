import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Coding from '../coding/Coding';
import Workouts from '../workouts/Workouts';
import Finances from '../finances/Finances';
import Tasks from '../tasks/Tasks';
import Goals from '../goals/Goals';

import coding from '../../assets/coding.png';
import workouts from '../../assets/workouts.png';
import finances from '../../assets/finances.png';
import tasks from '../../assets/tasks.png';
import goals from '../../assets/goals.png';

const Content = (props) => {
    return (
        <div className="content-view">
            <Router>
                <div className="navigation-bar-container">
                    <NavLink to="/coding" style={{textDecoration: 'none'}}>
                        <img src={coding} alt="coding"/>
                    </NavLink>
                    <NavLink to="/workouts" style={{textDecoration: 'none'}}>
                        <img src={workouts} alt="workouts"/>
                    </NavLink>
                    <NavLink to="/finances" style={{textDecoration: 'none'}}>
                        <img src={finances} alt="finances"/>
                    </NavLink>
                    <NavLink to="/tasks" style={{textDecoration: 'none'}}>
                        <img src={tasks} alt="tasks"/>
                    </NavLink>
                    <NavLink to="/goals" style={{textDecoration: 'none'}}>
                        <img src={goals} alt="goals"/>
                    </NavLink>
                </div>
                <div className="content">
                    <Route path="/coding" render={props =>
                        (<Coding

                        />)
                    }/>
                    <Route path="/workouts" render={props =>
                        (<Workouts
                        
                        />)
                    }/>
                    <Route path="/finances" render={props =>
                        (<Finances
                        
                        />)
                    }/>
                    <Route path="/tasks" render={props =>
                        (<Tasks
                        
                        />)
                    }/>
                    <Route path="/goals" render={props =>
                        (<Goals
                        
                        />)
                    }/>
                </div>
            </Router>
            <div>

            </div>
        </div>
    )
}
export default Content;