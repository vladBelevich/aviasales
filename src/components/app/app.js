import TicketSearch from '../../services/ticket-search/ticket-search';
import Logo from '../logo';
import MainContent from '../content';
import { Component } from 'react';

export default class App extends Component {
  state = {
    searchID: null,
  };

  ticket = new TicketSearch();

  componentDidMount() {
    this.ticket
      .getSearchId()
      .then((res) => this.setState({ searchID: res.searchId }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchID } = this.state;
    if (prevState.searchID !== searchID) {
      this.ticket
        .getTickets(searchID)
        .then((res) => this.setState({ data: res }));
    }
  }

  render() {
    const { data } = this.state;
    // eslint-disable-next-line
    console.log(data);
    return (
      <div>
        <Logo />
        <MainContent />
      </div>
    );
  }
}
