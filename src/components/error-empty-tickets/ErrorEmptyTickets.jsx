import classes from './ErrorEmptyTickets.module.scss';
import { Alert } from 'antd';

function ErrorEmptyTickets() {
  return (
    <Alert
      message='Ошибка!'
      description='Нет билетов согласно заданным условиям фильтра!'
      type='error'
      showIcon
      className={classes.alert_wrapper}
    />
  );
}

export default ErrorEmptyTickets;
