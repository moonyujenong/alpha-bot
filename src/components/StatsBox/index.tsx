import ResentWalletMark from '../ResentWalletMark';
import VerifiedMarkBefore from '../VerifiedMarkBefore';
import {
  BrandingPowerBottom,
  DateBox,
  SlidesBottomLink,
  StatsBoxContainer,
  StatsBoxItem,
  StatusBox,
} from './style';
import timeIcon from '../../assets/icon-time-2-white.svg';
import powerIcon from '../../assets/img-power.png';
import arrowTopFillIcon from '../../assets/icon-fill-arrow-top-white.svg';
import circleRightArrow from '../../assets/icon-arrow-right.svg';

const StatsBox = () => {
  return (
    <StatsBoxContainer>
      <StatsBoxItem>
        <DateBox>
          <img alt="time icon" src={timeIcon} />
          08.24.2024
        </DateBox>

        <h3>Branding Power</h3>
        <BrandingPowerBottom>
          <div className="left">
            <img alt="power icon" src={powerIcon} />
            <p>60</p>
          </div>
          <div className="right">
            {/* TODO : 변동 있을 경우 */}
            <img alt="arrow top fill icon" src={arrowTopFillIcon} />
            Top 10%
            {/* TODO : 변동 없을 경우 */}
            {/* <img alt="minus icon" src={minusWhiteIcon} /> */}
          </div>
        </BrandingPowerBottom>
      </StatsBoxItem>

      <StatsBoxItem className="identity-box">
        {innerWidth >= 1024 && <h3>Identity verification</h3>}

        <StatusBox>
          {/* TODO : 인증 전 */}
          <VerifiedMarkBefore />

          {/* TODO : 인증 후 */}
          {/* <VerifiedMarkAfter /> */}
        </StatusBox>
        <SlidesBottomLink>
          Go verify <img alt="right arrow" src={circleRightArrow} />
        </SlidesBottomLink>
      </StatsBoxItem>

      {innerWidth >= 1024 && (
        <StatsBoxItem className="wallet-item">
          <h3>Recent Wallet</h3>
          {/* TODO : 지갑/소셜 미추가 시 */}
          {/* <span className="no-recent">No recent wallet history.</span> */}

          {/* TODO : 지갑/소셜 추가 시 */}
          <StatusBox className="wallet">
            <ResentWalletMark copyBtn={true} />
          </StatusBox>
        </StatsBoxItem>
      )}
    </StatsBoxContainer>
  );
};

export default StatsBox;
