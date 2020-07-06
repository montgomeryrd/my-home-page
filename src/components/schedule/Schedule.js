import React from 'react';

const Schedule = (props) => {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = week[new Date().getDay()];
    const divStyle1 = {
        marginTop: '5px',
        borderRadius: '2mm',
        border: '.3px solid #2F80ED',
        transition: '700ms',
        cursor: 'pointer',
    }
    const divStyle2 = {
        marginTop: '5px',
        border: '.3px solid #C00A56',
        transition: '700ms',
        cursor: 'pointer',
        opacity: '.3'
    }
    const sunday = 
        <div>
            <h1>sunday's schedule</h1>
            <ul>
                <div onClick={() => {props.onComplete('8')}} style={props.eight ? divStyle1 : divStyle2}>
                    <li className="head">8am water</li>
                    <li className="sub">brush teeth</li>
                    <li className="sub">view stocks portfolio</li>
                    <li className="sub">kendall report</li>
                    <li className="sub">codecademy coursework</li>
                </div>
                <div onClick={() => {props.onComplete('9')}} style={props.nine ? divStyle1 : divStyle2}>
                    <li className="head">9am water</li>    
                    <li className="sub">breakfast</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('11')}} style={props.eleven ? divStyle1 : divStyle2}>
                    <li className="head">11am water</li>  
                </div>
                <div onClick={() => {props.onComplete('12')}} style={props.twelve ? divStyle1 : divStyle2}>
                    <li className="head">12pm water</li>    
                    <li className="sub">lunch</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('14')}} style={props.fourteen ? divStyle1 : divStyle2}>
                    <li className="head">2pm water</li>    
                    <li className="sub">workout</li>
                    <li className="sub">protein shake</li>
                    <li className="sub">chores</li>
                </div>
                <div onClick={() => {props.onComplete('16')}} style={props.sixteen ? divStyle1 : divStyle2}>
                    <li className="head">4pm water</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('18')}} style={props.eighteen ? divStyle1 : divStyle2}>
                    <li className="head">6pm water</li>  
                    <li className="sub">dinner</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('20')}} style={props.twenty ? divStyle1 : divStyle2}>
                    <li className="head">8pm water</li>
                    <li className="sub">vitamins</li>  
                    <li className="sub">shower</li>
                    <li className="sub">brush teeth</li>  
                    <li className="sub">Netflix with Jaci</li>  
                </div>
                <div onClick={() => {props.onComplete('23')}} style={props.twentyThree ? divStyle1 : divStyle2}>
                    <li className="head">11pm water</li>
                    <li className="sub">sleep</li>  
                </div>
            </ul>
        </div>,
        monday =
        <div>
            <h1>monday's schedule</h1>
            <ul>
                <div onClick={() => {props.onComplete('8')}} style={props.eight ? divStyle1 : divStyle2}>
                    <li className="head">8am water</li>
                    <li className="sub">brush teeth</li>
                    <li className="sub">view stocks portfolio</li>
                    <li className="sub">kendall report</li>
                    <li className="sub">codecademy coursework</li>
                </div>
                <div onClick={() => {props.onComplete('9')}} style={props.nine ? divStyle1 : divStyle2}>
                    <li className="head">9am water</li>    
                    <li className="sub">breakfast</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('11')}} style={props.eleven ? divStyle1 : divStyle2}>
                    <li className="head">11am water</li>  
                </div>
                <div onClick={() => {props.onComplete('12')}} style={props.twelve ? divStyle1 : divStyle2}>
                    <li className="head">12pm water</li>    
                    <li className="sub">lunch</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('14')}} style={props.fourteen ? divStyle1 : divStyle2}>
                    <li className="head">2pm water</li>    
                    <li className="sub">workout</li>
                    <li className="sub">protein shake</li>
                    <li className="sub">chores</li>
                </div>
                <div onClick={() => {props.onComplete('16')}} style={props.sixteen ? divStyle1 : divStyle2}>
                    <li className="head">4pm water</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('18')}} style={props.eighteen ? divStyle1 : divStyle2}>
                    <li className="head">6pm water</li>  
                    <li className="sub">dinner</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('20')}} style={props.twenty ? divStyle1 : divStyle2}>
                    <li className="head">8pm water</li>
                    <li className="sub">vitamins</li>  
                    <li className="sub">shower</li>
                    <li className="sub">brush teeth</li>  
                    <li className="sub">Netflix with Jaci</li>  
                </div>
                <div onClick={() => {props.onComplete('23')}} style={props.twentyThree ? divStyle1 : divStyle2}>
                    <li className="head">11pm water</li>
                    <li className="sub">sleep</li>  
                </div>
            </ul>
        </div>,
        tuesday = 
        <div>
            <h1>tuesday's schedule</h1>
            <ul>
                <div onClick={() => {props.onComplete('8')}} style={props.eight ? divStyle1 : divStyle2}>
                    <li className="head">8am water</li>
                    <li className="sub">brush teeth</li>
                    <li className="sub">view stocks portfolio</li>
                    <li className="sub">kendall report</li>
                    <li className="sub">codecademy coursework</li>
                </div>
                <div onClick={() => {props.onComplete('9')}} style={props.nine ? divStyle1 : divStyle2}>
                    <li className="head">9am water</li>    
                    <li className="sub">breakfast</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('11')}} style={props.eleven ? divStyle1 : divStyle2}>
                    <li className="head">11am water</li>  
                </div>
                <div onClick={() => {props.onComplete('12')}} style={props.twelve ? divStyle1 : divStyle2}>
                    <li className="head">12pm water</li>    
                    <li className="sub">lunch</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('14')}} style={props.fourteen ? divStyle1 : divStyle2}>
                    <li className="head">2pm water</li>    
                    <li className="sub">workout</li>
                    <li className="sub">protein shake</li>
                    <li className="sub">chores</li>
                </div>
                <div onClick={() => {props.onComplete('16')}} style={props.sixteen ? divStyle1 : divStyle2}>
                    <li className="head">4pm water</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('18')}} style={props.eighteen ? divStyle1 : divStyle2}>
                    <li className="head">6pm water</li>  
                    <li className="sub">dinner</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('20')}} style={props.twenty ? divStyle1 : divStyle2}>
                    <li className="head">8pm water</li>
                    <li className="sub">vitamins</li>  
                    <li className="sub">shower</li>
                    <li className="sub">brush teeth</li>  
                    <li className="sub">Netflix with Jaci</li>  
                </div>
                <div onClick={() => {props.onComplete('23')}} style={props.twentyThree ? divStyle1 : divStyle2}>
                    <li className="head">11pm water</li>
                    <li className="sub">sleep</li>  
                </div>
            </ul>
        </div>,
        wednesday = 
        <div>
            <h1>wednesday's schedule</h1>
            <ul>
                <div onClick={() => {props.onComplete('8')}} style={props.eight ? divStyle1 : divStyle2}>
                    <li className="head">8am water</li>
                    <li className="sub">brush teeth</li>
                    <li className="sub">view stocks portfolio</li>
                    <li className="sub">kendall report</li>
                    <li className="sub">codecademy coursework</li>
                </div>
                <div onClick={() => {props.onComplete('9')}} style={props.nine ? divStyle1 : divStyle2}>
                    <li className="head">9am water</li>    
                    <li className="sub">breakfast</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('11')}} style={props.eleven ? divStyle1 : divStyle2}>
                    <li className="head">11am water</li>  
                </div>
                <div onClick={() => {props.onComplete('12')}} style={props.twelve ? divStyle1 : divStyle2}>
                    <li className="head">12pm water</li>    
                    <li className="sub">lunch</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('14')}} style={props.fourteen ? divStyle1 : divStyle2}>
                    <li className="head">2pm water</li>    
                    <li className="sub">workout</li>
                    <li className="sub">protein shake</li>
                    <li className="sub">chores</li>
                </div>
                <div onClick={() => {props.onComplete('16')}} style={props.sixteen ? divStyle1 : divStyle2}>
                    <li className="head">4pm water</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('18')}} style={props.eighteen ? divStyle1 : divStyle2}>
                    <li className="head">6pm water</li>  
                    <li className="sub">dinner</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('20')}} style={props.twenty ? divStyle1 : divStyle2}>
                    <li className="head">8pm water</li>
                    <li className="sub">vitamins</li>  
                    <li className="sub">shower</li>
                    <li className="sub">brush teeth</li>  
                    <li className="sub">Netflix with Jaci</li>  
                </div>
                <div onClick={() => {props.onComplete('23')}} style={props.twentyThree ? divStyle1 : divStyle2}>
                    <li className="head">11pm water</li>
                    <li className="sub">sleep</li>  
                </div>
            </ul>
        </div>,
        thursday =
        <div>
            <h1>thursday's schedule</h1>
            <ul>
                <div onClick={() => {props.onComplete('8')}} style={props.eight ? divStyle1 : divStyle2}>
                    <li className="head">8am water</li>
                    <li className="sub">brush teeth</li>
                    <li className="sub">view stocks portfolio</li>
                    <li className="sub">kendall report</li>
                    <li className="sub">codecademy coursework</li>
                </div>
                <div onClick={() => {props.onComplete('9')}} style={props.nine ? divStyle1 : divStyle2}>
                    <li className="head">9am water</li>    
                    <li className="sub">breakfast</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('11')}} style={props.eleven ? divStyle1 : divStyle2}>
                    <li className="head">11am water</li>  
                </div>
                <div onClick={() => {props.onComplete('12')}} style={props.twelve ? divStyle1 : divStyle2}>
                    <li className="head">12pm water</li>    
                    <li className="sub">lunch</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('14')}} style={props.fourteen ? divStyle1 : divStyle2}>
                    <li className="head">2pm water</li>    
                    <li className="sub">workout</li>
                    <li className="sub">protein shake</li>
                    <li className="sub">chores</li>
                </div>
                <div onClick={() => {props.onComplete('16')}} style={props.sixteen ? divStyle1 : divStyle2}>
                    <li className="head">4pm water</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('18')}} style={props.eighteen ? divStyle1 : divStyle2}>
                    <li className="head">6pm water</li>  
                    <li className="sub">dinner</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('20')}} style={props.twenty ? divStyle1 : divStyle2}>
                    <li className="head">8pm water</li>
                    <li className="sub">vitamins</li>  
                    <li className="sub">shower</li>
                    <li className="sub">brush teeth</li>  
                    <li className="sub">Netflix with Jaci</li>  
                </div>
                <div onClick={() => {props.onComplete('23')}} style={props.twentyThree ? divStyle1 : divStyle2}>
                    <li className="head">11pm water</li>
                    <li className="sub">sleep</li>  
                </div>
            </ul>
        </div>,
        friday =
        <div>
            <h1>friday's schedule</h1>
            <ul>
                <div onClick={() => {props.onComplete('8')}} style={props.eight ? divStyle1 : divStyle2}>
                    <li className="head">8am water</li>
                    <li className="sub">brush teeth</li>
                    <li className="sub">view stocks portfolio</li>
                    <li className="sub">kendall report</li>
                    <li className="sub">codecademy coursework</li>
                </div>
                <div onClick={() => {props.onComplete('9')}} style={props.nine ? divStyle1 : divStyle2}>
                    <li className="head">9am water</li>    
                    <li className="sub">breakfast</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('11')}} style={props.eleven ? divStyle1 : divStyle2}>
                    <li className="head">11am water</li>  
                </div>
                <div onClick={() => {props.onComplete('12')}} style={props.twelve ? divStyle1 : divStyle2}>
                    <li className="head">12pm water</li>    
                    <li className="sub">lunch</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('14')}} style={props.fourteen ? divStyle1 : divStyle2}>
                    <li className="head">2pm water</li>    
                    <li className="sub">workout</li>
                    <li className="sub">protein shake</li>
                    <li className="sub">chores</li>
                </div>
                <div onClick={() => {props.onComplete('16')}} style={props.sixteen ? divStyle1 : divStyle2}>
                    <li className="head">4pm water</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('18')}} style={props.eighteen ? divStyle1 : divStyle2}>
                    <li className="head">6pm water</li>  
                    <li className="sub">dinner</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('20')}} style={props.twenty ? divStyle1 : divStyle2}>
                    <li className="head">8pm water</li>
                    <li className="sub">vitamins</li>  
                    <li className="sub">shower</li>
                    <li className="sub">brush teeth</li>  
                    <li className="sub">Netflix with Jaci</li>  
                </div>
                <div onClick={() => {props.onComplete('23')}} style={props.twentyThree ? divStyle1 : divStyle2}>
                    <li className="head">11pm water</li>
                    <li className="sub">sleep</li>  
                </div>
            </ul>
        </div>,
        saturday =
        <div>
            <h1>saturday's schedule</h1>
            <ul>
                <div onClick={() => {props.onComplete('8')}} style={props.eight ? divStyle1 : divStyle2}>
                    <li className="head">8am water</li>
                    <li className="sub">brush teeth</li>
                    <li className="sub">view stocks portfolio</li>
                    <li className="sub">kendall report</li>
                    <li className="sub">codecademy coursework</li>
                </div>
                <div onClick={() => {props.onComplete('9')}} style={props.nine ? divStyle1 : divStyle2}>
                    <li className="head">9am water</li>    
                    <li className="sub">breakfast</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('11')}} style={props.eleven ? divStyle1 : divStyle2}>
                    <li className="head">11am water</li>  
                </div>
                <div onClick={() => {props.onComplete('12')}} style={props.twelve ? divStyle1 : divStyle2}>
                    <li className="head">12pm water</li>    
                    <li className="sub">lunch</li>
                    <li className="sub">coursework</li>
                </div>
                <div onClick={() => {props.onComplete('14')}} style={props.fourteen ? divStyle1 : divStyle2}>
                    <li className="head">2pm water</li>    
                    <li className="sub">workout</li>
                    <li className="sub">protein shake</li>
                    <li className="sub">chores</li>
                </div>
                <div onClick={() => {props.onComplete('16')}} style={props.sixteen ? divStyle1 : divStyle2}>
                    <li className="head">4pm water</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('18')}} style={props.eighteen ? divStyle1 : divStyle2}>
                    <li className="head">6pm water</li>  
                    <li className="sub">dinner</li>  
                    <li className="sub">coursework</li>  
                </div>
                <div onClick={() => {props.onComplete('20')}} style={props.twenty ? divStyle1 : divStyle2}>
                    <li className="head">8pm water</li>
                    <li className="sub">vitamins</li>  
                    <li className="sub">shower</li>
                    <li className="sub">brush teeth</li>  
                    <li className="sub">Netflix with Jaci</li>  
                </div>
                <div onClick={() => {props.onComplete('23')}} style={props.twentyThree ? divStyle1 : divStyle2}>
                    <li className="head">11pm water</li>
                    <li className="sub">sleep</li>  
                </div>
            </ul>
        </div>;

    const day = (date) => {
        switch(date) {
            case 'Sun' :
                return sunday;
            case 'Mon' :
                return monday;
            case 'Tue' :
                return tuesday;
            case 'Wed' :
                return wednesday;
            case 'Thu' :
                return thursday;
            case 'Fri' :
                return friday;
            case 'Sat' :
                return saturday;
            default :
                break;
        }
    }
    return (
        <div className="schedule-list">
            {day(date)}
        </div>
    )
}
export default Schedule;