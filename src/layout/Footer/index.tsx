import {
  FooterContainer,
  FooterCopyRight,
  FooterInner,
  FooterLogo,
  FooterSns,
  FooterTerms,
  FooterTermsLink,
} from './style.ts';
import logoWhite from '../../assets/logo-text-white.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconDiscord from '../../assets/icon-discord.svg';
import iconTelegram from '../../assets/icon-telegram.svg';
import useMediaQuery from '../../hooks/useMediaQuery.ts';

const Footer = () => {
  const innerWidth = useMediaQuery();

  return (
    <FooterContainer>
      <FooterInner>
        <FooterLogo>
          <img alt="logo white" src={logoWhite} />
        </FooterLogo>

        <FooterSns>
          <li>
            <a href="#!">
              <img alt="twitter" src={iconTwitter} />
            </a>
          </li>
          <li>
            <a href="#!">
              <img alt="discord" src={iconDiscord} />
            </a>
          </li>
          <li>
            <a href="#!">
              <img alt="telegram" src={iconTelegram} />
            </a>
          </li>
        </FooterSns>
        <FooterTerms>
          <FooterTermsLink>Terms of Service</FooterTermsLink>
          <FooterTermsLink>Privacy Policy</FooterTermsLink>
          <FooterTermsLink>Contact us</FooterTermsLink>
          {/* {innerWidth >= 1024 && (
            <FooterCopyRight>
              © Alphabot, Inc. All Rights Reserved.
            </FooterCopyRight>
          )} */}
        </FooterTerms>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
