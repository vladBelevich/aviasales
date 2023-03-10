const defaultState = {
  data: [],
  filteredData: [],
  loading: false,
  searchID: null,
  numberOfTickets: 5,
  hasData: false,
  hasFilteredData: false,
  gettingData: false,
  alertEmptyData: false,
};

// eslint-disable-next-line
const dataReducer = (state = defaultState, action) => {
  const { data, numberOfTickets } = state;
  switch (action.type) {
    case 'SET_ID_SEARCH_TO_STATE': {
      return {
        ...state,
        searchID: action.searchID,
      };
    }
    case 'SET_DATA_TO_STATE': {
      return {
        ...state,
        data: data.concat(action.data),
        loading: true,
        hasData: true,
        gettingData: true,
        networkError: false,
      };
    }
    case 'FINISH_GET_DATA': {
      return {
        ...state,
        gettingData: false,
      };
    }
    case 'FILTER_DATA': {
      return {
        ...state,
        filteredData: action.filteredData,
        hasFilteredData: true,
        alertEmptyData: false,
      };
    }
    case 'EMPTY_FILTERED_DATA': {
      return {
        ...state,
        filteredData: action.filteredData,
        hasFilteredData: false,
        alertEmptyData: true,
      };
    }
    case 'SHOW_MORE_TICKETS': {
      return {
        ...state,
        numberOfTickets: numberOfTickets + 5,
      };
    }
    case 'SHOW_NETWORK_ERROR': {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
