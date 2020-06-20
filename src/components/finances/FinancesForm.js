import React from 'react';

const FinancesForm = (props) => {
    return (
        <div className="tasksform-content">
            <form className="tasks-form" onSubmit={props.handleSubmit}>
                <textarea 
                    id="tasks" 
                    name="tasks-list" 
                    rows="1" 
                    cols="30"
                    autoComplete="off"
                    value={props.value}
                    onChange={props.handleChange}
                    required={true}
                    placeholder="savings updates"
                />
                <button className="tasks-form-btn" onSubmit={props.handleSubmit}>add</button>
            </form>
        </div>
    )
}
export default FinancesForm;