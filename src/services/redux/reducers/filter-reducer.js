import { defaultState } from '../default-state';
// eslint-disable-next-line
const filterReducer = (state = defaultState, action) => {
  const { filter, data, numberOfTickets, tab } = state;
  switch (action.type) {
    case 'CHECKED_ALL':
      if (filter.allChecked) {
        return {
          ...state,
          filter: {
            allChecked: false,
            withoutTransferChecked: false,
            oneTransferChecked: false,
            twoTransferChecked: false,
            threeTransferChecked: false,
          },
        };
      }
      return {
        ...state,
        filter: {
          allChecked: true,
          withoutTransferChecked: true,
          oneTransferChecked: true,
          twoTransferChecked: true,
          threeTransferChecked: true,
        },
      };
    case 'CHECKED_WITHOUT_TRANSFER': {
      if (filter.allChecked) {
        return {
          ...state,
          filter: {
            ...filter,
            allChecked: false,
            withoutTransferChecked: false,
          },
        };
      } else if (
        !filter.withoutTransferChecked &&
        filter.oneTransferChecked &&
        filter.twoTransferChecked &&
        filter.threeTransferChecked
      ) {
        return {
          ...state,
          filter: {
            ...filter,
            allChecked: true,
            withoutTransferChecked: true,
          },
        };
      }
      return {
        ...state,
        filter: {
          ...filter,
          withoutTransferChecked: !filter.withoutTransferChecked,
        },
      };
    }
    case 'CHECKED_ONE_TRANSFER': {
      if (filter.allChecked) {
        return {
          ...state,
          filter: {
            ...filter,
            allChecked: false,
            oneTransferChecked: false,
          },
        };
      } else if (
        filter.withoutTransferChecked &&
        !filter.oneTransferChecked &&
        filter.twoTransferChecked &&
        filter.threeTransferChecked
      ) {
        return {
          ...state,
          filter: {
            ...filter,
            allChecked: true,
            oneTransferChecked: true,
          },
        };
      }
      return {
        ...state,
        filter: { ...filter, oneTransferChecked: !filter.oneTransferChecked },
      };
    }
    case 'CHECKED_TWO_TRANSFER': {
      if (filter.allChecked) {
        return {
          ...state,
          filter: {
            ...filter,
            allChecked: false,
            twoTransferChecked: false,
          },
        };
      } else if (
        filter.withoutTransferChecked &&
        filter.oneTransferChecked &&
        !filter.twoTransferChecked &&
        filter.threeTransferChecked
      ) {
        return {
          ...state,
          filter: { ...filter, allChecked: true, twoTransferChecked: true },
        };
      }
      return {
        ...state,
        filter: {
          ...filter,
          twoTransferChecked: !filter.twoTransferChecked,
        },
      };
    }
    case 'CHECKED_THREE_TRANSFER': {
      if (filter.allChecked) {
        return {
          ...state,
          filter: {
            ...filter,
            allChecked: false,
            threeTransferChecked: false,
          },
        };
      } else if (
        filter.withoutTransferChecked &&
        filter.oneTransferChecked &&
        filter.twoTransferChecked &&
        !filter.threeTransferChecked
      ) {
        return {
          ...state,
          filter: {
            ...filter,
            allChecked: true,
            threeTransferChecked: true,
          },
        };
      }

      return {
        ...state,
        filter: {
          ...filter,
          threeTransferChecked: !filter.threeTransferChecked,
        },
      };
    }
    case 'CHEAPEST_ACTIVE': {
      return {
        ...state,
        tab: {
          ...tab,
          cheapest: true,
          fastest: false,
          optimal: false,
        },
      };
    }
    case 'FASTEST_ACTIVE': {
      return {
        ...state,
        tab: {
          ...tab,
          cheapest: false,
          fastest: true,
          optimal: false,
        },
      };
    }
    case 'OPTIMAL_ACTIVE': {
      return {
        ...state,
        tab: {
          ...tab,
          cheapest: false,
          fastest: false,
          optimal: true,
        },
      };
    }
    case 'SET_ID_SEARCH_TO_STATE': {
      return {
        ...state,
        loading: false,
        searchID: action.searchID,
      };
    }
    case 'SET_DATA_TO_STATE': {
      return {
        ...state,
        data: data.concat(action.data),
        loadingAllData: true,
        hasData: true,
        gettingData: true,
      };
    }
    case 'FINISH_GET_DATA': {
      return {
        ...state,
        gettingData: false,
        loadingAllData: false,
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
    default:
      return state;
  }
};

export default filterReducer;
