import React from 'react';

const TasksForm = (props) => {
    return (
        <div className="sidebarform-content">
            <form className="sidebar-form" onSubmit={props.handleSubmit}>
            <textarea 
                id="tasks" 
                name="tasks-list" 
                rows="6" 
                cols="25"
                autoComplete="off"
                value={props.value}
                onChange={props.handleChange}
                required={true}
                placeholder="What do you need to do today?"
            />
            <button className="sidebar-form-btn" onSubmit={props.handleSubmit}>add</button>
            </form>
        </div>
    )
}
export default TasksForm;