import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import NoteList from './components/Notes/NoteList';
import CreateNote from './components/Notes/CreateNote';
import NoteNav from './components/Notes/NoteNav';
import Login from './components/Users/Login/index';
import Register from './components/Users/Register/index';
import handleLogout from './components/Users/Logout/index';
import Home from './components/Users/Home/index';
import axios from 'axios';



class ButtonNav extends Component {
  render() {
    return (
    <div>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <Link to='/register'>
        <button>Register</button>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      port: 0
    }
  }


  render() {
    {document.title = "Lambda Notes"}
    return (
      <div className='App'>
      <div className='App__container'>
        <div className='App__left'> {/* start of left side div */}
        <ButtonNav />
        <h1>Lambda Notes</h1>
          <Link to='/viewnotes' ><div className='App__left-buttons'>
            <span>View Your Notes</span>
          </div></Link>
          <Link to='/NewNote'>
          <div className='App__left-buttons'>
            <span>+ Create New Note</span>
          </div></Link>
          
        </div> {/* end of left side div */}

        <div className='App__right'> {/* start of right side div */}
              <NoteNav />
              <Route exact path='/NewNote' component={CreateNote} />
              <Route exact path='/viewnotes' component={NoteList} />
              <Route exact path={'/login'}
              component={Login}/>
              <Route exact path={'/login'}
              component={Home}/>
              <Route exact path={'/register'}
              component={Register} />
              <Route exact path={'/register'}
              component={Home}/>
        </div> {/* end of right side div */}

      </div> {/* container div end */}
      </div>
    );
  }
}

export default App;
