import classes from './Filter.module.scss';
import Spinner from '../spinner';
import * as actions from '../../services/redux/Actions';
import { connect } from 'react-redux';

function Filter({
  hasData,
  filter,
  data,
  loading,
  checkedAllAct,
  checkedWithoutTransferAct,
  checkedOneTransferAct,
  checkedTwoTransferAct,
  checkedThreeTransferAct,
  filterData,
  tab,
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
    let filteredData = [];
    let checkedData = [];
    if (withoutTransferChecked) {
      checkedData = data.filter(
        (el) =>
          el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0
      );
      filteredData = [...filteredData, ...checkedData];
    }
    if (oneTransferChecked) {
      checkedData = data.filter(
        (el) =>
          el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1
      );
      filteredData = [...filteredData, ...checkedData];
    }
    if (twoTransferChecked) {
      checkedData = data.filter(
        (el) =>
          el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2
      );
      filteredData = [...filteredData, ...checkedData];
    }
    if (threeTransferChecked) {
      checkedData = data.filter(
        (el) =>
          el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3
      );
      filteredData = [...filteredData, ...checkedData];
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
    filteredData = [...new Set(filteredData)];
    filterData(filteredData);
  }

  const spinnerView = loading ? (
    <Spinner className={classes.filter_spinner} />
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
      {spinnerView}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { _filter: filter, _tab: tab } = state.filterReducer;
  const { loading, hasData, data, networkError } = state.dataReducer;
  return {
    filter,
    loading,
    hasData,
    data,
    tab,
    networkError,
  };
};

export default connect(mapStateToProps, actions)(Filter);
