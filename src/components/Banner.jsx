import '../styles/banner.css';
import Apple from '../assets/Apple.svg';
import Android from '../assets/Android.svg';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banWrapper">
        <div className="banLeft">
          <p className="banText">
            <Zoom top cascade>
              Discover, search, and play any song featuring voice control.
            </Zoom>
          </p>
          <button className="banButton">Try it free</button>
          <div className="banPlatforms">
            <Pulse>
              <img src={Apple} alt="apple" className="banApple" />
              <img src={Android} alt="android" className="banAndroid" />
            </Pulse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
