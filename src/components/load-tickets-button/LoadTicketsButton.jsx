import classes from './load-tickets-button.module.scss';
import * as actions from '../../services/redux/Actions';
import { connect } from 'react-redux';

function LoadTicketsButton(props) {
  const { searchID, getDataThunkCreator } = props;
  return (
    <div className={classes.load_tickets__wrapper}>
      <button
        type='button'
        className={classes.load_tickets__button}
        onClick={() => getDataThunkCreator(searchID)}
      >
        Загрузить билеты
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

export default connect(mapStateToProps, actions)(LoadTicketsButton);