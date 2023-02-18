import Logo from '../logo';
import MainContent from '../content';
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
      <div>
        <Logo />
        <MainContent />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  getIdThunkCreator,
})(App);
