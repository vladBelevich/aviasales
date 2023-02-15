import Logo from '../logo';
// import * as actions from '../../services/redux/actions';
import MainContent from '../content';
import { getDataThunkCreator } from '../../services/redux/actions';
import { connect } from 'react-redux';
import { Component } from 'react';

export class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    this.props.getDataThunkCreator();
  }

  render() {
    const { data, searchID } = this.props;
    // eslint-disable-next-line
    console.log(data, searchID);
    return (
      <div>
        <Logo />
        <MainContent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, searchID } = state;
  return { data, searchID };
};

export default connect(mapStateToProps, {
  getDataThunkCreator,
})(App);
