import '../styles/brand.css';
import BB from '../assets/brands/BlackBerry.svg';
import PS from '../assets/brands/playstation.svg';
import RB from '../assets/brands/redbull.svg';
import SS from '../assets/brands/SENNHEISER.svg';
import TT from '../assets/brands/tiktok.svg';
import Fade from 'react-reveal/Fade';

const Brand = () => {
  return (
    <div className="brand">
      <Fade left cascade>
        <div className="brandWrapper">
          <img src={BB} alt="BA" className="brandImg" />
          <img src={PS} alt="TCC" className="brandImg" />
          <img src={RB} alt="TCC" className="brandImg" />
          <img src={SS} alt="Brand1" className="brandImg" />
          <img src={TT} alt="Brand2" className="brandImg" />
        </div>
      </Fade>
    </div>
  );
};

export default Brand;
