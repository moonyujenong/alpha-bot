import styled from '@emotion/styled';

import MainBannerImage from '../../assets/img-main-banner.png';
import secTwoBlurTextByOne from '../../assets/main-kol-1-blur-text.svg';
import secTwoBlurTextByTwo from '../../assets/main-kol-2-blur-text.svg';

// MainContents Component
export const MainContentsContainer = styled.div`
  .container {
    width: 100%;
    max-width: 1296px;
    margin: 0 auto;
  }
`;

// MainBanner Component
export const BannerContainer = styled.div`
  .banner-image {
    background-image: url(${MainBannerImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: calc((100vw * 1136) / 1920);
    max-height: 1136px;

    .banner-text {
      padding: 0 16px;
      display: flex;
      width: 1190px;
      max-width: 100%;
      position: absolute;
      top: 200px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 1023px) {
    .banner-image {
      height: 546px;
      background-position: center;

      .banner-text {
        top: 90px;
      }
    }
  }
`;

export const BannerTextContainer = styled.h1`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1023px) {
    margin: 0 auto;
    max-width: 375px;
  }
`;

export const BannerText = styled.span`
  font-size: 144px;
  font-weight: 700;
  line-height: normal;
  color: #212222;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &.custom-delay-03s {
    animation-delay: 0.3s;
  }

  &.custom-delay-06s {
    animation-delay: 0.6s;
  }

  &.right {
    text-align: right;
  }

  &.center {
    text-align: center;
  }

  &.left {
    text-align: left;
  }

  .line {
    display: inline-block;
    width: 198px;
    height: 6px;
    background-color: #212222;
    vertical-align: middle;
  }

  @media (max-width: 1023px) {
    font-size: 48px;
    line-height: 56px;

    .line {
      width: 64px;
      height: 3px;
    }

    &.right {
      text-align: left;
    }

    &.center {
      text-align: right;
    }
  }
`;

// SectionOneBlock Component
export const SectionOneContainer = styled.div`
  padding: 148px 0 245px;

  @media (max-width: 1023px) {
    padding: 32px 0 90px;
  }
`;

// SectionOneTitle Component
export const SectionOneTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h2 {
    font-size: 104px;
    font-weight: 500;

    b {
      font-weight: 700;
    }
  }

  @media (max-width: 1023px) {
    margin-bottom: 40px;

    h2 {
      font-size: 42px;
    }
  }
`;

// SectionTwoBlock Component
export const SectionTwoContainer = styled.div`
  background: linear-gradient(270deg, #f2b281 0%, #ef91cd 100%);
  padding: 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  .container {
    padding: 0 16px;
  }

  &.active {
    transform: scale(1);
  }

  @media (max-width: 1023px) {
    padding-bottom: 40px;
  }
`;

// SectionTwoTop Component
export const SectionTwoTopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 66px;
  gap: 49px;

  @media (max-width: 1023px) {
    margin-bottom: 24px;
    padding: 0 8px;
    gap: 0;
  }
`;

export const SectionTwoTitle = styled.div`
  flex: 0 1 628px;
  padding-top: 118px;

  h2 {
    font-size: 80px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 24px;
    line-height: 96px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    line-height: 30px;
    opacity: 0.8;
  }

  @media (max-width: 1023px) {
    padding-top: 40px;

    h2 {
      font-size: 32px;
      margin-bottom: 8px;
      line-height: 40px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const RightImageContainer = styled.div`
  flex: 1 1;
  position: relative;
  top: -40px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

// SectionTwoList Component
export const SectionTwoListContainer = styled.div`
  height: calc(max(2700px, 270vh));

  @media (max-width: 1023px) {
    height: 100%;
  }
`;

export const SectionTowWrapper = styled.div`
  position: sticky;
  top: 88px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 250px;
  width: 100%;
  height: 100vh;

  @media (max-width: 1023px) {
    position: relative;
    gap: 24px;
    top: 0;
    height: 100%;
  }
`;

export const SectionItem = styled.div`
  transition: all 0.2s ease;

  &.gray-item {
    .box {
      background-color: #494949;

      & > .title {
        h3 {
          color: #fff;
        }
      }
    }
  }

  &.sec-item-1 {
    .sec-wrap {
      .text {
        p {
          background-image: url(${secTwoBlurTextByOne});
        }
      }
    }
  }

  &.sec-item-2 {
    .box {
      & > .title {
        h3 {
          color: #fff;
        }
      }

      .sec-wrap {
        .text {
          h3 {
            color: #fff;
          }

          p {
            color: #fff;
            background-image: url(${secTwoBlurTextByOne});
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      }
    }
    @media (max-width: 1023px) {
      position: static;
    }
  }

  &.sec-item-1,
  &.sec-item-2 {
    // top: 176px; /* 기본적으로 100px에 위치 */
    .box {
      padding: 42px 110px;

      .sec-wrap {
        .right-image {
          top: 50%;
          right: 110px !important;
          bottom: unset !important;
          transform: translateY(-50%);
        }
      }
    }
  }

  @media (max-width: 1023px) {
    &.sec-item-3 {
      .box {
        padding: 40px 24px !important ;
      }
    }
  }
`;

// Box Component
export const Box = styled.div`
  background-color: #fff;
  padding: 80px 110px;
  border-radius: 32px;
  height: 400px;
  position: relative;

  @media (max-width: 1023px) {
    padding: 20px 24px !important;
    border-radius: 16px;
    height: auto;
  }
`;

export const TitleContainer = styled.div`
  padding: 42px 0;

  h3 {
    font-size: 40px;
    font-weight: 600;
  }

  @media (max-width: 1023px) {
    h3 {
      font-size: 16px;
    }
  }
`;

export const SectionWrap = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 540px;

  h3 {
    font-size: 40px;
    font-weight: 600;
    color: #212222;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #5f6061;
    line-height: 150%;
    min-height: 118px;
    position: relative;

    span {
      position: absolute;
      left: 32px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;
      font-weight: 700;
    }
  }

  &.item-3 {
    p {
      min-height: initial;
    }
  }

  @media (max-width: 1023px) {
    h3 {
      font-size: 16px;
      margin-bottom: 16px;
      line-height: 24px;
      color: #212222;
    }

    p {
      background-size: 100% !important;
      font-size: 12px;
      line-height: 18px;
      column-rule-color: #5f6061;

      span {
        font-size: 16px;
      }
    }
  }
`;

export const RightImageWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  &.kol-box-img {
    border-radius: 0%;
    box-shadow: initial;
  }

  @media (max-width: 1023px) {
    display: none;

    &.kol-box-img {
      height: fit-content;
      display: block;
      width: 107px;
      top: 35px;
      right: 24px;
      box-shadow: 4px 4px 32px 0px rgba(0, 0, 0, 0.24);
      border-radius: 10px;
    }
  }
`;
