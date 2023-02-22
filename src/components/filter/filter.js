import classes from './filter.module.scss';
import Spinner from '../spinner';
import ErrorNetwork from '../error-network';
import LoadTicketsButtonFilter from '../load-tickets-button-filter/index';
import * as actions from '../../services/redux/actions';
import { connect } from 'react-redux';

function Filter({
  hasData,
  filter,
  data,
  loadingAllData,
  checkedAllAct,
  checkedWithoutTransferAct,
  checkedOneTransferAct,
  checkedTwoTransferAct,
  checkedThreeTransferAct,
  filterData,
  tab,
  networkError,
}) {
  const {
    allChecked,
    withoutTransferChecked,
    oneTransferChecked,
    twoTransferChecked,
    threeTransferChecked,
  } = filter;
  const { cheapest, fastest } = tab;

  if (hasData) {
    let filteredData = [...data];
    if (!withoutTransferChecked) {
      filteredData = filteredData.filter(
        (el) =>
          el.segments[0].stops.length !== 0 || el.segments[1].stops.length !== 0
      );
    }
    if (!oneTransferChecked) {
      filteredData = filteredData.filter(
        (el) => el.segments[0].stops.length + el.segments[1].stops.length !== 1
      );
    }
    if (!twoTransferChecked) {
      filteredData = filteredData.filter(
        (el) => el.segments[0].stops.length + el.segments[1].stops.length !== 2
      );
    }
    if (!threeTransferChecked) {
      filteredData = filteredData.filter(
        (el) => el.segments[0].stops.length + el.segments[1].stops.length !== 3
      );
    }
    if (cheapest) {
      filteredData.sort((elem, nextElem) => elem.price - nextElem.price);
    }
    if (fastest) {
      filteredData.sort(
        (elem, nextElem) =>
          elem.segments[0].duration +
          elem.segments[1].duration -
          (nextElem.segments[0].duration + nextElem.segments[1].duration)
      );
    }
    filterData(filteredData);
  }

  const spinnerView = loadingAllData ? (
    <Spinner className={classes.filter_spinner} />
  ) : null;

  const networkErrorView = networkError ? (
    <div>
      <ErrorNetwork /> <LoadTicketsButtonFilter />
    </div>
  ) : null;
  return (
    <div className={classes.filter}>
      <div className={classes.title_wrapper}>
        <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          checked={allChecked}
          onChange={checkedAllAct}
          className={classes.checkbox_custom}
          type='checkbox'
          id='all'
        />
        <label htmlFor='all'>Все</label>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          className={classes.checkbox_custom}
          type='checkbox'
          id='without_transfer'
          onChange={checkedWithoutTransferAct}
          checked={withoutTransferChecked}
        />
        <label htmlFor='without_transfer'>Без пересадок</label>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          className={classes.checkbox_custom}
          type='checkbox'
          id='one_transfer'
          onChange={checkedOneTransferAct}
          checked={oneTransferChecked}
        />
        <label htmlFor='one_transfer'>1 пересадка</label>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          className={classes.checkbox_custom}
          type='checkbox'
          id='two_transfer'
          onChange={checkedTwoTransferAct}
          checked={twoTransferChecked}
        />
        <label htmlFor='two_transfer'>2 пересадки</label>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          className={classes.checkbox_custom}
          type='checkbox'
          id='three_transfer'
          onChange={checkedThreeTransferAct}
          checked={threeTransferChecked}
        />
        <label htmlFor='three_transfer'>3 пересадки</label>
      </div>
      {networkErrorView}
      {spinnerView}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { _filter: filter, _tab: tab } = state.filterReducer;
  const { loadingAllData, hasData, data, networkError } = state.dataReducer;
  return {
    filter,
    loadingAllData,
    hasData,
    data,
    tab,
    networkError,
  };
};

export default connect(mapStateToProps, actions)(Filter);
