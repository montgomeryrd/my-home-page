import React, { useState } from 'react';

const Workouts = (props) => {
    // const [highlight, setHighlight] = useState(false);
    // const toggle = () => setHighlight(!highlight);
    const [highlight1, setHighlight1] = useState("lame");
    const [highlight2, setHighlight2] = useState("lame");
    const [highlight3, setHighlight3] = useState("lame");
    const [highlight4, setHighlight4] = useState("lame");
    const [highlight5, setHighlight5] = useState("lame");

    return (
        <div className="workouts-view">
            <h1>workouts (during covid)</h1>
            <div className="exercises">
                <div className={highlight1} onClick={() => {highlight1 === "lame" ? setHighlight1("highlighted") : setHighlight1("lame")}}>
                    <h2>Chest Day</h2>
                    <table>
                        <tr>
                            <td>Bench Press : 5 x 5</td>
                        </tr>
                        <tr>
                            <td>Incline Bench Press : 4 x 8</td>
                        </tr>
                    </table>
                </div>
                <div className={highlight2} onClick={() => {highlight2 === "lame" ? setHighlight2("highlighted") : setHighlight2("lame")}}>
                    <h2>Back Day</h2>
                    <table>
                        <tr>
                            <td>Wide Grip Pullups : 4 x 8</td>
                        </tr>
                        <tr>
                            <td>Narrow Grip Pullups : 4 x 8</td>
                        </tr>
                        <tr>
                            <td>Bent Over Rows : 4 x 8</td>
                        </tr>
                    </table>
                </div>
                <div className={highlight3} onClick={() => {highlight3 === "lame" ? setHighlight3("highlighted") : setHighlight3("lame")}}>
                    <h2>Shoulder Day</h2>
                    <table>
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
                    </table>
                </div>
                <div className={highlight4} onClick={() => {highlight4 === "lame" ? setHighlight4("highlighted") : setHighlight4("lame")}}>
                    <h2>Arms Day</h2>
                    <table>
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
                    </table>
                </div>
                <div className={highlight5} onClick={() => {highlight5 === "lame" ? setHighlight5("highlighted") : setHighlight5("lame")}}>
                    <h2>Legs Day</h2>
                    <table>
                        <tr>
                            <td>Deep Squats : 4 x 8</td>
                        </tr>
                        <tr>
                            <td>Sumo Lifts : 4 x 10</td>
                        </tr>
                        <tr>
                            <td>Calf Raises : 4 x 12</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Workouts;