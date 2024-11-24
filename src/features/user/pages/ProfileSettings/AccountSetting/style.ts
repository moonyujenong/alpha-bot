import styled from '@emotion/styled';

export const AccountSettingContainer = styled.div`
  margin-top: 24px;
  position: relative;

  @media (min-width: 1024px) {
    margin-top: 64px;
  }
`;

export const AccountSettingBorderText = styled.div`
  margin-top: 16px;
  border: 1px solid #dcdde0;
  border-radius: 12px;
  padding: 8px 16px;
  display: grid;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #5f6061;

  img {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -1px;
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1024px) {
    padding: 14px 24px 16px;
    border-radius: 16px;
    gap: 8px;
    font-size: 14px;
    line-height: 22px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const WalletAddressBox = styled.div`
  margin-top: 40px;

  @media (min-width: 1024px) {
    margin-top: 64px;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    color: #212222;

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 24px;

    h3 {
      font-size: 24px;
      line-height: 24px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const WalletAddressNoDataBox = styled.div`
  background-color: #fff;
  padding: 24px 40px;
  border-radius: 16px;

  img {
    width: 48px;
    height: 48px;
    margin: 0 auto 8px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #414142;
    margin-bottom: 16px;
    text-align: center;
  }

  button {
    display: block;
    padding: 10px 16px;
    border-radius: 8px;
    background-color: #414142;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    padding: 56px 64px;

    p {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 24px;
    }

    button {
      padding: 13px 16px;
    }
  }
`;

export const WalletAddressAddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  color: #5f6061;
`;

export const AccountDataBox = styled.div`
  display: grid;
  gap: 8px;

  @media (min-width: 1024px) {
    gap: 16px;
  }
`;

export const AccountDataItem = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;

  &.bg-transparent {
    background-color: transparent;
    border: 1px solid #dcdde0;
  }

  &.social-data {
    button {
      div {
        padding: 2px 15px 2px 8px;

        img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 16px;

    &.social-data {
      button {
        div {
          padding: 8px 20px 8px 12px;

          img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
`;

export const AccountDataItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  .title-info {
    display: grid;
    gap: 4px;
    padding-right: 8px;

    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
      color: #212222;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    }

    .copy-info {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      color: #9b9c9e;
      width: 100%;
      max-width: 153px;

      p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      img {
        width: 18px;
        min-width: 18px;
        height: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    .title-info {
      .copy-info {
        max-width: 197px;
      }
    }
  }
`;

export const AccountDataItemRight = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: fit-content;

  > img {
    width: 20px;
    height: 20px;
  }

  > div {
    background-color: #e9ebee;
    border-radius: 8px;
    padding: 8px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  &.connect-btn {
    > div {
      background-color: #414142;
      color: #fff;
    }
  }

  @media (min-width: 1024px) {
    > div {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: #212222;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 20px 8px 12px;
    }

    > img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const MoreButton = styled.button`
  border: 1px solid #dcdde0;
  border-radius: 4px;
  display: flex;
  margin: 24px auto 0;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  color: #414142;
  padding: 6px 12px 6px 16px;

  img {
    width: 16px;
    height: 16px;
    transform: scale(1.4) rotate(180deg);
  }

  @media (min-width: 1024px) {
    margin-top: 40px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 14px;
    padding-top: 9px;
    padding-bottom: 9px;
  }
`;

export const SocialAccountsBox = styled.div`
  margin-top: 40px;

  @media (min-width: 1024px) {
    margin-top: 120px;
  }
`;

export const SnsChannelBox = styled.div`
  margin-top: 40px;

  @media (min-width: 1024px) {
    margin-top: 120px;
  }
`;

export const SectionSubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #414142;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const NoticeTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: #f33737;
  margin-top: 24px;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ConnectFormBox = styled.div`
  margin-top: 16px;
  display: grid;
  align-items: stretch;
  gap: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const ConnectForm = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

export const TimeOut = styled.div`
  position: absolute;
  top: 33px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #414142;

  img {
    width: 16px;
    height: 16px;
    object-fit: cover;
  }
`;

export const ConnectSnsThumbBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: #414142;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`;

export const ConnectSnsInputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 8px;

  input {
    height: 48px;
    border: 1px solid #dcdde0;
    border-radius: 8px;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #414142;
    width: 100%;
    box-sizing: border-box;

    &::placeholder {
      color: #b9babd;
    }
  }

  button {
    padding: 3px 16px;
    color: #fff;
    background-color: #414142;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    border-radius: 8px;
    height: fit-content;
    width: fit-content;
    margin-left: auto;

    &:disabled {
      background-color: #dcdde0;
      color: #b9babd;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;

    input {
      height: 56px;
      font-size: 16px;
      line-height: 24px;
      flex: 1;
    }

    button {
      padding: 8px 16px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const CopyInputBox = styled.div`
  display: grid;
  gap: 9px;

  a {
    color: #2e83e6;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    width: fit-content;
  }

  input {
    &::placeholder {
      color: #b9babd;
    }
  }

  @media (min-width: 1024px) {
    gap: 12px;

    a {
      font-size: 14px;
      line-height: 22px;
    }

    input {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const UserInfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 16px;
  gap: 20px;
`;

export const UserInfoLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  img {
    width: 40px;
    min-width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 11px;
  }

  span {
    &:first-of-type {
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      color: #212222;
      display: block;
    }

    &:last-of-type {
      font-size: 11px;
      font-weight: 500;
      line-height: 19px;
      color: #9b9c9e;
    }
  }

  .discern {
    margin: 0 4px;
    position: relative;
    top: -1px;
  }

  @media (min-width: 1024px) {
    p {
      display: inline-block;
    }
  }
`;

export const UpdatingBtn = styled.div`
  width: 100%;
  max-width: 356px;
  margin: 48px auto 0;

  @media (min-width: 1024px) {
    margin-top: 80px;
  }
`;

export const CrawlingBox = styled.div`
  position: absolute;
  top: -24px;
  left: -16px;
  right: -16px;
  height: calc(100% - 45px);
  z-index: 20;
  background: rgba(245, 247, 250, 0.64);
  backdrop-filter: blur(8px);

  @media (min-width: 1024px) {
    top: -40px;
  }
`;

export const CrawlingInner = styled.div`
  position: relative;
  margin: 193px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;

  h3 {
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin: 8px 0 32px;
    text-align: center;
    display: block;
  }

  .spinner {
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

export const CrawlingTime = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 22px;
  justify-content: center;

  li {
    text-align: center;
    position: relative;
    min-width: 56px;
    flex: 0 0 56px;

    &:not(:last-of-type) {
      &::after {
        content: ':';
        display: block;
        position: absolute;
        top: 0px;
        right: -12px;
        font-size: 24px;
        font-weight: 700;
        color: #414142;
      }
    }

    span {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      color: #414142;
    }

    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      color: #5f6061;
    }
  }

  @media (min-width: 1024px) {
    li {
      min-width: 72px;
      flex: 0 0 72px;

      &:not(:last-of-type) {
        &::after {
          font-size: 40px;
          top: -4px;
          right: -14px;
        }
      }

      span {
        font-size: 40px;
        line-height: 48px;
      }
    }
  }
`;
