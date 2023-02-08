import logo from './logo.svg';
import logoClasses from './logo.module.scss';
import { Row } from 'antd';

function Logo() {
  return (
    <Row justify='center' className={logoClasses.logo_wrapper}>
      <img src={logo} alt='logo' />
    </Row>
  );
}

export default Logo;
