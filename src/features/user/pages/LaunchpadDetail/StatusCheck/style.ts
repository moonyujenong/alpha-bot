import styled from '@emotion/styled';

export const StatusCheckContainer = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid #dcdde0;
  background-color: #fff;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-wrap: wrap;

  .box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: auto;
    position: relative;

    > h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: #212222;
    }

    .login-link {
      font-size: 14px;
      font-weight: 600;
      line-height: 100%;
      color: #5f6061;
      display: flex;
      align-items: center;
      position: absolute;
      top: 2px;
      right: 0;

      img {
        width: 20px;
        height: 20px;
        margin-left: 4px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 48px;
    flex-direction: row;

    .box {
      &:first-of-type {
      }
    }
  }
`;

export const ItemBox = styled.div`
  background-color: #f5f7fa;
  padding: 16px 24px;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 90px;
  height: 100%;

  .category-name {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: #5f6061;
    margin-bottom: 4px;
  }

  &.black {
    background-color: #212222;

    .category-name {
      color: #e9ebee;
    }
  }

  .point {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: #fff;

    &.red {
      color: #f33737;
    }

    &.blue {
      color: #3955ea;
    }

    &.black {
      color: #212222;
    }
  }

  > img {
    width: 40px;
    height: 40px;
  }

  .point-box {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  @media (min-width: 1024px) {
    &.gray {
      border-radius: 0;
      flex-direction: column;
      align-items: flex-start;
      position: relative;

      &:first-of-type {
        border-radius: 8px 0 0 8px;
      }

      &:last-child {
        border-radius: 0 8px 8px 0;
      }

      > img {
        position: absolute;
        right: 24px;
        bottom: 16px;
      }
    }

    &.black {
      align-items: flex-start;

      > img {
        align-self: flex-end;
      }
    }

    .point-box {
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
    }
  }
`;

export const ItemBoxWrap = styled.div`
  gap: 16px;
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }
`;

export const VerifyText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #5f6061;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PowerStateLabel = styled.span`
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #2e83e6;
  background-color: #e7f2ff;

  img {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 1024px) {
    border-radius: 0 4px 4px 0;
    position: relative;
    left: -24px;
  }
`;

export const BlurPannel = styled.a`
  position: absolute;
  bottom: -5px;
  left: -5px;
  right: -5px;
  height: calc(100% - 24px);
  background: rgba(255, 255, 255, 0.48);
  backdrop-filter: blur(4px);
  z-index: 10;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 48px;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    img {
      height: 30px;
    }
  }
`;
