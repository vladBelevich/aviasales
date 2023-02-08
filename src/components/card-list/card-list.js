import cardListClasses from './card-list.module.scss';
import Card from '../card';

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

export default CardList;
