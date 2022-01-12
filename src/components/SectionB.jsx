import '../styles/sectionB.css';

import Track1 from '../assets/track-1.png';
import Track2 from '../assets/track-2.png';
import Path from '../assets/Path.svg';
import Pulse from 'react-reveal/Pulse';

import Slide from 'react-reveal/Slide';

const SectionB = () => {
  return (
    <div className="sectionB">
      <div className="bWrapper">
        <div className="bLeft">
          <p className="bTitle">
            <Slide top>Hand-picked playlists</Slide>
          </p>
          <p className="bText">
            <Slide left>
              Stream guest playlists curated by the artists you love. Also,
              check out our original playlists hand-picked by our team of
              experts.
            </Slide>
          </p>
          <Slide bottom>
            <div className="bSubText">
              <img src={Path} alt="path" className="bPath" />
              <p className="bPathText"> Discover Radioheat</p>
            </div>
          </Slide>
        </div>
        <div className="bRight">
          <Pulse>
            <img src={Track1} alt="track1" className="bImage" />
            <img src={Track2} alt="track2" className="bImage" />
          </Pulse>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
