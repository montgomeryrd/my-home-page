import React from 'react';
import Sidebar from './components/sidebar/Sidebar';

class App extends React.Component() {
  constructor(props) {
    super(props)
    this.state = {
      // Sidebar state
      sidebartitle : "",
      sidebarlink : "",
      sidebarlist : [],
    }
    // Sidebar handles
    this.handleSidebarTitleChange=this.handleSidebarTitleChange.bind(this);
    this.handleSidebarLinkChange=this.handleSidebarLinkChange.bind(this);
    this.handleSidebarSubmit=this.handleSidebarSubmit.bind(this);
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('landingdata');
      this.setState({...JSON.parse(json)});
    } catch (error) {};
  }
  componentDidUpdate(prevProps, prevState) {  
    const json = JSON.stringify(this.state);
    localStorage.setItem('landingdata', json);
  }
  // Sidebar functions
  handleSidebarTitleChange = (e) => {
    this.setState({sidebartitle : e.target.value});
  }
  handleSidebarLinkChange = (e) => {
    this.setState({sidebarlink : e.target.value});
  }
  handleSidebarSubmit = (e) => {
    e.preventDefault();
    this.sidebar.add(this.state.sidebartitle, this.state.sidebarlink);
  }
  sidebar = {
    add(title, link) {
      const song = {title, link};
      this.setState({sidebarlist : [...this.state.sidebarlist, song]});
    },
    remove(title) {
      const sidebarlist = this.state.sidebarlist.filter(song => song.title !== title);
      this.setState({sidebarlist : sidebarlist});
    },
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar 
            sidebartitle = {this.sidebartitle}
            sidebarlink = {this.sidebarlink}
            sidebarlist = {this.sidebarlist}
            handleSidebarTitleChange = {this.handleSidebarTitleChange}
            handleSidebarLinkChange = {this.handleSidebarLinkChange}
            handleSidebarSubmit = {this.handleSidebarSubmit}
            sidebar = {this.sidebar}         
          />
        </div>
      </div>
    );
  }
}

export default App;
