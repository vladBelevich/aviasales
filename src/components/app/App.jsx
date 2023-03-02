import classes from './App.module.scss';
import Logo from '../logo';
import MainContent from '../main-content';
import * as actions from '../../services/redux/Actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function App({ getDataThunkCreator }) {
  useEffect(() => {
    getDataThunkCreator();
  });

  return (
    <div className={classes.app_wrapper}>
      <Logo />
      <MainContent />
    </div>
  );
}

export default connect(null, actions)(App);
