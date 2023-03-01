import TicketSearch from '../ticket-search/TicketSearch';

const ticketApi = new TicketSearch();

export const checkedAllAct = () => ({ type: 'CHECKED_ALL' });
export const checkedWithoutTransferAct = () => ({
  type: 'CHECKED_WITHOUT_TRANSFER',
});
export const checkedOneTransferAct = () => ({ type: 'CHECKED_ONE_TRANSFER' });
export const checkedTwoTransferAct = () => ({ type: 'CHECKED_TWO_TRANSFER' });
export const checkedThreeTransferAct = () => ({
  type: 'CHECKED_THREE_TRANSFER',
});

export const tabCheapestAct = () => ({
  type: 'CHEAPEST_ACTIVE',
});
export const tabFastestAct = () => ({
  type: 'FASTEST_ACTIVE',
});
export const tabOptimalAct = () => ({
  type: 'OPTIMAL_ACTIVE',
});

export const setID = (id) => ({
  type: 'SET_ID_SEARCH_TO_STATE',
  searchID: id,
});
export const setData = (data) => ({
  type: 'SET_DATA_TO_STATE',
  data,
});
export const finishGetData = () => ({
  type: 'FINISH_GET_DATA',
});
export const filterData = (data) => {
  if (data.length === 0) {
    return {
      type: 'EMPTY_FILTERED_DATA',
      filteredData: data,
    };
  }
  return {
    type: 'FILTER_DATA',
    filteredData: data,
  };
};

export const emptyFilteredData = (data) => ({
  type: 'EMPTY_FILTERED_DATA',
  filteredData: data,
  hasFilteredData: false,
});
export const showMoreTickets = () => ({
  type: 'SHOW_MORE_TICKETS',
});
export const showNetworkError = () => ({
  type: 'SHOW_NETWORK_ERROR',
});

export const getDataThunkCreator = (searchID) => (dispatch) => {
  function getData() {
    ticketApi.getTickets(searchID).then((data) => {
      if (data.error) {
        dispatch(showNetworkError());
      } else if (data.stop) {
        dispatch(finishGetData());
      } else {
        dispatch(setData(data.tickets));
        getData();
      }
    });
  }
  getData();
};

export const getIdThunkCreator = () => (dispatch) => {
  ticketApi.getSearchId().then((result) => {
    dispatch(setID(result.searchId));
  });
};
