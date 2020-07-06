import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import './styles/app.css';

import Schedule from './components/schedule/Schedule';
import Workouts from './components/workouts/Workouts';
import Finances from './components/finances/Finances';
import Tasks from './components/tasks/Tasks';
import Goals from './components/goals/Goals';

import schedule from './assets/schedule.png';
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
      // Schedule State
      one : false,
      two : false,
      three : false,
      four : false,
      five : false,
      six : false,
      seven : false,
      eight : false,
      nine : false,
      ten : false,
      eleven : false,
      twelve : false,
      thirteen : false,
      fourteen : false,
      fifteen : false,
      sixteen : false,
      seventeen : false,
      eighteen : false,
      nineteen : false,
      twenty : false,
      twentyOne : false,
      twentyTwo : false,
      twentyThree : false,
      twentyFour : false,
      // Workouts State
      chest : "lame",
      back : "lame",
      shoulders : "lame",
      arms : "lame",
      legs : "lame",
      // Finances State
      savingsvalue : "",
      totalvalue : "",
      _savingslist : [],
      get savingslist() {
        return this._savingslist;
      },
      set savingslist(value) {
        this._savingslist = value;
      },
      stocksvalue : "",
      sharesvalue : "",
      dividendvalue : "",
      _stocks : [],
      get stocks() {
        return this._stocks;
      }, 
      set stocks(value) {
        this._stocks = value;
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
      stepsvalue : "",
      _goalslist : [],
      get goalslist() {
        return this._goalslist;
      },
      set goalslist(value) {
        this._goalslist = value;
      },
      _completedsteps : [],
      get completedsteps() {
        return this._completedsteps;
      },
      set completedsteps(value) {
        return this._completedsteps = value;
      }
    }
    // Sidebar Binds
    this.handleSidebarTitleChange = this.handleSidebarTitleChange.bind(this);
    this.handleSidebarLinkChange = this.handleSidebarLinkChange.bind(this);
    this.handleSidebarSubmit = this.handleSidebarSubmit.bind(this);
    this.removeYouTubeLink = this.removeYouTubeLink.bind(this);
    // Workouts Binds
    this.changeDivName = this.changeDivName.bind(this);
    this.refreshWorkouts = this.refreshWorkouts.bind(this);
    // Finances Binds
    this.handleSavingsChange = this.handleSavingsChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handleStocksChange = this.handleStocksChange.bind(this);
    this.handleSharesChange = this.handleSharesChange.bind(this);
    this.handleDividendChange = this.handleDividendChange.bind(this);
    this.handleSavingsSubmit = this.handleSavingsSubmit.bind(this);
    this.handleStocksSubmit = this.handleStocksSubmit.bind(this);
    this.removeStocks = this.removeStocks.bind(this);
    // Tasks Binds
    this.handleTasksChange = this.handleTasksChange.bind(this);
    this.handleTasksSubmit = this.handleTasksSubmit.bind(this);
    // Goals Binds
    this.handleGoalsChange = this.handleGoalsChange.bind(this);
    this.handleGoalsStepsChange = this.handleGoalsStepsChange.bind(this);
    this.handleGoalsSubmit = this.handleGoalsSubmit.bind(this);
    this.removeGoal = this.removeGoal.bind(this);
    this.completeSteps = this.completeSteps.bind(this);
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
  // Schedule Functions
  onComplete = (value) => {
    switch(value) {
      case '1':
        this.setState({one : !this.state.one});
        break;
      case '2' :
        this.setState({two : !this.state.two});
        break;
      case '3' :
        this.setState({three : !this.state.three});
        break;
      case '4' :
        this.setState({four : !this.state.four});
        break;
      case '5' :
        this.setState({five : !this.state.five});
        break;
      case '6' :
        this.setState({six : !this.state.six});
        break;
      case '7' :
        this.setState({seven : !this.state.seven});
        break;
      case '8' :
        this.setState({eight : !this.state.eight});
        break;
      case '9' :
        this.setState({nine : !this.state.nine});
        break;
      case '10' :
        this.setState({ten : !this.state.ten});
        break;
      case '11' :
        this.setState({eleven : !this.state.eleven});
        break;
      case '12' :
        this.setState({twelve : !this.state.twelve});
        break;
      case '13' :
        this.setState({thirteen : !this.state.thirteen});
        break;
      case '14' :
        this.setState({fourteen : !this.state.fourteen});
        break;
      case '15' :
        this.setState({fifteen : !this.state.fifteen});
        break;
      case '16' :
        this.setState({sixteen : !this.state.sixteen});
        break;
      case '17' :
        this.setState({seventeen : !this.state.seventeen});
        break;
      case '18' :
        this.setState({eighteen : !this.state.eighteen});
        break;
      case '19' :
        this.setState({nineteen : !this.state.nineteen});
        break;
      case '20' :
        this.setState({twenty : !this.state.twenty});
        break;
      case '21' :
        this.setState({twentyOne : !this.state.twentyOne});
        break;
      case '22' :
        this.setState({twentyTwo : !this.state.twentyTwo});
        break;
      case '23' :
        this.setState({twentyThree : !this.state.twentyThree});
        break;
      case '24' :
        this.setState({twentyFour : !this.state.twentyFour});
        break;
      default :
        break;
    }
  }
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
  handleSavingsChange = (e) => {
    this.setState({savingsvalue : e.target.value});
  }
  handleTotalChange = (e) => {
    this.setState({totalvalue : e.target.value});
  }
  handleStocksChange = (e) => {
    this.setState({stocksvalue : e.target.value});
  }
  handleSharesChange = (e) => {
    this.setState({sharesvalue : e.target.value});
  }
  handleDividendChange = (e) => {
    this.setState({dividendvalue : e.target.value});
  }
  handleSavingsSubmit = (e) => {
    e.preventDefault();
    this.adjustSavings(this.state.savingsvalue, this.state.totalvalue);
    this.setState({savingsvalue : ""});
    this.setState({totalvalue : ""});
  }
  handleStocksSubmit = (e) => {
    e.preventDefault();
    this.adjustStocks(this.state.stocksvalue, this.state.sharesvalue, this.state.dividendvalue);
    this.setState({stocksvalue : ""});
    this.setState({sharesvalue : ""});
    this.setState({dividendvalue : ""});
  }
  adjustSavings(value, total) {
    const event = new Date().toDateString();
    const amount = {};
    amount.date = event;
    amount.value = value;
    amount.total = total;
    this.setState({savingslist : [amount, ...this.state.savingslist]});
  }
  adjustStocks(moniker, shares, dividend) {
    const stock = {};
    stock.moniker = moniker.toUpperCase();
    stock.shares = shares;
    stock.dividend = dividend;
    this.setState({stocks : [stock, ...this.state.stocks]});
  }
  removeStocks(stock) {
    const stocks = this.state.stocks.filter(item => item.moniker !== stock);
    this.setState({stocks : stocks});
  }

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
  clearAllTasks = () => {
    this.setState({taskslist : []});
  }
  // Goals Functions
  handleGoalsChange = (e) => {
    this.setState({goalsvalue : e.target.value});
  }
  handleGoalsStepsChange = (e) => {
    this.setState({stepsvalue : e.target.value});
  }
  handleGoalsSubmit = (e) => {
    e.preventDefault();
    this.addGoal(this.state.goalsvalue, this.state.stepsvalue);
    this.setState({goalsvalue : ""}, () => {
      this.setState({stepsvalue : ""})
    });
  }
  addGoal(goal, steps) {
    const item = {};
    item.name = goal;
    item.steps = steps.match(/(.+)/g);
    item.steps = item.steps.filter(step => step !== "");
    item.done = false;
    this.setState({goalslist : [...this.state.goalslist, item]});
  }
  removeGoal(goal) {
    const goalslist = this.state.goalslist.filter(element => element !== goal)
    this.setState({goalslist : goalslist});
  }
  completeSteps(goal, step){
    const item = `${goal}, ${step}`;
    const completedsteps = this.state.completedsteps.filter(step => step !== item);
    this.state.completedsteps.includes(item) ? this.setState({completedsteps : completedsteps}) : this.setState({completedsteps : [...this.state.completedsteps, item]});
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
        </div>
        <div className="spacer"></div>
        <div className="content-container">
            <Router>
                <div className="navigation-bar-container">
                    <NavLink to="/schedule" style={{textDecoration: 'none'}}>
                        <img src={schedule} alt="schedule"/>
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
                    <Route path="/schedule" render={props =>
                        <Schedule 
                          one = {this.state.one}
                          two = {this.state.two}
                          three = {this.state.three}
                          four = {this.state.four}
                          five = {this.state.five}
                          six = {this.state.six}
                          seven = {this.state.seven}
                          eight = {this.state.eight}
                          nine = {this.state.nine}
                          ten = {this.state.ten}
                          eleven = {this.state.eleven}
                          twelve = {this.state.twelve}
                          thirteen = {this.state.thirteen}
                          fourteen = {this.state.fourteen}
                          fifteen = {this.state.fifteen}
                          sixteen = {this.state.sixteen}
                          seventeen = {this.state.seventeen}
                          eighteen = {this.state.eighteen}
                          nineteen = {this.state.nineteen}
                          twenty = {this.state.twenty}
                          twentyOne = {this.state.twentyOne}
                          twentyTwo = {this.state.twentyTwo}
                          twentyThree = {this.state.twentyThree}
                          twentyFour = {this.state.twentyFour}
                          onComplete = {this.onComplete}
                        />
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
                          savingsvalue = {this.state.savingsvalue}
                          totalvalue = {this.state.totalvalue}
                          savingslist = {this.state.savingslist}
                          stocksvalue = {this.state.stocksvalue}
                          sharesvalue = {this.state.sharesvalue}
                          dividendvalue = {this.state.dividendvalue}
                          stocks = {this.state.stocks}
                          removeStocks = {this.removeStocks}
                          handleSavingsChange = {this.handleSavingsChange} 
                          handleTotalChange = {this.handleTotalChange}
                          handleStocksChange = {this.handleStocksChange}
                          handleSharesChange = {this.handleSharesChange}
                          handleDividendChange = {this.handleDividendChange}
                          handleSavingsSubmit = {this.handleSavingsSubmit}
                          handleStocksSubmit = {this.handleStocksSubmit}
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
                          clearAllTasks = {this.clearAllTasks}
                        />)
                    }/>
                    <Route path="/goals" render={props =>
                        (<Goals
                          goalsvalue = {this.state.goalsvalue}
                          stepsvalue = {this.stepsvalue}
                          goalslist = {this.state.goalslist}
                          completedsteps = {this.state.completedsteps}
                          removeGoal = {this.removeGoal}
                          completeSteps = {this.completeSteps}
                          handleGoalsChange = {this.handleGoalsChange}
                          handleGoalsStepsChange = {this.handleGoalsStepsChange}
                          handleGoalsSubmit = {this.handleGoalsSubmit}
                        />)
                    }/>
                </div>
            </Router>
        </div>
        <div className="spacer"></div>
        <div className="main-container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
