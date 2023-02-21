import cardClasses from './main-content.module.scss';
import Filter from '../filter';
import Tab from '../tab';
import Spinner from '../spinner';
import CardList from '../card-list';

function MainContent({ loadingAllData }) {
  const spinnerView = loadingAllData ? (
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
