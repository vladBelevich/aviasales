// eslint-disable-next-line
export const defaultState = {
  filter: {
    allChecked: true,
    withoutTransferChecked: true,
    oneTransferChecked: true,
    twoTransferChecked: true,
    threeTransferChecked: true,
  },
  tab: {
    cheapest: false,
    fastest: true,
    optimal: false,
  },
  filteredData: [],
  hasFilteredData: false,
  data: [],
  loading: true,
  loadingAllData: false,
  searchID: null,
  numberOfTickets: 5,
  hasData: false,
  gettingData: false,
  alertEmptyData: false,
};
