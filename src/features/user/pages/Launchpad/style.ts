import styled from '@emotion/styled';

export const LaunchpadContainer = styled.div`
  padding: 32px 16px 120px;

  @media (min-width: 1024px) {
    padding: 81px 16px 140px;
  }
`;

export const LaunchpadInner = styled.div`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  position: relative;

  > h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: #212222;
    text-align: center;
    margin-bottom: 8px;
  }

  > p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #212222;
    text-align: center;
  }

  @media (min-width: 1024px) {
    > h2 {
      font-size: 64px;
      line-height: 76px;
      margin-bottom: 16px;
    }

    > p {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export const GridWrap = styled.div`
  margin-top: 56px;

  > h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: #212222;
    margin-bottom: 24px;
    text-align: center;
    display: block;
  }

  @media (min-width: 1024px) {
    margin-top: 80px;

    > h3 {
      font-size: 40px;
      line-height: 52px;
      margin-bottom: 80px;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 24px;

    > div {
      flex: 1;
    }
  }
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 16px;
  margin-top: 24px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 56px;
  }
`;

export const ItemBox = styled.a`
  border-radius: 8px;
  border: 1px solid #dcdde0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > img {
    width: 100%;
    height: calc((100vw * 123) / 375);
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }

  &.flex {
    flex-direction: row;
    align-items: center;

    > img {
      width: calc((100vw * 140) / 375);
      max-width: 290px;
      height: calc((100vw * 123) / 375);
      max-height: 254px;
      border-radius: 8px;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (min-width: 1024px) {
    border-radius: 16px;
    padding: 24px;
    gap: 16px;

    .token-title {
      margin-bottom: 8px;
    }

    > img {
      height: calc((100vw * 226) / 1920);
      max-height: 226px;
    }

    &.flex {
      gap: 24px;

      > img {
        width: calc((100vw * 290) / 1920);
        height: calc((100vw * 254) / 1920);
      }

      .token-title {
        margin-bottom: 0px;
      }
    }
  }
`;

export const ItemInfo = styled.div`
  flex: 1;

  .token-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #414142;
    margin-bottom: 8px;
  }

  @media (min-width: 1024px) {
    .token-title {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;

  > img.icon {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  > h3 {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #212222;
  }

  > img.verified {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1024px) {
    gap: 8px;

    > img.icon {
      width: 32px;
      height: 32px;
    }

    > h3 {
      font-size: 16px;
      line-height: 24px;
    }

    > img.verified {
      width: 20px;
      height: 20px;
    }
  }
`;

export const RadiusLabelBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;

  > div {
    padding: 2px 8px;
  }

  &.flex {
    flex-wrap: nowrap;

    > div {
      padding: 2px 4px;

      &.gradient {
        padding: 2px 8px 2px 12px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 16px;

    > div {
      padding: 4px 8px;
    }

    &.flex {
      > div {
        padding: 4px 8px;
      }
    }
  }
`;

export const RadiusLabel = styled.div`
  border: 1px solid #b9babd;
  border-radius: 100px;
  padding: 2px;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
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

export const TimeOutBox = styled.div`
  border: 1px solid #f0f2f5;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    flex: 1;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: #414142;
    text-align: center;
    position: relative;

    &:not(:last-child) {
      &::after {
        content: ':';
        display: block;
        position: absolute;
        top: 46%;
        transform: translateY(-50%);
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        color: #414142;
        right: 0;
      }
    }

    b {
      font-weight: 700;
    }
  }

  @media (min-width: 1024px) {
    border-radius: 12px;
    padding: 8px;

    > span {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
