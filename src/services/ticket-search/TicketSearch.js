export default class TicketSearch {
  API = 'https://aviasales-test-api.kata.academy/';

  async getResource(url) {
    const res = await fetch(`${this.API}${url}`);
    if (res.status === 500) {
      return {
        error: true,
      };
    }
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return res.json();
  }

  async getSearchId() {
    return this.getResource('search');
  }

  async getTickets(searchId) {
    return this.getResource(`tickets?searchId=${searchId}`);
  }
}
