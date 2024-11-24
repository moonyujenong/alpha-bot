import { FcfsText, SalesTimeBox, SalesTimeTitle, TimesBox } from './style';
import timeIcon from '../../../../../assets/icon-time-blue.svg';
import 'react-tooltip/dist/react-tooltip.css';

const SalesTime = () => {
  return (
    <SalesTimeBox>
      <SalesTimeTitle>
        <p>Upcoming in</p>
      </SalesTimeTitle>

      <TimesBox>
        <li>
          <b>107</b>
          <p>Days</p>
        </li>
        <li>
          <b>23</b>
          <p>Hours</p>
        </li>
        <li>
          <b>38</b>
          <p>Minutes</p>
        </li>
        <li>
          <b>06</b>
          <p>Seconds</p>
        </li>
      </TimesBox>
      <FcfsText>
        <img alt="time icon" src={timeIcon} />
        First Come, First Served
      </FcfsText>
    </SalesTimeBox>
  );
};

export default SalesTime;
