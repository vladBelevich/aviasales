import Filter from '../filter';
import Tab from '../tab';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';

const { Content } = Layout;

function MainContent() {
  return (
    <Layout>
      <Sider width='200px' theme='light'>
        <Filter />
      </Sider>
      <Content
        style={{
          backgroundColor: 'white',
        }}
      >
        <Tab />
      </Content>
    </Layout>
  );
}

export default MainContent;
