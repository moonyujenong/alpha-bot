import {
  CalculateMobile,
  ContentsFlexWrap,
  LaunchpadDetailContainer,
  LaunchpadDetailInner,
  RadiusLabel,
  RadiusLabelBox,
  SocialLinkBoxInBanner,
  SocialLinkList,
  TokenExplain,
  TokenInfoBox,
  TopBanner,
  TotalArea,
} from './style';
import bannerImgMobile from '../../assets/img-launchpad-detail-banner-mobile.png';
import bannerImg from '../../assets/img-launchpad-detail-banner.png';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import twitterIcon from '../../../../assets/icon-twitter-white.svg';
import tellegramIcon from '../../../../assets/icon-tellegram-white.svg';
import discordIcon from '../../../../assets/icon-discord-white.svg';
import youtubeIcon from '../../../../assets/icon-youtube-white.svg';
import globalIcon from '../../../../assets/icon-global-white.svg';
import sampleTokenIcon from '../../../../assets/sample/sample-token.svg';
import verifiedFillIcon from '../../../../assets/icon-verified-fill.svg';
import topArrowWhiteIcon from '../../../../assets/icon-fill-arrow-top-white.svg';
import SalesTime from './SalesTime';
import Overview from './Overview';
import Details from './Details';
import Timeline from './Timeline';
import CalculateDetail from './CalculateDetail';
import { useState } from 'react';
import CalculateDetailQuantity from './CalculateDetailQuantity';
import BlackButton from '../../../../components/BlackButton';
import StatusCheck from './StatusCheck';
import MobileTabs from './MobileTabs';

const Launchpad = () => {
  const innerWidth = useMediaQuery();
  const [isCalculateMobile, setIsCalculateMobile] = useState(false);

  const handleCalculateMobile = () => {
    setIsCalculateMobile(!isCalculateMobile);
  };

  return (
    <LaunchpadDetailContainer>
      <TopBanner>
        {innerWidth >= 1024 ? <img alt="banner img" src={bannerImg} /> : <img alt="banner img" src={bannerImgMobile} />}
        <SocialLinkBoxInBanner>
          <SocialLinkList>
            <li>
              <a href="#!">
                <img alt="twitter" src={twitterIcon} />
              </a>
            </li>
            <li>
              <a href="#!">
                <img alt="tellegram" src={tellegramIcon} />
              </a>
            </li>
            <li>
              <a href="#!">
                <img alt="discord" src={discordIcon} />
              </a>
            </li>
            <li>
              <a href="#!">
                <img alt="youtube" src={youtubeIcon} />
              </a>
            </li>
            <li>
              <a href="#!">
                <img alt="global" src={globalIcon} />
              </a>
            </li>
          </SocialLinkList>
        </SocialLinkBoxInBanner>
      </TopBanner>

      <LaunchpadDetailInner>
        <ContentsFlexWrap>
          <div className="left">
            <TokenInfoBox>
              <img alt="token thumbnail" src={sampleTokenIcon} />

              <span>
                The EST
                <img alt="verifiy" src={verifiedFillIcon} />
              </span>

              <RadiusLabelBox>
                <RadiusLabel className="gradient">
                  60P <img alt="arrow top icon" src={topArrowWhiteIcon} />
                </RadiusLabel>
                <RadiusLabel>Category A</RadiusLabel>
                <RadiusLabel className="access">Early access</RadiusLabel>
              </RadiusLabelBox>

              <h2 className="title">Token Title</h2>
            </TokenInfoBox>
            <TokenExplain>
              Body text for whatever you’d like to suggest. Add main takeaway points, quotes, anecdotes, or even a very
              very short story.
            </TokenExplain>

            {innerWidth >= 1024 && (
              <>
                <StatusCheck />
                <Overview />
                <Details />
              </>
            )}
          </div>

          <div className="right">
            <SalesTime />
            {/* TODO : register 전 인 경우 */}
            <BlackButton title={'Register Now'} mt={24} />
            {innerWidth >= 1024 ? (
              <>
                {/* TODO : register 후 인 경우 */}
                {/* pc */}
                <CalculateDetail />
                <Timeline />
              </>
            ) : (
              <>
                {/* mobile */}
                <TotalArea>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Total Price</span>
                    <p className="price">
                      <b>0</b> USDT
                    </p>
                  </div>
                  <button onClick={handleCalculateMobile} type="button">
                    Buy Now
                  </button>
                </TotalArea>

                <CalculateMobile className={isCalculateMobile === true ? 'show' : ''}>
                  <div className="inner">
                    <CalculateDetail />
                  </div>
                </CalculateMobile>

                {/* TODO : mobile - quantity 창 */}
                {/* <CalculateDetailQuantity /> */}

                <MobileTabs />
              </>
            )}
          </div>
        </ContentsFlexWrap>
      </LaunchpadDetailInner>
    </LaunchpadDetailContainer>
  );
};

export default Launchpad;
