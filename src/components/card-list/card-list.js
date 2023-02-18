import cardListClasses from './card-list.module.scss';
import Card from '../card';
import Spinner from '../spinner';
import LoadTickets from '../load-tickets';
import { connect } from 'react-redux';

function CardList({ data, numberOfTickets, loading, hasData }) {
  let cards;
  if (hasData) {
    const cardsData = [];
    for (let i = 0; i < numberOfTickets; i += 1) {
      const newArr = data[i];
      newArr.key = data.indexOf(data[i]);
      cardsData.push(newArr);
    }
    cards = cardsData.map((cardData) => (
      <Card data={cardData} key={cardData.key} />
    ));
  }
  const cardsView = hasData ? cards : null;
  const spinner = loading ? <Spinner /> : null;
  const loadTicketsButton = !hasData ? <LoadTickets /> : null;

  return (
    <div className={cardListClasses.cardList_wrapper}>
      {cardsView}
      {spinner}
      {loadTicketsButton}
      <LoadTickets />
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  numberOfTickets: state.numberOfTickets,
  loading: state.loading,
  hasData: state.hasData,
});
export default connect(mapStateToProps)(CardList);
