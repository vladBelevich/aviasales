import classes from './filter.module.scss';

function Filter() {
  return (
    <div className={classes.filter}>
      <div className={classes.title_wrapper}>
        <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input className={classes.checkbox_custom} type='checkbox' id='all' />
        <label htmlFor='all'>Все</label>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          className={classes.checkbox_custom}
          type='checkbox'
          id='without_transfer'
        />
        <label htmlFor='without_transfer'>Без пересадок</label>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          className={classes.checkbox_custom}
          type='checkbox'
          id='one_transfer'
        />
        <label htmlFor='one_transfer'>1 пересадка</label>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          className={classes.checkbox_custom}
          type='checkbox'
          id='two_transfer'
        />
        <label htmlFor='two_transfer'>2 пересадки</label>
      </div>
      <div className={classes.checkbox_wrapper}>
        <input
          className={classes.checkbox_custom}
          type='checkbox'
          id='three_transfer'
        />
        <label htmlFor='three_transfer'>3 пересадки</label>
      </div>
    </div>
  );
}

export default Filter;
