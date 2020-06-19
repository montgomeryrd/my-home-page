import React from 'react';

const TasksForm = (props) => {
    return (
        <div className="tasksform-content">
            <form className="tasks-form" onSubmit={props.handleSubmit}>
            <textarea 
                id="tasks" 
                name="tasks-list" 
                rows="6" 
                cols="25"
                autoComplete="off"
                value={props.value}
                onChange={props.handleChange}
                required={true}
                placeholder="What is today's agenda?"
            />
            <button className="tasks-form-btn" onSubmit={props.handleSubmit}>add</button>
            </form>
        </div>
    )
}
export default TasksForm;