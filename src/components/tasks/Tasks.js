import React, { useState } from 'react';
import TasksForm from '../tasks/TasksForm';

const Tasks = (props) => {

    const [clear, setClear] = useState(false);
    const toggle = () => setClear(!clear);

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
            <h1 onClick={toggle}>tasks</h1>
            {clear && list.length ?
                <div className="clear">
                    <span>empty tasks list?</span>
                    <div className="choice">
                        <span onClick={() => {props.clearAllTasks();toggle()}}>yes</span>
                        <span onClick={toggle}>no</span>
                    </div>
                </div>
            :   
                <div></div>
            }
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