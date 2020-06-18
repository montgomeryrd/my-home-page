import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Content from './components/content/Content';
import './styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Sidebar State
      sidebartitle : "",
      sidebarlink : "",
      _sidebarlist: [],
      get sidebarlist() {
        return this._sidebarlist;
      },
      set sidebarlist(value) {
        this._sidebarlist = value;
      },
      // Coding State
      codevalue : "",
      _codelist : [],
      get codelist() {
        return this._codelist;
      },
      set codelist(value) {
        this._codelist = value;
      },
      // Workouts State
      workoutsvalue : "",
      _workoutslist : [],
      get workoutslist() {
        return this._workoutslist;
      },
      set workoutslist(value) {
        this._workoutslist = value;
      },
      // Finances State
      financesvalue : "",
      _financeslist : [],
      get financeslist() {
        return this._financeslist;
      },
      set financeslist(value) {
        this._financeslist = value;
      },
      // Tasks State
      tasksvalue : "",
      _taskslist : [],
      get taskslist() {
        return this._taskslist;
      },
      set taskslist(value) {
        this._taskslist = value;
      },
      _complete : [],
      get complete() {
        return this._complete;
      },
      set complete(value) {
        this._complete = value;
      },
      // Goals State
      goalsvalue : "",
      _goalslist : [],
      get goalslist() {
        return this._goalslist;
      },
      set goalslist(value) {
        this._goalslist = value;
      }
    }
    // Sidebar Handles
    this.handleSidebarTitleChange = this.handleSidebarTitleChange.bind(this);
    this.handleSidebarLinkChange = this.handleSidebarLinkChange.bind(this);
    this.handleSidebarSubmit = this.handleSidebarSubmit.bind(this);
    this.removeYouTubeLink = this.removeYouTubeLink.bind(this);
    // Coding Handles
    // Workouts Handles
    // Finances Handles
    // Tasks Handles
    this.handleTasksChange = this.handleTasksChange.bind(this);
    this.handleTasksSubmit = this.handleTasksSubmit.bind(this);
    // Goals Handles
  }
  // componentDidMount() {3
  //   try {
  //     const json = localStorage.getItem('landingdata');
  //     this.setState({...JSON.parse(json)});
  //   } catch (error) {};
  // }
  // componentDidUpdate(prevProps, prevState) {  
  //   const json = JSON.stringify(this.state);
  //   localStorage.setItem('landingdata', json);
  // }
  // Sidebar Functions
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
    const sidebarlist = this.state.sidebarlist.filter(song => song.title !== title, []);
    this.setState({sidebarlist : sidebarlist});
  }
  // Coding Functions
  // Workouts Functions
  // Finances Functions
  // Tasks Functions
  handleTasksChange = (e) => {
    this.setState({tasksvalue : e.target.value});
  }
  handleTasksSubmit = (e) => {
    e.preventDefault();
    this.addTasks(this.state);
    this.setState({tasksvalue : ""});
  }
  addTasks = (list) => {
    list = this.state.tasksvalue.match(/(.+)/g);
    list = list.filter(item => item !== "");
    this.setState({taskslist : list}, () => {
        console.log("taskslist ", this.state.taskslist);
    });
  }
  completeTask = (index) => {
    if(this.state.complete.includes(this.state.taskslist[index])) {
        const i = this.state.complete.indexOf(this.state.taskslist[index]);
        let complete = this.state.complete;
        complete.splice(i, 1);
        this.setState({complete : complete}, () => {
            console.log("complete ", this.state.complete);
        });
    } else {
        const complete = [...this.state.complete, this.state.taskslist[index]];
        this.setState({complete : complete}, () => {
            console.log("complete ",this.state.complete);
        });
    }
  }
  removeCompletedTasks = (array) => {
      let taskslist = [], complete = [];
      this.state.taskslist.forEach(item => !this.state.complete.includes(item) ? taskslist.push(item) : item);
      this.setState({taskslist : taskslist});
      this.setState({complete : complete});
  }
  // Goals Functions

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
        </div>
        <div className="main-container">
          <Main />
        </div>
        <div className="content-container">
          <Content 
            codevalue = {this.state.codevalue} 
            codelist = {this.state.codelist} 
            workoutsvalue = {this.state.workoutsvalue} 
            workoutslist = {this.state.workoutslist} 
            financesvalue = {this.state.financesvalue} 
            financeslist = {this.state.financeslist} 
            tasksvalue = {this.state.tasksvalue} 
            taskslist = {this.state.taskslist} 
            handleTasksChange = {this.handleTasksChange}
            handleTasksSubmit = {this.handleTasksSubmit}
            completeTask = {this.completeTask}
            removeCompletedTasks = {this.removeCompletedTasks}
            goalsvalue = {this.state.goalsvalue}
            goalslist = {this.state.goalslist}
          />
        </div>
      </div>
    );
  }
}

export default App;
