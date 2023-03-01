const defaultState = {
  _filter: {
    allChecked: true,
    withoutTransferChecked: true,
    oneTransferChecked: true,
    twoTransferChecked: true,
    threeTransferChecked: true,
  },
  _tab: {
    cheapest: false,
    fastest: true,
    optimal: false,
  },
};
// eslint-disable-next-line
const filterReducer = (state = defaultState, action) => {
  const { _filter, _tab } = state;
  switch (action.type) {
    case 'CHECKED_ALL':
      if (_filter.allChecked) {
        return {
          ...state,
          _filter: {
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
        _filter: {
          allChecked: true,
          withoutTransferChecked: true,
          oneTransferChecked: true,
          twoTransferChecked: true,
          threeTransferChecked: true,
        },
      };
    case 'CHECKED_WITHOUT_TRANSFER': {
      if (_filter.allChecked) {
        return {
          ...state,
          _filter: {
            ..._filter,
            allChecked: false,
            withoutTransferChecked: false,
          },
        };
      } else if (
        !_filter.withoutTransferChecked &&
        _filter.oneTransferChecked &&
        _filter.twoTransferChecked &&
        _filter.threeTransferChecked
      ) {
        return {
          ...state,
          _filter: {
            ..._filter,
            allChecked: true,
            withoutTransferChecked: true,
          },
        };
      }
      return {
        ...state,
        _filter: {
          ..._filter,
          withoutTransferChecked: !_filter.withoutTransferChecked,
        },
      };
    }
    case 'CHECKED_ONE_TRANSFER': {
      if (_filter.allChecked) {
        return {
          ...state,
          _filter: {
            ..._filter,
            allChecked: false,
            oneTransferChecked: false,
          },
        };
      } else if (
        _filter.withoutTransferChecked &&
        !_filter.oneTransferChecked &&
        _filter.twoTransferChecked &&
        _filter.threeTransferChecked
      ) {
        return {
          ...state,
          _filter: {
            ..._filter,
            allChecked: true,
            oneTransferChecked: true,
          },
        };
      }
      return {
        ...state,
        _filter: {
          ..._filter,
          oneTransferChecked: !_filter.oneTransferChecked,
        },
      };
    }
    case 'CHECKED_TWO_TRANSFER': {
      if (_filter.allChecked) {
        return {
          ...state,
          _filter: {
            ..._filter,
            allChecked: false,
            twoTransferChecked: false,
          },
        };
      } else if (
        _filter.withoutTransferChecked &&
        _filter.oneTransferChecked &&
        !_filter.twoTransferChecked &&
        _filter.threeTransferChecked
      ) {
        return {
          ...state,
          _filter: { ..._filter, allChecked: true, twoTransferChecked: true },
        };
      }
      return {
        ...state,
        _filter: {
          ..._filter,
          twoTransferChecked: !_filter.twoTransferChecked,
        },
      };
    }
    case 'CHECKED_THREE_TRANSFER': {
      if (_filter.allChecked) {
        return {
          ...state,
          _filter: {
            ..._filter,
            allChecked: false,
            threeTransferChecked: false,
          },
        };
      } else if (
        _filter.withoutTransferChecked &&
        _filter.oneTransferChecked &&
        _filter.twoTransferChecked &&
        !_filter.threeTransferChecked
      ) {
        return {
          ...state,
          _filter: {
            ..._filter,
            allChecked: true,
            threeTransferChecked: true,
          },
        };
      }

      return {
        ...state,
        _filter: {
          ..._filter,
          threeTransferChecked: !_filter.threeTransferChecked,
        },
      };
    }
    case 'CHEAPEST_ACTIVE': {
      return {
        ...state,
        _tab: {
          ..._tab,
          cheapest: true,
          fastest: false,
          optimal: false,
        },
      };
    }
    case 'FASTEST_ACTIVE': {
      return {
        ...state,
        _tab: {
          ..._tab,
          cheapest: false,
          fastest: true,
          optimal: false,
        },
      };
    }
    case 'OPTIMAL_ACTIVE': {
      return {
        ...state,
        _tab: {
          ..._tab,
          cheapest: false,
          fastest: false,
          optimal: true,
        },
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
