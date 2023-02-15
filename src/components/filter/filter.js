import classes from './filter.module.scss';
import * as actions from '../../services/redux/actions';
import { connect } from 'react-redux';

function Filter({
  filter,
  checkedAllAct,
  checkedWithoutTransferAct,
  checkedOneTransferAct,
  checkedTwoTransferAct,
  checkedThreeTransferAct,
}) {
  const {
    allChecked,
    withoutTransferChecked,
    oneTransferChecked,
    twoTransferChecked,
    threeTransferChecked,
  } = filter;
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
    </div>
  );
}

const mapStateToProps = (state) => {
  const { filter } = state;
  return {
    filter,
  };
};

export default connect(mapStateToProps, actions)(Filter);
