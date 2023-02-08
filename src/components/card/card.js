import cardClasses from './card.module.scss';
import logo from './airport_logo.png';

function Card() {
  return (
    <div className={cardClasses.card}>
      <div className={cardClasses.title_wrapper}>
        <div className={cardClasses.price}>
          <span>13 400 P</span>
        </div>
        <div className={cardClasses.logo_wrapper}>
          <img alt='Airport logo' src={logo} />
        </div>
      </div>
      <div className={cardClasses.ticket_description}>
        <div className={cardClasses.description_departure}>
          <div className={cardClasses.route}>
            <div className={cardClasses.description_element__title}>
              MOW – HKT
            </div>
            <div className={cardClasses.description_element__value}>
              10:45 – 08:00
            </div>
          </div>
          <div className={cardClasses.length}>
            <div className={cardClasses.description_element__title}>В пути</div>
            <div className={cardClasses.description_element__value}>
              21ч 15м
            </div>
          </div>
          <div className={cardClasses.stops}>
            <div className={cardClasses.description_element__title}>
              2 пересадки
            </div>
            <div className={cardClasses.description_element__value}>
              HKG, JNB
            </div>
          </div>
        </div>
        <div className={cardClasses.description_arrival}>
          <div className={cardClasses.route}>
            <div className={cardClasses.description_element__title}>
              MOW – HKT
            </div>
            <div className={cardClasses.description_element__value}>
              10:45 – 08:00
            </div>
          </div>
          <div className={cardClasses.length}>
            <div className={cardClasses.description_element__title}>В пути</div>
            <div className={cardClasses.description_element__value}>
              21ч 15м
            </div>
          </div>
          <div className={cardClasses.stops}>
            <div className={cardClasses.description_element__title}>
              2 пересадки
            </div>
            <div className={cardClasses.description_element__value}>
              HKG, JNB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
