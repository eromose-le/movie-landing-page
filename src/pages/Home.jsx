import Banner from '../components/Banner';
import Brand from '../components/Brand';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import Layout from '../components/Layout';
import Faq from '../components/Faq';
import Line from '../components/Line';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Brand />
      <SectionA />
      <Line />
      <SectionB />
      <Line />
      <Faq />
    </Layout>
  );
};

export default Home;
