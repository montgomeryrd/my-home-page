import React, { useState } from 'react';
import SidebarForm from './SidebarForm';
import equalizer from '../../assets/equalizer.svg';

const Sidebar = (props) => {
    const [form, setForm] = useState(false);
    const toggle = () => setForm(!form);

    const [show, setShow] = useState(false);

    const [songtitle, setSongTitle] = useState("");
    const [songlink, setSongLink] = useState("");
    
    // "sad face - one day" "https://www.youtube.com/embed/nroq3jRSLHg"
    // "MISSIO - Sing To Me" "https://www.youtube.com/embed/UEK9hRcx-tQ"

    const links = props.sidebarlist.length ? (
        props.sidebarlist.map((song, index) => {
            return (
                <div className="links-container" unselectable="on" key={index}>
                    <span className="link" onClick={() => {props.removeYouTubeLink(song.title)}}>( - )</span><span className="link" onClick={() => {setShow(true);setSongTitle(song.title);setSongLink(song.link)}}>{song.title}</span>
                </div>
            )
        })
    ) : (
        <div>
        </div>
    );

    return (
        <div className="sidebar-content">
            <img src={equalizer} onClick={toggle} alt="music"/>
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
            <div className="iframe-links">
                {show ? 
                    <iframe title={songtitle} width="140" height="80" src={songlink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                :
                    <div></div>
                }
                {links}
            </div>
        </div>
    )
}
export default Sidebar;