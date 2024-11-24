import styled from '@emotion/styled';

export const ProfileSettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f7fa;
`;

export const ProfileSettingsInner = styled.div`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  padding: 24px 16px 120px;
  display: flex;
  align-items: flex-start;
  gap: 54px;

  @media (min-width: 1024px) {
    padding: 56px 16px 140px;
  }
`;

export const SideMenu = styled.div`
  display: grid;
  gap: 20px;
  flex: 0 0 274px;
  max-width: 274px;
`;

export const SideMenuTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #212222;
`;

export const SideMenuList = styled.ul`
  display: grid;
  gap: 8px;

  li {
    padding: 4px 0;
    position: relative;
  }
`;

export const SideMenuLink = styled.a`
  display: block;
  width: 100%;
  color: #9b9c9e;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  width: fit-content;

  &.active {
    color: #ff9445;

    &::after {
      content: '';
      display: block;
      background-image: url(/src/assets/icon-check-orange.svg);
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const RightContents = styled.div`
  flex: 1;
  width: 100%;
`;

export const RightContentsTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightContentsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #212222;

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const MenuLnbBox = styled.div`
  position: relative;
`;

export const MenuLnbButton = styled.button`
  width: 24px;
  height: 24px;
`;

export const MenuLnb = styled.div`
  position: absolute;
  top: 44px;
  right: 0;
  width: 327px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 4px 4px 12px 0px rgba(90, 90, 90, 0.08);
  display: none;
  z-index: 5;

  &.show {
    display: block;
  }
`;

export const MenuLnbList = styled.ul`
  padding: 4px 0;

  a {
    padding: 8px 24px;
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #414142;
    position: relative;

    &:hover {
      background-color: #e9ebee;
    }

    &.active {
      color: #ff9445;
      font-weight: 600;

      &::after {
        content: '';
        display: block;
        background-image: url(/src/assets/icon-check-orange.svg);
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

export const MyPageButton = styled.button`
  padding: 9px 14.5px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  border-radius: 8px;
  background-color: #414142;
  border-radius: 100px;

  img {
    width: 20px;
    height: 20px;
  }
`;
