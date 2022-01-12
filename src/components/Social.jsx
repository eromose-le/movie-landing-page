import '../styles/social.css';
import IG from '../assets/socials/instagram.svg';
import TW from '../assets/socials/twitter.svg';
import FB from '../assets/socials/facebook.svg';
import RubberBand from 'react-reveal/RubberBand';
const Social = () => {
  return (
    <div className="social">
      <div className="socialWrapper">
        <RubberBand>
          <div className="socialIconContainer">
            <img src={IG} alt="ig" className="socialIcon" />
          </div>
          <div className="socialIconContainer">
            <img src={FB} alt="fb" className="socialIcon" />
          </div>

          <div className="socialIconContainer">
            <img src={TW} alt="tw" className="socialIcon" />
          </div>
        </RubberBand>
      </div>
    </div>
  );
};

export default Social;
