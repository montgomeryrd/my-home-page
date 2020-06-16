import React, { useState } from 'react';
import SidebarForm from './SidebarForm';

const Sidebar = (props) => {
    const [form, setForm] = useState(false);
    const toggle = () => setForm(!form);
    let playingtitle = "", playinglink = "";

    function song(title, content){
        playingtitle = title;
        playinglink = content;
    };

    const links = props.sidebarlist.length ? (
        props.sidebarlist.map((link, index) => {
            return (
                <div className="links-container" unselectable="on" key={index}>
                    <h2>{link.title}</h2>
                    <p onClick={() => {song(link.title, link.content)}}>play</p>
                </div>
            )
        })
    ) : (
        <div>

        </div>
    );

    return (
        <div className="sidebar-content">
            <h1>CURRENT TUNES</h1>
            <h6 onClick={toggle}>add link</h6>
            {form ?
                <div>
                    <SidebarForm 
                        sidebartitle = {props.sidebartitle}
                        sidebarlink = {props.sidebarlink}
                        sidebarlist = {props.sidebarlist}
                        handleSidebarChange = {props.handleSidebarChange}
                        handleSidebarSubmit = {props.handleSidebarSubmit}
                    />
                </div>
            :
                <div>
                    {links}
                </div>
            }
            <div>
            <iframe 
                title={playingtitle}
                width="560" 
                height="315" 
                src={playinglink}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
            </div>
        </div>
    )
}
export default Sidebar;