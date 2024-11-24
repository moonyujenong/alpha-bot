import styled from '@emotion/styled';

export const StatsBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0 -16px;
  padding: 0 16px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    gap: 16px;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
  }
`;

export const StatsBoxItem = styled.div`
  border-radius: 12px;
  background-color: #fff;
  padding: 16px;
  width: 100%;
  min-width: 204px;
  height: 104px;
  position: relative;

  h3 {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #414142;
    display: block;
    width: fit-content;
  }

  &:first-of-type {
    background-color: #3955ea;

    h3 {
      color: #fff;
      line-height: 24px;
    }
  }

  &.wallet-item {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    .no-recent {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      color: #9b9c9e;
      display: block;
      margin-top: 8px;
    }
  }

  &.identity-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    padding: 8px 16px;
    border-radius: 8px;

    > div,
    > a {
      margin: 0;
    }
  }

  @media (min-width: 1024px) {
    border-radius: 16px;
    padding: 16px 24px;
    min-height: 144px;
    height: auto;

    &:first-of-type {
      h3 {
        font-size: 16px;
      }
    }

    &.identity-box {
      border-radius: 16px;
      padding: 16px 24px;
      display: block;

      > div {
        margin-top: 8px;
        margin-bottom: 40px;
      }

      > a {
        margin-top: auto;
        margin-left: auto;
      }
    }
  }
`;

export const StatusBox = styled.div`
  margin-top: 4px;
  margin-bottom: 6px;

  &.wallet {
    border-radius: 100px;
    background-color: #f0f2f5;
    height: 24px;
    padding-right: 12px;
    width: 100%;
    margin: auto 0 0;

    > div {
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 8px;
    margin-bottom: 40px;

    &.wallet {
      height: 32px;

      > img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export const SlidesBottomLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  margin-top: auto;
  margin-left: auto;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #5f6061;
  width: fit-content;
`;

export const BrandingPowerBottom = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;

  .left {
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
    color: #fff;
    display: flex;
    align-items: center;
    word-break: break-word;

    img {
      width: 32px;
      height: 32px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    color: #fff;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 40px;

    .left {
      font-size: 40px;
      line-height: 48px;

      img {
        width: 48px;
        height: 48px;
      }
    }
  }
`;

export const DateBox = styled.div`
  position: absolute;
  top: 18px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 16px;
  height: 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
  width: fit-content;
`;
