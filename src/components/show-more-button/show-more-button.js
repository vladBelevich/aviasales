import classes from './show-more-button.module.scss';
import * as actions from '../../services/redux/actions';
import { connect } from 'react-redux';

function ShowMoreButton({ showMoreTickets }) {
  return (
    <div className={classes.show_more_tickets__wrapper}>
      <button
        className={classes.show_more_tickets__button}
        type='button'
        onClick={() => showMoreTickets()}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
}

export default connect(null, actions)(ShowMoreButton);
