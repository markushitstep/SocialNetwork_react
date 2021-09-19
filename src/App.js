import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';




const App = (props) => {

  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.isInitialized) {
    return <Preloader />
  } else {

    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar store={props.store} />
        {/* state={props.state.sideBar} */}

        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
          <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/Users' render={() => <UsersContainer />} />
          <Route path='/Login' render={() => <LoginPage />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})

export default compose(
  //withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
