import './css/App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/App/Header';
import Sidebar from './components/App/Sidebar';
import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import MessangerContainer from './components/Dialogs/Messanger/MessangerContainer';
import UsersContainer from './components/Users/UsersContainer'
import Music from './components/Music/Music'
import Videos from './components/Videos/Videos'
import Games from './components/Games/Games'
import Groups from './components/Groups/Groups'
import News from './components/News/News'
import Market from './components/Market/Market'
import Friends from './components/Friends/Friends'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <div className='content-part'>
            <Sidebar />
            <div className='main-content'>
              <Routes>
              <Route exact path='/profile' component={Profile} 
                element={<Profile />} />
                <Route path='/profile/:userId' component={ProfileContainer} 
                element={<ProfileContainer />} />
                <Route path='/dialogs' component={Dialogs} element={<Dialogs />}/>
                <Route path='/dialogs/im/*' component={MessangerContainer} 
                element={<MessangerContainer />} />
                <Route path='/users' component={UsersContainer} element={<UsersContainer />} />
                <Route path='/music' component={Music} element={<Music />} />
                <Route path='/videos' component={Videos} element={<Videos />} />
                <Route path='/games' component={Games} element={<Games />} />
                <Route path='/groups' component={Groups} element={<Groups />} />
                <Route path='/news' component={News} element={<News />} />
                <Route path='/friends' component={Friends} element={<Friends />} />
                <Route path='/market' component={Market} element={<Market />} />
              </Routes>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
