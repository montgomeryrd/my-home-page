import React, { useState } from 'react';
import SidebarForm from './SidebarForm';

const Sidebar = (props) => {
    const [form, setForm] = useState(false);
    const toggle = () => setForm(!form);
    let songtitle = "sad face. - one day", songlink = "https://www.youtube.com/embed/nroq3jRSLHg";

    function populateIFrame(title, link){
        songtitle = title;
        songlink = link;
        console.log(songtitle, songlink);
    };

    const links = props.sidebarlist.length ? (
        props.sidebarlist.map((song, index) => {
            return (
                <div className="links-container" unselectable="on" key={index}>
                    <span onClick={() => {populateIFrame(song.title, song.link)}}>{song.title}</span>
                </div>
            )
        })
    ) : (
        <div>
            <p>empty</p>
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
                        handleSidebarTitleChange = {props.handleSidebarTitleChange}
                        handleSidebarLinkChange = {props.handleSidebarLinkChange}
                        handleSidebarSubmit = {props.handleSidebarSubmit}
                    />
                </div>
            :
                <div>
                    
                </div>
            }
            <div>
                {links}
            </div>
            <div>
            <iframe title={songtitle} width="560" height="315" src={songlink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}
export default Sidebar;