import React from 'react';

const GoalsForm = (props) => {
    return (
        <div className="goalsform-content">
            <form className="goals-form" onSubmit={props.handleGoalsSubmit}>
                <input
                    id="goal"
                    name="goal"
                    autoComplete="off"
                    value={props.goalsvalue}
                    onChange={props.handleGoalsChange}
                    required={true}
                    placeholder=" Create a Goal"
                />
                <textarea 
                    id="steps" 
                    name="steps" 
                    rows="6" 
                    cols="30"
                    autoComplete="off"
                    value={props.stepsvalue}
                    onChange={props.handleGoalsStepsChange}
                    required={true}
                    placeholder=" Append Goal Steps"
                />
                <button className="form-btn" onSubmit={props.handleGoalsSubmit}>add</button>
            </form>
        </div>
    )
}
export default GoalsForm;