import styled from '@emotion/styled';

export const MyPageContainer = styled.div`
  background-color: #f5f7fa;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const MyPageInner = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 24px 16px 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 56px;
  height: 100%;

  @media (min-width: 1024px) {
    padding: 55px 16px 140px;
    flex-direction: row;
    gap: 38px;
  }
`;

export const MyPageAside = styled.div`
  width: 100%;
  display: grid;
  gap: 8px;
  height: fit-content;

  @media (min-width: 1024px) {
    max-width: 274px;
  }
`;

export const MyPageContents = styled.div`
  width: 100%;
  flex: 1;
`;

export const RadiusBox = styled.div`
  background-color: #fff;
  border-radius: 16px;
`;

export const UserInfoBox = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  > img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    overflow: 16px;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    > img {
      width: 56px;
      height: 56px;
    }
  }
`;

export const UserInfoTextBox = styled.div`
  flex: 1;

  .user-nickname {
    display: flex;
    align-items: flex-start;
    gap: 7px;
    justify-content: space-between;

    h3 {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      color: #212222;
    }

    > img {
      width: 20px;
      height: 20px;
    }
  }

  .user-id {
    display: flex;
    align-items: center;
    gap: 4px;

    p {
      font-size: 12px;
      font-weight: 600;
      line-height: 20px;
      color: #b9babd;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    img {
      width: 16px;
      height: 16px;
      margin-left: 4px;
    }
  }

  @media (min-width: 1024px) {
    .user-nickname {
      h3 {
        font-size: 20px;
        line-height: 28px;
      }
    }

    .user-id {
      justify-content: space-between;
      p {
        font-size: 14px;
        line-height: 22px;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const BrandingPowerBox = styled.div`
  padding: 24px 0 0;
  display: grid;
  gap: 16px;

  > h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: #414142;
    text-align: center;
  }

  > img {
    width: 104px;
    height: 104px;
    margin: 0 auto;
  }
`;

export const PointBox = styled.div`
  display: grid;

  h3 {
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 56px;
    font-weight: 700;
    line-height: 64px;
    text-align: center;
  }

  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    color: #414142;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const SocialFrame = styled.ul`
  background-color: #d7ddfb;
  padding: 16px;
  border-radius: 16px;
  margin-top: 8px;
  display: grid;
  gap: 8px;

  li {
    border-radius: 8px;
    padding: 12px 16px;
    background-color: #fff;

    &:last-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      font-weight: 600;
      line-height: 20px;
      color: #414142;

      > div {
        max-width: 109px;
      }
    }
  }

  @media (min-width: 1024px) {
    li {
      padding: 16px;

      &:last-of-type {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
`;

export const TabListBox = styled.div`
  margin: 0 -16px;
  border-bottom: 1px solid #dcdde0;
  padding: 0 16px;

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0;
  }
`;

export const TabList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    color: #b9babd;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding-bottom: 6px;
    position: relative;
    display: block;
    white-space: nowrap;

    &.active {
      color: #414142;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background-color: #3955ea;
        border-radius: 100px;
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: 1;
      }
    }
  }

  @media (min-width: 1024px) {
    a {
      padding-bottom: 12px;
      font-size: 20px;
    }
  }
`;

export const SettingsButton = styled.button`
  background-color: #414142;
  color: #fff;
  padding: 10px 19px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  border-radius: 100px;
  margin-left: auto;
  margin-bottom: -9px;
`;

export const TableBoxWrap = styled.div`
  margin-top: 40px;

  @media (min-width: 1024px) {
    margin-top: 56px;
  }
`;

export const UserBehaviorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 8px;
`;

export const SearchInputBox = styled.div`
  flex: 1;
  border: 1px solid #b9babd;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 12px;
  width: 100%;
  max-width: 240px;

  img {
    width: 20px;
    height: 20px;
  }

  input {
    flex: 1;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    color: #414142;

    &::placeholder {
      color: #9b9c9e;
    }
  }

  @media (min-width: 1024px) {
    padding: 7px 12px;
  }
`;

export const MobileTableWrap = styled.div`
  margin-top: 24px;
`;

export const MobileTableHead = styled.div`
  border: 1px solid #dcdde0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 7px 24px;
  display: flex;
  align-items: center;

  > h3 {
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    color: #414142;
    flex: 1;

    &:last-of-type {
      flex: 0 0 96px;
    }
  }
`;

export const TableItemWrap = styled.div`
  position: relative;
  border-radius: 12px;
  border: 1px solid #dcdde0;
  overflow: hidden;
`;

export const TableItem = styled.div`
  cursor: pointer;
  background-color: #fff;
  padding: 11px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  .open-arrow-icon {
    transform: rotate(180deg);
    opacity: 0.5;

    &.show {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  &.pc {
    padding: 16px 24px;
    gap: 42px;
  }
`;

export const MobileTableCompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 40px;
    height: 40px;
    background-color: #d7ddfb;
    object-fit: cover;
    border-radius: 12px;
    overflow: hidden;
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: #414142;
  }

  p {
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    color: #414142;
  }
`;

export const MobileTableStatusInfo = styled.div`
  flex: 0 0 96px;
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 16px;
    min-width: 16px;
    height: 16px;
    object-fit: cover;
  }
`;

export const TableOpenBox = styled.div`
  padding: 24px;
  background-color: #f0f2f5;
  display: none;

  &.show {
    display: block;
    border-top: 1px solid #dcdde0;
  }

  &.pc {
    ul {
      flex: 1;

      &:first-of-type {
        flex: initial;
      }

      li {
        gap: 12px;
        align-items: flex-start;

        &:not(:last-of-type) {
          margin-bottom: 8px;
        }

        .left,
        .right {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
`;

export const TableOpenInner = styled.ul`
  &.pc-last-list {
    li {
      justify-content: flex-start;

      span {
        width: 100%;
        max-width: 136px;
        min-width: max-content;
      }
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-of-type) {
      margin-bottom: 4px;
    }

    .left {
      font-size: 12px;
      font-weight: 600;
      line-height: 20px;
      color: #9b9c9e;
      display: block;
    }

    .right {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      color: #212222;
      display: flex;
      align-items: center;
      gap: 4px;

      b {
        color: #2e83e6;
        font-weight: 600;

        &.green {
          color: #3fc75d;
        }

        &.red {
          color: #f33737;
        }
      }

      button {
        min-width: 20px;
      }
    }
  }
`;

export const PcTableWrap = styled.div`
  margin-top: 24px;
`;

export const PcTableHead = styled.div`
  border: 1px solid #dcdde0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 21px 90px 21px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 42px;

  h3 {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: #5f6061;

    &:first-of-type {
      flex: 0 0 145px;
    }

    &:nth-of-type(2) {
      text-align: center;
      flex: 1;
    }

    &:last-of-type {
      flex: 0 0 81px;
    }
  }
`;

export const PcTableCompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  flex: 1;

  > img {
    width: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: 12px;
    overflow: hidden;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #414142;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PcTableTokenTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #414142;
  text-align: center;
  flex: 1;
`;

export const PcTableStatusInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
  flex: 1;
  justify-content: flex-end;

  > img {
    width: 24px;
    height: 24px;
    min-width: 24px;
  }
`;

export const MoreBtn = styled.button`
  display: block;
  margin: 24px auto 0;
  border-radius: 4px;
  border: 1px solid #dcdde0;
  padding: 4px 12px 4px 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  color: #414142;
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;

  img {
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
    position: relative;
    top: 1px;
  }

  @media (min-width: 1024px) {
    margin-top: 40px;
    border-radius: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    line-height: 14px;
  }
`;

export const MyPageNoDataBox = styled.div`
  background-color: #fff;
  padding: 40px;
  text-align: center;
  border-radius: 16px;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    margin: 0 auto 8px;
  }

  > h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #414142;
    text-align: center;
  }

  button {
    border-radius: 8px;
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    padding: 10px 16px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    margin-top: 24px;
  }

  @media (min-width: 1024px) {
    padding: 47px;

    > h3 {
      font-size: 16px;
      line-height: 16px;
    }

    button {
      padding: 14px 18px;
    }
  }
`;
