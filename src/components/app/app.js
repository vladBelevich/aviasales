import classes from './app.module.scss';
import Logo from '../logo';
import MainContent from '../main-content';
import { getIdThunkCreator } from '../../services/redux/actions';
import { connect } from 'react-redux';
import { Component } from 'react';

export class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line
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

export default connect(null, {
  getIdThunkCreator,
})(App);
