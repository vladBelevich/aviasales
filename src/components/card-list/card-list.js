import cardListClasses from './card-list.module.scss';
import Card from '../card';
// import { connect } from 'react-redux';

function CardList() {
  return (
    <div className={cardListClasses.cardList_wrapper}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   dispatch;
// };
//
// export default connect(mapDispatchToProps)(CardList);

export default CardList;
