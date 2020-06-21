import React, { useState } from 'react';
import GoalsForm from './GoalsForm';

const Goals = (props) => {

    const [form, showForm] = useState(false);
    const toggle = () => showForm(!form);

    const goals = props.goalslist.length ? (
        props.goalslist.map((goal, index) => {
            return (
                <div className="goals-content" unselectable="on" key={index}>
                    <span className="goal">{goal.name}</span>
                    {goal.steps.map((step, position) => {
                        return (
                            <div className="steps" key={position}>
                                {step}
                            </div>
                        )
                    })}                        
                </div>
            )
        })
    ) : ( 
        <span></span>
    )

    return (
        <div className="goals-content-view">
            <h1>goals</h1>
            {form ?
                <div>
                    <span className="toggle-goals-form" onClick={toggle}>hide form</span>
                    <GoalsForm 
                        goalsvalue={props.goalsvalue}
                        stepsvalue={props.stepsvalue}
                        goalslist={props.goalslist}
                        handleGoalsChange={props.handleGoalsChange}
                        handleGoalsStepsChange={props.handleGoalsStepsChange}
                        handleGoalsSubmit={props.handleGoalsSubmit}
                    />
                </div>
            :
                <span className="toggle-goals-form" onClick={toggle}>add goals</span>    
            }
            <div className="goalslist">
                {goals}
            </div>
        </div>
    )
}
export default Goals;