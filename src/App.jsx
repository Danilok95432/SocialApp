import './css/App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/App/Header';
import Sidebar from './components/App/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import MessangerContainer from './components/Dialogs/Messanger/MessangerContainer';
import UsersContainer from './components/Users/UsersContainer'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <div className='content-part'>
            <Sidebar />
            <div className='main-content'>
              <Routes>
                <Route path='/profile' component={Profile} 
                element={<Profile />} />
                <Route path='/dialogs' component={Dialogs} element={<Dialogs />}/>
                <Route path='/dialogs/im/*' component={MessangerContainer} 
                element={<MessangerContainer />} />
                <Route path='/users' component={UsersContainer} element={<UsersContainer />} />
              </Routes>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
