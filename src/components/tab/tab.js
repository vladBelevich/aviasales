import classes from './tab.module.scss';
import * as actions from '../../services/redux/actions';
import { connect } from 'react-redux';

function Tab({ tab, tabCheapestAct, tabFastestAct, tabOptimalAct }) {
  const { cheapest, fastest, optimal } = tab;
  const activeButton = `${classes.tab_button} ${classes.clicked}`;
  const inactiveButton = `${classes.tab_button}`;
  const cheapestButtonClass = cheapest ? activeButton : inactiveButton;
  const fastestButtonClass = fastest ? activeButton : inactiveButton;
  const optimalButtonClass = optimal ? activeButton : inactiveButton;

  return (
    <div className={classes.tab_wrapper}>
      <div className={classes.tab_panel}>
        <button
          type='button'
          className={cheapestButtonClass}
          onClick={() => tabCheapestAct()}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          type='button'
          className={fastestButtonClass}
          onClick={() => tabFastestAct()}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button
          type='button'
          className={optimalButtonClass}
          onClick={() => tabOptimalAct()}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { tab } = state;
  return {
    tab,
  };
};

export default connect(mapStateToProps, actions)(Tab);
