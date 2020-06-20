import React from 'react';

const Workouts = (props) => {

    return (
        <div className="workouts-view">
            <h1 onClick={props.refreshWorkouts}>workouts (during covid)</h1>
            <div className="exercises">
                <div className={props.chest} onClick={() => {props.changeDivName("chest")}}>
                    <h2>Chest Day</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Bench Press : 5 x 5</td>
                            </tr>
                            <tr>
                                <td>Incline Bench Press : 4 x 8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={props.back} onClick={() => {props.changeDivName("back")}}>
                    <h2>Back Day</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Wide Grip Pullups : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Narrow Grip Pullups : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Bent Over Rows : 4 x 8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={props.shoulders} onClick={() => {props.changeDivName("shoulders")}}>
                    <h2>Shoulder Day</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Overhead Press : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Side Raises : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Front Plate Raise : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Reverse Trap Raise : 4 x 12</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={props.arms} onClick={() => {props.changeDivName("arms")}}>
                    <h2>Arms Day</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>EZ Bar Curls : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Wide Grip Curls : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Dumbbell Curls : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>SkullCrushers : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Dips : 4 x 30</td>
                            </tr>
                            <tr>
                                <td>Military Pushups : 100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={props.legs} onClick={() => {props.changeDivName("legs")}}>
                    <h2>Legs Day</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Deep Squats : 4 x 8</td>
                            </tr>
                            <tr>
                                <td>Sumo Lifts : 4 x 10</td>
                            </tr>
                            <tr>
                                <td>Calf Raises : 4 x 12</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Workouts;