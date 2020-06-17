import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
// import Content from './components/content/Content';
import './styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Sidebar state
      sidebartitle : "",
      sidebarlink : "",
      _sidebarlist: [],
      get sidebarlist() {
        return this._sidebarlist;
      },
      set sidebarlist(value) {
        this._sidebarlist = value;
      },
    }
    // Sidebar handles
    this.handleSidebarTitleChange=this.handleSidebarTitleChange.bind(this);
    this.handleSidebarLinkChange=this.handleSidebarLinkChange.bind(this);
    this.handleSidebarSubmit=this.handleSidebarSubmit.bind(this);
  }
  // componentDidMount() {
  //   try {
  //     const json = localStorage.getItem('landingdata');
  //     this.setState({...JSON.parse(json)});
  //   } catch (error) {};
  // }
  // componentDidUpdate(prevProps, prevState) {  
  //   const json = JSON.stringify(this.state);
  //   localStorage.setItem('landingdata', json);
  // }
  // Sidebar functions
  handleSidebarTitleChange = (e) => {
    this.setState({sidebartitle : e.target.value});
  }
  handleSidebarLinkChange = (e) => {
    this.setState({sidebarlink : e.target.value});
  }
  handleSidebarSubmit = (e) => {
    e.preventDefault();
    this.addYouTubeLink(this.state.sidebartitle, this.state.sidebarlink);
    this.setState({sidebartitle : ""});
    this.setState({sidebarlink : ""});
  }
  addYouTubeLink(title, link) {
    const song = {};
    song.title = title;
    song.link = link;
    this.setState({sidebarlist : [...this.state.sidebarlist, song]}, () => {
      console.log(this.state.sidebarlist);
    });
  }
  removeYouTubeLink(title) {
    const sidebarlist = this.state.sidebarlist.filter(song => song.title !== title);
    this.setState({sidebarlist : sidebarlist});
  }


  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar 
            sidebartitle = {this.state.sidebartitle}
            sidebarlink = {this.state.sidebarlink}
            sidebarlist = {this.state.sidebarlist}
            removeYouTubeLink = {this.removeYouTubeLink}
            handleSidebarTitleChange = {this.handleSidebarTitleChange}
            handleSidebarLinkChange = {this.handleSidebarLinkChange}
            handleSidebarSubmit = {this.handleSidebarSubmit}    
          />
          <Main />
          {/* <Content /> */}
        </div>
      </div>
    );
  }
}

export default App;
