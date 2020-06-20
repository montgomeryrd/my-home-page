import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import './styles/app.css';

import Coding from './components/coding/Coding';
import Workouts from './components/workouts/Workouts';
import Finances from './components/finances/Finances';
import Tasks from './components/tasks/Tasks';
import Goals from './components/goals/Goals';

import coding from './assets/coding.png';
import workouts from './assets/workouts.png';
import finances from './assets/finances.png';
import tasks from './assets/tasks.png';
import goals from './assets/goals.png';

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
      chest : "lame",
      back : "lame",
      shoulders : "lame",
      arms : "lame",
      legs : "lame",
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
    // Sidebar Binds
    this.handleSidebarTitleChange = this.handleSidebarTitleChange.bind(this);
    this.handleSidebarLinkChange = this.handleSidebarLinkChange.bind(this);
    this.handleSidebarSubmit = this.handleSidebarSubmit.bind(this);
    this.removeYouTubeLink = this.removeYouTubeLink.bind(this);
    // Coding Binds
    // Workouts Binds
    this.changeDivName = this.changeDivName.bind(this);
    this.refreshWorkouts = this.refreshWorkouts.bind(this);
    // Finances Binds
    // Tasks Binds
    this.handleTasksChange = this.handleTasksChange.bind(this);
    this.handleTasksSubmit = this.handleTasksSubmit.bind(this);
    // Goals Binds
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
  changeDivName(val) {
    switch(val) {
      case "chest" : 
        this.state.chest === "lame" ? this.setState({chest : "highlighted"}) : this.setState({chest : "lame"});
        break;
      case "back" : 
        this.state.back === "lame" ? this.setState({back : "highlighted"}) : this.setState({back : "lame"});
        break;
      case "shoulders" : 
        this.state.shoulders === "lame" ? this.setState({shoulders : "highlighted"}) : this.setState({shoulders : "lame"});
        break;
      case "arms" : 
        this.state.arms === "lame" ? this.setState({arms : "highlighted"}) : this.setState({arms : "lame"});
        break;
      case "legs" : 
        this.state.legs === "lame" ? this.setState({legs : "highlighted"}) : this.setState({legs : "lame"});
        break;
      default : throw new Error("Error");
    }
  }
  refreshWorkouts = () => {
    this.setState({chest : "lame"}, () => {
      this.setState({back : "lame"}, () => {
        this.setState({shoulders : "lame"}, () => {
          this.setState({arms : "lame"}, () => {
            this.setState({legs : "lame"});
          });
        });
      });
    });
  }
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
    this.setState({taskslist : this.state.taskslist.concat(list)}, () => {
        console.log("taskslist ", this.state.taskslist);
    });
  }
  completeTask = (index) => {
    if(this.state.complete.includes(index)) {
      const complete = this.state.complete.filter(element => element !== index);
      this.setState({complete : complete}, () => {
        console.log(this.state.complete);
      });
    } else {
      const complete = [...this.state.complete, index];
      this.setState({complete : complete}, () => {
        console.log(this.state.complete)
      });
    }
  }
  removeCompletedTasks = () => {
    const taskslist = this.state.taskslist.filter((task, index) => this.state.complete.indexOf(index) === -1);
    this.setState({taskslist : taskslist});
    this.setState({complete : []});
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
        <div className="spacer"></div>
        <div className="main-container">
          <Main />
        </div>
        <div className="spacer"></div>
        <div className="content-container">
            <Router>
                <div className="navigation-bar-container">
                    <NavLink to="/coding" style={{textDecoration: 'none'}}>
                        <img src={coding} alt="coding"/>
                    </NavLink>
                    <NavLink to="/workouts" style={{textDecoration: 'none'}}>
                        <img src={workouts} alt="workouts"/>
                    </NavLink>
                    <NavLink to="/finances" style={{textDecoration: 'none'}}>
                        <img src={finances} alt="finances"/>
                    </NavLink>
                    <NavLink to="/tasks" style={{textDecoration: 'none'}}>
                        <img src={tasks} alt="tasks"/>
                    </NavLink>
                    <NavLink to="/goals" style={{textDecoration: 'none'}}>
                        <img src={goals} alt="goals"/>
                    </NavLink>
                </div>
                <span className="zero">- No ZER0 days -</span>
                <div className="content">
                    <Route path="/coding" render={props =>
                        (<Coding

                        />)
                    }/>
                    <Route path="/workouts" render={props =>
                        (<Workouts
                          chest = {this.state.chest}
                          back = {this.state.back}
                          shoulders = {this.state.shoulders}
                          arms = {this.state.arms}
                          legs = {this.state.legs}
                          changeDivName = {this.changeDivName}
                          refreshWorkouts = {this.refreshWorkouts}
                        />)
                    }/>
                    <Route path="/finances" render={props =>
                        (<Finances
                        
                        />)
                    }/>
                    <Route path="/tasks" render={props =>
                        (<Tasks 
                          tasksvalue = {this.state.tasksvalue} 
                          taskslist = {this.state.taskslist} 
                          complete = {this.state.complete}
                          handleTasksChange = {this.handleTasksChange}
                          handleTasksSubmit = {this.handleTasksSubmit}
                          completeTask = {this.completeTask}
                          removeCompletedTasks = {this.removeCompletedTasks}
                        />)
                    }/>
                    <Route path="/goals" render={props =>
                        (<Goals
                        
                        />)
                    }/>
                </div>
            </Router>
            <div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
