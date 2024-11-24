import styled from '@emotion/styled';

export const ChannelGuideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;
`;

export const ChannelGuideInnter = styled.div`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  padding: 24px 16px 120px;

  .guide-page-title {
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: #212222;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 140px;
    padding-top: 104px;
    display: flex;
    align-items: flex-start;
    gap: 54px;

    .guide-page-title {
      gap: 16px;
      margin-bottom: 64px;
      font-size: 32px;
      line-height: 40px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const GuideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > div:last-of-type {
    img.guide-img {
      transform: scale(1.1);
      margin-top: 4%;
    }
  }

  @media (min-width: 1024px) {
    gap: 48px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    > div:last-of-type {
      img.guide-img {
        transform: initial;
        margin-top: 0;
      }
    }

    &.youtube-list > :nth-of-type(n + 5):nth-of-type(-n + 7) {
      grid-column: 1/3;
    }

    &.telegram-list > :last-of-type {
      grid-column: 1/3;
    }
  }
`;

export const GuideTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #414142;

  span {
    width: 24px;
    min-width: 24px;
    aspect-ratio: 1;
    color: #fff;
    border-radius: 100px;
    background-color: #ff9445;
    display: flex;
    justify-content: center;
    font-weight: 700;
  }
`;

export const LeftGuideTabs = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 260px;
  gap: 16px;

  li {
    position: relative;

    > button {
      text-align: left;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: #9b9c9e;
      width: fit-content;

      &.active {
        color: #ff9445;

        &::after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: no-repeat url(/src/assets/icon-check-orange.svg);
          background-size: 20px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const TabsMobileVer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  margin-bottom: 40px;

  > p {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: #212222;
  }

  > img {
    width: 24px;
    height: 24px;
  }
`;

export const TabsMobileList = styled.ul`
  box-shadow: 4px 4px 12px 0px rgba(90, 90, 90, 0.1);
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 0;
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  display: none;

  &.show {
    display: block;
  }

  li {
    position: relative;

    button {
      padding: 8px 24px;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: #414142;
      width: 100%;
      text-align: left;

      &.active {
        color: #ff9445;
        font-weight: 700;

        &::after {
          content: '';
          display: block;
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          background: no-repeat url(/src/assets/icon-check-orange.svg);
          background-size: 20px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
