import axios from 'axios';

export default class TicketSearch {
  API = 'https://aviasales-test-api.kata.academy/';

  async getID() {
    const responseID = await axios.get(`${this.API}search`);
    return responseID.data.searchId;
  }

  async getTickets(id) {
    try {
      const responseData = await axios.get(`${this.API}tickets?searchId=${id}`);
      return responseData.data;
    } catch (err) {
      return {
        error: true,
      };
    }
  }
}
