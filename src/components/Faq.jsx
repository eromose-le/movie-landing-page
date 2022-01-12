import '../styles/faq.css';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
const Faq = () => {
  return (
    <div className="faq">
      <div className="faqWrapper">
        <Slide top>
          <h1 className="faqTitle">Why radiohead?</h1>
        </Slide>
        <div className="faqContents">
          <Zoom left cascade>
            {/* 1 */}
            <div className="faqContent">
              <div className="faqTop">
                <div className="faqLine"></div>
                <p className="faqTitleText">A world of music in your pocket.</p>
              </div>
              <p className="faqText">
                Find new loves and old favourites from over 56 million tracks.
              </p>
            </div>
            {/* 1 */}
            {/* 1 */}
            <div className="faqContent">
              <div className="faqTop">
                <div className="faqLine"></div>
                <p className="faqTitleText">Craft your collection.</p>
              </div>
              <p className="faqText">
                Create playlists from millions of tracks and take them with you
                wherever you go.
              </p>
            </div>
            {/* 1 */}
            {/* 1 */}
            <div className="faqContent">
              <div className="faqTop">
                <div className="faqLine"></div>
                <p className="faqTitleText">No WiFi? No problem.</p>
              </div>
              <p className="faqText">
                With Deezer Premium, you don't need to be connected to enjoy
                your favourite tracks.
              </p>
            </div>
            {/* 1 */}
            {/* 1 */}
            <div className="faqContent">
              <div className="faqTop">
                <div className="faqLine"></div>
                <p className="faqTitleText">Made for you.</p>
              </div>
              <p className="faqText">
                Flow gets to know what you like and what you don't. Discover
                your personal soundtrack.
              </p>
            </div>
            {/* 1 */}
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Faq;
