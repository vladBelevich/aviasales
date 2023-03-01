import classes from './App.module.scss';
import Logo from '../logo';
import MainContent from '../main-content';
import * as actions from '../../services/redux/Actions';
import { connect } from 'react-redux';
import { Component } from 'react';

class App extends Component {
  componentDidMount() {
    const { getIdThunkCreator } = this.props;
    getIdThunkCreator();
  }

  render() {
    return (
      <div className={classes.app_wrapper}>
        <Logo />
        <MainContent />
      </div>
    );
  }
}

export default connect(null, actions)(App);
