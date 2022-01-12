import Navbar from './Navbar';
import Footer from './Footer';
import Social from './Social';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Social />
    </>
  );
};

export default Layout;
