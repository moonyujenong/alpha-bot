import {
  BlurPannel,
  ItemBox,
  ItemBoxWrap,
  PowerStateLabel,
  StatusCheckContainer,
  VerifyText,
} from './style';
import pinkPowerImg from '../../../../../assets/img-pink-power.png';
import powerImg from '../../../../../assets/img-power.png';
import circleChartImg from '../../../../../assets/img-circle-chart.png';
import searchDocuImg from '../../../../../assets/img-search-docu.png';
import circleIcon from '../../../../../assets/icon-circle-down.svg';
import circleRightArrow from '../../../../../assets/icon-arrow-right.svg';
import circleCheckBlueIcon from '../../../../../assets/icon-circle-check-blue.svg';
import warningIcon from '../../../../../assets/icon-warning-red.svg';
import VerifiedMarkBefore from '../../../../../components/VerifiedMarkBefore';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import blurPannelMobile from '../../../assets/img-status-check-mobile.png';
import blurPannelPc from '../../../assets/img-status-check-pc.png';

const StatusCheck = () => {
  const innerWidth = useMediaQuery();

  return (
    <StatusCheckContainer>
      <div className="box">
        <h3>Requirement</h3>

        <ItemBox className="black">
          <div style={{ flex: '1' }}>
            <h3 className="category-name">Branding Power</h3>
            <div className="point-box">
              <p className="point">60P</p>
            </div>
          </div>
          <img alt="3d icon" src={pinkPowerImg} />
        </ItemBox>
      </div>
      <div className="box">
        <h3>My Status Check</h3>
        <a href="#!" className="login-link">
          Login{' '}
          <img
            alt=""
            src={circleIcon}
            style={{ transform: 'rotate(-90deg)' }}
          />
        </a>

        <ItemBoxWrap>
          {/* TODO : My Status Check_null 인 경우 노출 */}
          {/* <BlurPannel>
            {innerWidth >= 1024 ? (
              <img alt="text img pc" src={blurPannelPc} />
            ) : (
              <img alt="text img mobile" src={blurPannelMobile} />
            )}
          </BlurPannel> */}

          <ItemBox className="gray">
            <div style={{ flex: '1' }}>
              <h3 className="category-name">My Branding Power</h3>
              <div className="point-box">
                <p className="point blue">60P</p>
                <PowerStateLabel>
                  <img alt="label icon" src={circleCheckBlueIcon} />
                  Qualified
                </PowerStateLabel>
              </div>
            </div>
            <img alt="3d icon" src={powerImg} />
          </ItemBox>
          <ItemBox className="gray">
            <div style={{ flex: '1' }}>
              <h3 className="category-name">My allocation</h3>
              <div className="point-box">
                <p className="point black">10</p>
              </div>
            </div>
            <img alt="3d icon" src={circleChartImg} />
          </ItemBox>
          <ItemBox className="gray">
            <div style={{ flex: '1' }}>
              <h3 className="category-name">KYC Verification</h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: 'calc(100% - 26px)',
                }}
              >
                {innerWidth >= 1024 && <VerifiedMarkBefore />}
                <VerifyText>
                  Go verify <img alt="right arrow" src={circleRightArrow} />
                </VerifyText>
              </div>
            </div>
            <img alt="3d icon" src={searchDocuImg} />
          </ItemBox>
        </ItemBoxWrap>
      </div>
    </StatusCheckContainer>
  );
};

export default StatusCheck;
