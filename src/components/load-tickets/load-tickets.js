import classes from './load-tickets.module.scss';
import * as actions from '../../services/redux/actions';
import { connect } from 'react-redux';

function LoadTickets(props) {
  const { searchID, getDataThunkCreator } = props;
  console.log(searchID);
  return (
    <button
      type='button'
      className={classes.load_tickets}
      onClick={() => getDataThunkCreator(searchID)}
    >
      Загрузить билеты
    </button>
  );
}

const mapStateToProps = (state) => {
  const { searchID } = state;
  return {
    searchID,
  };
};

export default connect(mapStateToProps, actions)(LoadTickets);
