import { BottomBtns, BottomButtonWrap, ErrorContainer, VideoWrap } from './style';
import rightStickArrowIcon from '../../../../assets/icon-right-stick-arrow-white.svg';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import sampleShape from '../../assets/sample-error-shape.png';
import shapeVideo from '../../assets/video/error-video.mp4';

const Error = () => {
  const innerWidth = useMediaQuery();

  return (
    <ErrorContainer>
      <VideoWrap>
        {/* video 들어가야 함. 현재 img 는 임시 */}
        <video width={'100%'} autoPlay loop muted preload="auto" playsInline>
          <source src={shapeVideo} type="video/mp4" />
        </video>
      </VideoWrap>
      <h3>We can't find the page you're looking for.</h3>
      <p>
        Don't worry, it looks like something got scattered!
        <br />
        Let us help you tidy up and find your way back.
      </p>

      <BottomButtonWrap>
        <h3>Would you like to:</h3>
        <BottomBtns>
          <button type="button">
            <p>Explore Launchpad</p>
            {innerWidth >= 1024 && <img alt="right stick arrow icon" src={rightStickArrowIcon} />}
          </button>
          <button type="button">
            <p>Return to Home</p>
            {innerWidth >= 1024 && <img alt="right stick arrow icon" src={rightStickArrowIcon} />}
          </button>
        </BottomBtns>
      </BottomButtonWrap>
    </ErrorContainer>
  );
};

export default Error;
