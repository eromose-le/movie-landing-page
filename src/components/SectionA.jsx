import '../styles/sectionA.css';

import Image1 from '../assets/imgs/img-1.svg';
import Image2 from '../assets/imgs/img-2.svg';
import Image3 from '../assets/imgs/img-3.svg';
import Image4 from '../assets/imgs/img-4.svg';
import Image5 from '../assets/imgs/img-5.svg';
import Image6 from '../assets/imgs/img-6.svg';
import Path from '../assets/Path.svg';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const SectionA = () => {
  return (
    <div className="sectionA">
      <div className="aWrapper">
        <Fade top big cascade>
          <div className="aLeft">
            <img src={Image1} alt="image1" className="aImage" />
            <img src={Image2} alt="image2" className="aImage" />
            <img src={Image3} alt="image3" className="aImage" />
            <img src={Image4} alt="image4" className="aImage" />
            <img src={Image5} alt="image5" className="aImage" />
            <img src={Image6} alt="image6" className="aImage" />
          </div>
        </Fade>
        <div className="aRight">
          <p className="aTitle">
            <Slide top>The music you love</Slide>
          </p>
          <p className="aText">
            <Slide right>
              With over 60 million tracks and tons of exclusive interviews and
              videos, TIDAL is here to bring you closer to the artists you
              listen to.
            </Slide>
          </p>
          <Slide bottom>
            <div className="aSubText">
              <img src={Path} alt="path" className="aPath" />
              <p className="aPathText">More Featured Content</p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
