import '../styles/footer.css';
import Logo from '../assets/Logo.svg';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="fWrapper">
        <div className="fLeft">
          <Jump>
            <img src={Logo} alt="logo" className="fLogo" />
          </Jump>
          <p className="fLeftText">
            <Zoom top cascade>
              Radiohead is the first global music streaming service with high
              fidelity sound, hi-def video quality, along with expertly curated
              playlists and original content making it a trusted source for
              music and culture.
            </Zoom>
          </p>
        </div>
        <div className="fRight">
          <div className="fRightContainer">
            {/* 1 */}
            <div className="fBox">
              <p className="fRightTitle">Get Started</p>
              <ul className="fItems">
                <li className="fItem">Get Started</li>
                <li className="fItem">Playlist Import</li>
                <li className="fItem">Supported Devices</li>
                <li className="fItem">Get Support</li>
              </ul>
            </div>
            {/* 1 */}
            {/* 1 */}
            <div className="fBox">
              <p className="fRightTitle">Discover</p>
              <ul className="fItems">
                <li className="fItem">About</li>
                <li className="fItem">Magazine</li>
              </ul>
            </div>
            {/* 1 */}
            {/* 1 */}
            <div className="fBox">
              <p className="fRightTitle">Account</p>
              <ul className="fItems">
                <li className="fItem">Sign Up</li>
                <li className="fItem">Redeem Voucher</li>
                <li className="fItem">Redeem Giftcard</li>
                <li className="fItem">Manage Account</li>
                <li className="fItem">Store</li>
              </ul>
            </div>
            {/* 1 */}
            {/* 1 */}
            <div className="fBox">
              <p className="fRightTitle">Company</p>
              <ul className="fItems">
                <li className="fItem">Partners</li>
                <li className="fItem">Careers</li>
                <li className="fItem">Press</li>
              </ul>
            </div>
            {/* 1 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
