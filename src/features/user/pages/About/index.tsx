import {
  AboutBanner,
  AboutContainer,
  AboutIntroTextBox,
  AboutOtherLink,
  AboutOtherLinkBox,
} from './style';
import estLogo from '../../../../assets/img-est-logo.png';
import aboutBanner from '../../assets/img-about-banner.png';
import aboutBannerMobile from '../../assets/img-about-banner-mobile.png';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import outLinkIcon from '../../../../assets/icon-outlink.svg';

const About = () => {
  const innerWidth = useMediaQuery();

  return (
    <AboutContainer>
      <AboutIntroTextBox>
        <img alt="est logo" src={estLogo} />

        <h3>Our Mission</h3>
        <p>
          Our mission is to unlock your crypto potential and expand web3
          adoption to a global audience. We are dedicated to offering better
          prices with exclusive discounts on token sales tailored to your
          influence and ability in the crypto market. Through engaging in future
          project quests, you can earn rewards and additional benefits. Plus, we
          aim to foster crypto networking by connecting you with a network of
          like-minded individuals, helping you thrive in the decentralized world
        </p>
      </AboutIntroTextBox>

      <AboutBanner>
        <img
          alt="banner img"
          src={innerWidth >= 1024 ? aboutBanner : aboutBannerMobile}
        />
      </AboutBanner>

      <AboutOtherLinkBox>
        <AboutOtherLink>
          <p>
            Campaign <img alt="outlink icon" src={outLinkIcon} />
          </p>
        </AboutOtherLink>
        <AboutOtherLink>
          <p>
            Launchpad <img alt="outlink icon" src={outLinkIcon} />
          </p>
        </AboutOtherLink>
      </AboutOtherLinkBox>
    </AboutContainer>
  );
};

export default About;
