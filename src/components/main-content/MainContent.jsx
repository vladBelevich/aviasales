import cardClasses from './MainContent.module.scss';
import Filter from '../filter';
import Tab from '../tab';
import Spinner from '../spinner';
import CardList from '../card-list';

function MainContent({ loading }) {
  const spinnerView = loading ? (
    <Spinner className={cardClasses.mainContent_spinner} />
  ) : null;
  return (
    <div className={cardClasses.mainContent_wrapper}>
      <div className={cardClasses.mainContent_aside}>
        {spinnerView}
        <Filter />
      </div>
      <div className={cardClasses.mainContent_center}>
        <Tab />
        <CardList />
      </div>
    </div>
  );
}

export default MainContent;
