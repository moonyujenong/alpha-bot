import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  padding: 79px 16px 120px;

  @media (min-width: 1024px) {
    padding: 185px 16px 140px;
  }
`;

export const AboutIntroTextBox = styled.div`
  margin: 0 auto 80px;
  text-align: center;

  img {
    width: 100%;
    max-width: 195px;
    margin: 0 auto 42px;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: #212222;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #414142;
    display: block;
    max-width: 856px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    margin-bottom: 314px;

    h3 {
      font-size: 40px;
      line-height: 52px;
      margin-bottom: 24px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }

    img {
      margin-bottom: 79px;
      max-width: 390px;
    }
  }
`;

export const AboutBanner = styled.div`
  height: calc((100vw * 640) / 375);
  margin: 0 -16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    height: calc((100vw * 1080) / 1920);
    max-height: 1080px;
  }
`;

export const AboutOtherLinkBox = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    margin-top: 120px;
    flex-direction: row;
    justify-content: center;
    gap: 24px;
  }
`;

export const AboutOtherLink = styled.a`
  border-radius: 16px;
  position: relative;
  padding: 16px 24px;
  background-image: url(/src/features/user/assets/img-about-campaign.png);
  background-size: cover;
  background-position: center;
  height: calc((100vw * 248) / 375);
  overflow: hidden;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #fff;

  &:last-of-type {
    background-image: url(/src/features/user/assets/img-about-launchpad.png);
  }

  p {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (min-width: 1024px) {
    width: calc((100vw * 636) / 1920);
    max-width: 636px;
    height: calc((100vw * 480) / 1920);
    max-height: 480px;
    padding: 48px;
    font-size: 40px;
    line-height: 48px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
