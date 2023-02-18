import cardClasses from './card.module.scss';
import logo from './airport_logo.png';
import { addMinutes, format } from 'date-fns';

function Card({ data }) {
  function timeInMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const restMinutes = minutes - hours * 60;
    return `${hours}ч ${restMinutes}м`;
  }
  function numberOfTransfers(arr) {
    switch (arr.length) {
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      case 3:
        return '3 пересадки';
      default:
        return 'Нет пересадок';
    }
  }
  function flyTime(startTime, durationFly) {
    const finish = addMinutes(new Date(startTime), durationFly);
    return format(finish, 'kk:mm');
  }
  const rebuildedData = {
    price: data.price,
    forwardOrigin: data.segments[0].origin,
    forwardDestination: data.segments[0].destination,
    forwardFlyStart: format(new Date(data.segments[0].date), 'kk:mm'),
    forwardFlyFinish: flyTime(data.segments[0].date, data.segments[0].duration),
    forwardTimeFly: timeInMinutes(data.segments[0].duration),
    forwardNumberOfTransfers: numberOfTransfers(data.segments[0].stops),
    forwardStops: data.segments[0].stops.join(', '),
    backwardOrigin: data.segments[1].origin,
    backwardDestination: data.segments[1].destination,
    backwardFlyStart: format(new Date(data.segments[1].date), 'kk:mm'),
    backwardFlyFinish: flyTime(
      data.segments[1].date,
      data.segments[1].duration
    ),
    backwardTimeFly: timeInMinutes(data.segments[1].duration),
    backwardNumberOfTransfers: numberOfTransfers(data.segments[1].stops),
    backwardStops: data.segments[1].stops.join(', '),
  };
  const {
    price,
    forwardOrigin,
    forwardDestination,
    forwardFlyStart,
    forwardFlyFinish,
    forwardTimeFly,
    forwardNumberOfTransfers,
    forwardStops,
    backwardOrigin,
    backwardDestination,
    backwardFlyStart,
    backwardFlyFinish,
    backwardTimeFly,
    backwardNumberOfTransfers,
    backwardStops,
  } = rebuildedData;
  return (
    <div className={cardClasses.card}>
      <div className={cardClasses.title_wrapper}>
        <div className={cardClasses.price}>
          <span>{price} P</span>
        </div>
        <div className={cardClasses.logo_wrapper}>
          <img alt='Airport logo' src={logo} />
        </div>
      </div>
      <div className={cardClasses.ticket_description}>
        <div className={cardClasses.description_departure}>
          <div className={cardClasses.route}>
            <div className={cardClasses.description_element__title}>
              {forwardOrigin} – {forwardDestination}
            </div>
            <div className={cardClasses.description_element__value}>
              {forwardFlyStart} – {forwardFlyFinish}
            </div>
          </div>
          <div className={cardClasses.length}>
            <div className={cardClasses.description_element__title}>В пути</div>
            <div className={cardClasses.description_element__value}>
              {forwardTimeFly}
            </div>
          </div>
          <div className={cardClasses.stops}>
            <div className={cardClasses.description_element__title}>
              {forwardNumberOfTransfers}
            </div>
            <div className={cardClasses.description_element__value}>
              {forwardStops}
            </div>
          </div>
        </div>
        <div className={cardClasses.description_arrival}>
          <div className={cardClasses.route}>
            <div className={cardClasses.description_element__title}>
              {backwardOrigin} – {backwardDestination}
            </div>
            <div className={cardClasses.description_element__value}>
              {backwardFlyStart} – {backwardFlyFinish}
            </div>
          </div>
          <div className={cardClasses.length}>
            <div className={cardClasses.description_element__title}>В пути</div>
            <div className={cardClasses.description_element__value}>
              {backwardTimeFly}
            </div>
          </div>
          <div className={cardClasses.stops}>
            <div className={cardClasses.description_element__title}>
              {backwardNumberOfTransfers}
            </div>
            <div className={cardClasses.description_element__value}>
              {backwardStops}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
