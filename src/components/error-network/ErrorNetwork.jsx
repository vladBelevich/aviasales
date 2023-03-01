import classes from './ErrorNetwork.module.scss';
import { Alert } from 'antd';

function ErrorNetwork() {
  return (
    <Alert
      message='Сетевая ошибка!'
      description='Невозможно загрузить данные. Попробуйте еще раз'
      type='error'
      showIcon
      className={classes.alert_wrapper}
    />
  );
}

export default ErrorNetwork;
