import tabsClasses from './tab.module.scss';

import CardList from '../card-list';

function Tab() {
  return (
    <div className={tabsClasses.tab_wrapper}>
      <div className={tabsClasses.tab_panel}>
        <button
          type='button'
          className={`${tabsClasses.tab_button} ${tabsClasses.left}`}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          type='button'
          className={`${tabsClasses.tab_button} ${tabsClasses.clicked}`}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button
          type='button'
          className={`${tabsClasses.tab_button} ${tabsClasses.right} `}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
      <CardList />
    </div>
  );
}

export default Tab;
