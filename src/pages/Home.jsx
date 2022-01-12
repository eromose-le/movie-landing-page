import { useState } from 'react';
import Banner from '../components/Banner';
import Brand from '../components/Brand';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import Layout from '../components/Layout';
import Faq from '../components/Faq';
import Line from '../components/Line';
import Navbar from '../components/Navbar';

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Navbar open={open} setOpen={setOpen} />

      <div style={!open ? { opacity: '1' } : { opacity: '0.8' }}>
        <Banner />
        <Brand />
        <SectionA />
        <Line />
        <SectionB />
        <Line />
        <Faq />
      </div>
    </Layout>
  );
};

export default Home;
