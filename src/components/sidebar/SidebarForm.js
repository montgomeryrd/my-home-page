import React from 'react';

const SidebarForm = (props) => {
    return (
        <div className="sidebarform-content">
            <form className="sidebar-form" onSubmit={props.handleSidebarSubmit}>
                <input
                    id="title"
                    name="title"
                    autoComplete="off"
                    value={props.sidebartitle}
                    onChange={props.handleSidebarTitleChange}
                    required={true}
                    placeholder="add song title"
                />
                <input
                    id="link"
                    name="link"
                    autoComplete="off"
                    value={props.sidebarlink}
                    onChange={props.handleSidebarLinkChange}
                    required={true}
                    placeholder="add song hyperlink"
                />
                <button className="sidebar-form-btn" onSubmit={props.handleSidebarSubmit}>add</button>
            </form>
        </div>
    )
}
export default SidebarForm;