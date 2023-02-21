import cardListClasses from './card-list.module.scss';
import Card from '../card';
import Spinner from '../spinner';
import LoadTickets from '../load-tickets-button';
import ShowMoreButton from '../show-more-button';
import ErrorEmptyTickets from '../error-empty-tickets';
import { connect } from 'react-redux';

function CardList({
  filteredData,
  numberOfTickets,
  loading,
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
  const spinner = loading ? <Spinner /> : null;
  const loadTicketsButton = !hasFilteredData ? <LoadTickets /> : null;

  return (
    <div className={cardListClasses.cardList_wrapper}>
      {cardsView}
      {spinner}
      {loadTicketsButton}
      {showMoreButtonView}
      {alertView}
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    filteredData,
    numberOfTickets,
    loading,
    hasData,
    hasFilteredData,
    alertEmptyData,
    tab,
    filter,
    data,
  } = state;
  return {
    filteredData,
    numberOfTickets,
    loading,
    hasData,
    hasFilteredData,
    alertEmptyData,
    tab,
    filter,
    data,
  };
};

export default connect(mapStateToProps)(CardList);
