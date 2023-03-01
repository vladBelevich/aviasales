import classes from './LoadTicketsButtonFilter.module.scss';
import * as actions from '../../services/redux/Actions';
import { connect } from 'react-redux';

function LoadTicketsButtonFilter({ searchID, getDataThunkCreator }) {
  return (
    <div className={classes.load_tickets_filter_wrapper}>
      <button
        type='button'
        className={classes.load_tickets_filter_button}
        onClick={() => getDataThunkCreator(searchID)}
      >
        Попробовать еще раз
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { searchID } = state.dataReducer;
  return {
    searchID,
  };
};

export default connect(mapStateToProps, actions)(LoadTicketsButtonFilter);
