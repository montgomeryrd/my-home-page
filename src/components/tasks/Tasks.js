import React from 'react';
import TasksForm from '../tasks/TasksForm';

const Tasks = (props) => {

    const list = props.taskslist.length ? (
        props.taskslist.map((task, index) => {
            return (
                <div className="tasks-container" unselectable="on" key={index}>
                    <div className="line">
                        <span className="task-complete" style={{opacity : props.complete.includes(index) ? .2 : 1}} onClick={() => {props.completeTask(index)}}>
                            <span className="item">{task}</span>
                        </span>
                    </div>
                </div>
            )
        })
    ) : ( 
        <TasksForm 
            value={props.tasksvalue}
            taskslist={props.taskslist}
            handleChange={props.handleTasksChange}
            handleSubmit={props.handleTasksSubmit}
        />
    )
        
    return (
        <div className="my-tasks-container">
            <h1>tasks</h1>
            <div className="my-tasks">
                {list}
            </div>
            {list.length ?
               <button className="remove" onClick={props.removeCompletedTasks}>remove completed</button>
            :
                <div></div>
            }
        </div>
    )
}
export default Tasks;