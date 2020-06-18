import React from 'react';
import TasksForm from '../tasks/TasksForm';

const Tasks = (props) => {

    // const list = props.taskslist.length ? (
    //     props.taskslist.map((item, index) => {
    //         return (
    //             <div className="item-container" unselectable="on" key={index}>
    //                 <div className="blue-line">
    //                     <span className="item-complete" style={{opacity : props.complete.includes(item) ? .2 : 1}} onClick={() => {props.completeTask(index)}}>
    //                         <span className="item">{item}</span>
    //                     </span>
    //                 </div>
    //             </div>
    //         )
    //     })
    // ) : (
    //     <div className="supplylist-container">
    //         <TasksForm 
    //             value={props.tasksvalue}
    //             taskslist={props.taskslist}
    //             handleChange={props.handleTasksChange}
    //             handleSubmit={props.handleTasksSubmit}
    //         />
    //     </div>
    // )

    return (
        <div>
            <h1>tasks</h1>
            {/* {list} */}
            {/* <button onClick={props.removeCompletedTasks}>remove</button> */}
            <TasksForm />
        </div>
    )
}
export default Tasks;