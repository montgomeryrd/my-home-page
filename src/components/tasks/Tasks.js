import React, { useState } from 'react';
import TasksForm from '../tasks/TasksForm';

const Tasks = (props) => {

    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const list = props.taskslist.length ? (
        props.taskslist.map((task, index) => {
            return (
                <div className="tasks-container" unselectable="on" key={index}>
                    <div className="line">
                        {/* <span className="task-complete" style={{opacity : props.complete.includes(task) ? .2 : 1}} onClick={() => {props.completeTask(index)}}> */}
                            <span className="item">{task}</span>
                        {/* </span> */}
                    </div>
                </div>
            )
        })
    ) : ( 
        <div className="tasks-form-container">
            <TasksForm 
                value={props.tasksvalue}
                taskslist={props.taskslist}
                handleChange={props.handleTasksChange}
                handleSubmit={props.handleTasksSubmit}
            />
        </div> 
    )

    return (
        <div className="my-tasks-container">
            <h1 onClick={toggle}>tasks</h1>
            {show ?
                <TasksForm 
                    value={props.tasksvalue}
                    taskslist={props.taskslist}
                    handleChange={props.handleTasksChange}
                    handleSubmit={props.handleTasksSubmit}
                />
            :
                <div>
                </div>
            }
            <div className="my-tasks">
                {list}
            </div>
            {/* <button onClick={props.removeCompletedTasks}>remove</button> */}
        </div>
    )
}
export default Tasks;