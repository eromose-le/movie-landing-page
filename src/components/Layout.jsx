import Footer from './Footer';
import Social from './Social';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
      <Social />
    </>
  );
};

export default Layout;
