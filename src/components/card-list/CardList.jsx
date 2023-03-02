import cardListClasses from './CardList.module.scss';
import Card from '../card';
import Spinner from '../spinner';
import ShowMoreButton from '../show-more-button';
import ErrorEmptyTickets from '../error-empty-tickets';
import { connect } from 'react-redux';

function CardList({
  filteredData,
  numberOfTickets,
  loadingID,
  hasFilteredData,
  alertEmptyData,
}) {
  let cards;

  if (hasFilteredData) {
    const cardsData = [];
    for (let i = 0; i < numberOfTickets; i += 1) {
      const newArr = filteredData[i];
      newArr.key = filteredData.indexOf(filteredData[i]);
      cardsData.push(newArr);
    }
    cards = cardsData.map((cardData) => (
      <Card data={cardData} key={cardData.key} />
    ));
  }

  const alertView = alertEmptyData ? <ErrorEmptyTickets /> : null;
  const cardsView = hasFilteredData ? cards : null;
  const showMoreButtonView = hasFilteredData ? <ShowMoreButton /> : null;
  const spinner = loadingID ? <Spinner /> : null;

  return (
    <div className={cardListClasses.cardList_wrapper}>
      {cardsView}
      {spinner}
      {showMoreButtonView}
      {alertView}
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    filteredData,
    numberOfTickets,
    loadingID,
    hasFilteredData,
    alertEmptyData,
  } = state.dataReducer;
  return {
    filteredData,
    numberOfTickets,
    loadingID,
    hasFilteredData,
    alertEmptyData,
  };
};

export default connect(mapStateToProps)(CardList);
