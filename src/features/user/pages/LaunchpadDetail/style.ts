import styled from '@emotion/styled';

export const LaunchpadDetailContainer = styled.div`
  width: 100%;
  padding: 0 16px 120px;

  @media (min-width: 1024px) {
    padding: 16px 40px 140px;
  }
`;

export const LaunchpadDetailInner = styled.div`
  width: 100%;
  max-width: 1328px;
  position: relative;
  margin: 0 auto;
`;

export const TopBanner = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50vw);
  height: 180px;
  z-index: 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    width: 100%;
    left: initial;
    transform: initial;
    height: calc((100vw * 345) / 1920);
    max-height: 345px;

    img {
      object-fit: initial;
    }
  }
`;

export const SocialLinkBoxInBanner = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1328px;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 0 16px 8px;

  @media (min-width: 1024px) {
    padding-bottom: 29px;
  }
`;

export const SocialLinkList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;

  li {
    height: fit-content;

    img {
      width: 24px;
      height: 24px;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    gap: 16px;
  }
`;

export const ContentsFlexWrap = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    gap: 56px;
    padding: 0 16px;

    .left {
      flex: 1;
    }

    .right {
      width: 100%;
      max-width: 352px;
      padding-top: 64px;
      display: grid;
      gap: 0;
    }
  }
`;

export const TokenInfoBox = styled.div`
  position: relative;
  margin-top: -45px;
  width: fit-content;

  > img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    min-width: 56px;
    border-radius: 16px;
    overflow: hidden;
    z-index: 11;
    position: relative;
  }

  > span {
    display: flex;
    margin-top: 8px;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #212222;

    img {
      width: 20px;
      height: 20px;
    }
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: #414142;
    margin: 0 0 8px;
  }

  @media (min-width: 1024px) {
    margin-top: -80px;

    > img {
      width: 96px;
      height: 96px;
      min-width: 96px;
    }

    > span {
      font-size: 24px;
      line-height: 32px;

      img {
        width: 32px;
        height: 32px;
      }
    }

    .title {
      font-size: 40px;
      line-height: 48px;
    }
  }
`;

export const RadiusLabelBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
`;

export const RadiusLabel = styled.div`
  border: 1px solid #b9babd;
  border-radius: 100px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #414142;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: center;

  &.live {
    border-color: #3955ea;
    background-color: #f2f4fe;
    color: #3955ea;
  }

  &.access {
    color: #ff9445;
    border-color: #ff9445;
    background-color: #fff8f3;
  }

  &.ended {
    color: #5f6061;
    border-color: #5f6061;
    background-color: #f5f7fa;
  }

  &.gradient {
    border: 0;
    padding: 2px 8px 2px 12px;
    color: #fff;
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  @media (min-width: 1024px) {
    font-size: 12px;
    line-height: 20px;
    padding: 4px 8px;
  }
`;

export const TokenExplain = styled.p`
  display: block;
  padding-bottom: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #414142;

  @media (min-width: 1024px) {
    padding-bottom: 48px;
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid #f0f2f5;
    margin-bottom: 48px;
  }
`;

export const TotalArea = styled.div`
  background-color: #fff;
  padding: 24px 0;

  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: #212222;
  }

  .price {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #212222;

    b {
      color: #ff9445;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
  }

  button {
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    border-radius: 8px;
    color: #fff;
    padding: 12px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    width: 100%;
    text-align: center;
    margin-top: 16px;
  }
`;

export const CalculateMobile = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.56);
  display: none;

  &.show {
    display: block;
  }

  .inner {
    z-index: 101;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 24px 24px 0 0;
    padding: 48px 16px 0;
  }
`;
