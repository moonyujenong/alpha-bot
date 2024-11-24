import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: fixed;
  min-height: 56px;
  height: 56px;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 50;
  border-bottom: 1px solid var(--Boder-100, #f0f2f5);
  display: flex;
  align-content: center;

  &.black {
    background-color: #000;
    border-bottom: 0;

    a.link {
      color: #fff;
    }
  }

  @media (min-width: 1024px) {
    min-height: 88px;
    height: 88px;
    border-bottom: 0;
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  margin: 0 auto;
`;

export const LogoIcon = styled.a`
  width: 32px;
  height: 28px;
  object-fit: cover;
  min-width: 32px;
  min-height: 28px;

  @media (min-width: 1024px) {
    width: 200px;
    height: 40px;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  overflow: hidden;

  > li:last-child {
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    gap: 56px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
`;

export const HeaderMenuLink = styled.a`
  font-size: 14px;
  color: #212222;
  font-weight: 600;
  line-height: 20px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.disabled {
    color: #b9babd;

    &:hover {
      background: #b9babd;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const RadiusBtn = styled.button`
  padding: 4px 16px;
  border-radius: 100px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  background-color: #414142;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 8px 24px;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const UserProfileBox = styled.div`
  position: relative;
`;

export const UserProfileButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  img:first-of-type {
    min-width: 32px;
    width: 32px;
    min-height: 32px;
    height: 32px;
    display: block;
    border-radius: 9px;
    overflow: hidden;
  }

  img.arrow {
    min-width: 24px;
    min-height: 24px;
  }

  @media (min-width: 1024px) {
    img:first-of-type {
      min-width: 40px;
      min-height: 40px;
      width: 40px;
      height: 40px;
    }
  }
`;

export const UserProfileInfo = styled.div`
  position: absolute;
  top: 52px;
  right: 0;
  z-index: 51;
  width: 302px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 14px 16px 32px 0px rgba(95, 96, 97, 0.24);

  @media (min-width: 1024px) {
    top: 68px;

    > img {
      position: absolute;
      top: -11px;
      right: 40px;
    }
  }
`;

export const UserProfileInfoInner = styled.div`
  padding: 24px;
`;

export const InfoTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoTopLeft = styled.div`
  display: grid;
  gap: 8px;
`;

export const InfoTitle = styled.h3`
  color: #414142;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const InfoNumberBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoNumber = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  background: var(
    --Gradient-1,
    linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const InfoNumberChageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InfoNumberChage = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #414142;
`;

export const InfoTopRight = styled.div`
  width: 72px;
  height: 72px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoMiddleBox = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 16px;
`;

export const InfoMiddleItem = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: #f5f7fa;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;
`;

export const InfoMiddleItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #b9babd;

  &.active {
    color: #212222;
  }
`;

export const InfoMiddleItemRight = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  color: #5f6061;
`;

export const InfoWalletLeft = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #414142;
  white-space: nowrap;
`;

export const InfoWalletRight = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
`;

export const InfoWalletRightBeforeAdd = styled.button`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: #5f6061;
  display: flex;
  gap: 4px;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const InfoWalletRightAfterAdd = styled.button`
  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: #9b9c9e;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  display: flex;
  gap: 4px;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const InfoBottom = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 16px 8px;
  border-top: 1px solid #f0f2f5;
`;

export const InfoBottomItem = styled.button`
  display: grid;
  gap: 4px;
  color: #5f6061;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  flex: 1;
  white-space: nowrap;

  img {
    width: 20px;
    height: 20px;
    margin: 0 auto;
  }
`;
