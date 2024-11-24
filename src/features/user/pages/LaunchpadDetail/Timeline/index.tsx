import {
  DistributionBox,
  TimelineBox,
  TimelineInfo,
  TimelineList,
} from './style';
import checkCircleIcon from '../../../../../assets/icon-check-broken-circle.svg';
import useMediaQuery from '../../../../../hooks/useMediaQuery';

const Timeline = () => {
  const innerWidth = useMediaQuery();

  return (
    <TimelineBox>
      {innerWidth < 1024 && <h2>Timeline</h2>}

      <TimelineList>
        <li>
          <p className="number">01</p>
          <TimelineInfo>
            <p>08.10.2024</p>
            <b>Registration Start</b>
          </TimelineInfo>
        </li>
        <li>
          <p className="number">02</p>
          <TimelineInfo>
            <p>09.10.2024</p>
            <b>Token Sale Start</b>
          </TimelineInfo>
        </li>
        <li>
          <p className="number">03</p>
          <TimelineInfo>
            <p>09.10.2024</p>
            <b>Token Sale Start</b>
          </TimelineInfo>
        </li>
        <li>
          <p className="number">04</p>
          <TimelineInfo>
            <p>10.31.2025</p>
            <b>Token Distribution</b>
          </TimelineInfo>
        </li>
      </TimelineList>

      <DistributionBox>
        <h3>TGE and Distribution</h3>
        <ul>
          <li>
            <img alt="check circle icon" src={checkCircleIcon} />
            0.10% TGE
          </li>
          <li>
            <img alt="check circle icon" src={checkCircleIcon} />
            12 months cliff
          </li>
          <li>
            <img alt="check circle icon" src={checkCircleIcon} />
            10% monthly for 9 months01 USDT
          </li>
        </ul>
      </DistributionBox>
    </TimelineBox>
  );
};

export default Timeline;
