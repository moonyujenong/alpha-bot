import styled from '@emotion/styled';

export const PersonalDetailsContainer = styled.div`
  margin-top: 24px;

  @media (min-width: 1024px) {
    margin-top: 64px;
  }
`;

export const TopSlidesBox = styled.div`
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

export const TopSlidesItem = styled.div`
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
    justify-content: space-between;
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
    max-width: 133px;
    margin: 0;
    margin-left: auto;

    > div {
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 8px;
    margin-bottom: 40px;

    &.wallet {
      height: 32px;

      img {
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

export const EditProfileWrap = styled.div`
  margin-top: 54px;

  > p {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
  }

  @media (min-width: 1024px) {
    margin-top: 80px;

    > p {
      margin-bottom: 24px;
      line-height: 24px;
      font-size: 24px;
    }
  }
`;

export const EditProfileBox = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 8px;
    display: block;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #9b9c9e;
    margin-bottom: 16px;
    display: block;
  }

  .right {
    img {
      width: 96px;
      height: 96px;
    }
  }

  @media (min-width: 1024px) {
    padding: 24px 28px;
    flex-direction: row;
    gap: initial;
    justify-content: space-between;

    .right {
      img {
        width: 94px;
        height: 94px;
      }
    }
  }
`;

export const ImageSettingButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    padding: 2px 12px 2px 8px;
    background-color: #e9ebee;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    gap: 16px;

    > div {
      padding: 8px 16px 8px 12px;
    }
  }
`;

export const UserNameBox = styled.div`
  margin: 32px 0;
  width: 100%;

  input {
    background-color: transparent;
  }

  @media (min-width: 1024px) {
    margin: 40px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    p {
      white-space: normal;
    }
  }
`;

export const FlexBox = styled.div`
  display: grid;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

export const DeleteAccountBox = styled.div`
  margin-top: 56px;

  > h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    color: #212222;
    margin-bottom: 16px;
  }

  > span {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #9b9c9e;
    margin-bottom: 24px;
    display: block;
  }

  @media (min-width: 1024px) {
    margin-top: 80px;

    h3 {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 24px;
    }
  }
`;

export const DeleteInputWrap = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;

export const DeleteButton = styled.button`
  margin-top: 16px;
  border: 1px solid #dcdde0;
  border-radius: 8px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  color: #b9babd;

  svg {
    width: 20px;
    height: 20px;
  }

  &.active {
    color: #f33737;
    border-color: #f33737;

    svg {
      fill: #f33737;
    }
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 16px;
    padding: 11px 16px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
