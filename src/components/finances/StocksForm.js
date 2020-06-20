import React from 'react';

const StocksForm = (props) => {
    return (
        <div className="tasksform-content">
            <form className="tasks-form" onSubmit={props.handleSubmit}>
                <input
                    id="stocks"
                    name="stocks"
                    autoComplete="off"
                    value={props.sidebartitle}
                    onChange={props.handleSidebarTitleChange}
                    required={true}
                    placeholder="stock moniker"
                />
                <textarea 
                    id="tasks" 
                    name="tasks-list" 
                    rows="6" 
                    cols="30"
                    autoComplete="off"
                    value={props.value}
                    onChange={props.handleChange}
                    required={true}
                    placeholder="stock data"
                />
                <button className="tasks-form-btn" onSubmit={props.handleSubmit}>add</button>
            </form>
        </div>
    )
}
export default StocksForm;