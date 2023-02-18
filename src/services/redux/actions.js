import TicketSearch from '../ticket-search/ticket-search';

export const checkedAllAct = () => ({ type: 'CHECKED_ALL' });
export const checkedWithoutTransferAct = () => ({
  type: 'CHECKED_WITHOUT_TRANSFER',
});
export const checkedOneTransferAct = () => ({ type: 'CHECKED_ONE_TRANSFER' });
export const checkedTwoTransferAct = () => ({ type: 'CHECKED_TWO_TRANSFER' });
export const checkedThreeTransferAct = () => ({
  type: 'CHECKED_THREE_TRANSFER',
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

const ticketApi = new TicketSearch();

export const getDataThunkCreator = (searchID) => (dispatch) => {
  function getData() {
    ticketApi.getTickets(searchID).then((data) => {
      console.log(data);
      if (data.error) {
        getData();
      } else if (data.stop) {
        console.log(data);
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

// export const getDataThunkCreator = () => (dispatch) => {
//   ticketApi
//     .getSearchId()
//     .then((result) => {
//       dispatch(setID(result.searchId));
//       return result.searchId;
//     })
//     .then((searchID) => {
//       // eslint-disable-next-line
//       console.log(searchID);
//       ticketApi.getTickets(searchID).then((data) => {
//         if (data.stop === true) {
//           return;
//         }
//         dispatch(setData(data.tickets));
//       });
//     });
// };
