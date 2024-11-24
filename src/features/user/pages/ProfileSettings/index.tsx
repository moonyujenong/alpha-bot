import {
  MenuLnb,
  MenuLnbBox,
  MenuLnbButton,
  MenuLnbList,
  MyPageButton,
  ProfileSettingsContainer,
  ProfileSettingsInner,
  RightContents,
  RightContentsTitle,
  RightContentsTitleBox,
  SideMenu,
  SideMenuLink,
  SideMenuList,
  SideMenuTitle,
} from './style';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import downIcon from '../../../../assets/icon-circle-down.svg';
import upIcon from '../../../../assets/icon-circle-up.svg';
import { useState } from 'react';
import SupportHelp from './SupportHelp';
import myPageUser from '../../../../assets/icon-mypage-user.svg';
import IdentityVerification from './IdentityVerification';
import PersonalDetails from './PersonalDetails';
import AccountSetting from './AccountSetting';

const ProfileSettings = () => {
  const innerWidth = useMediaQuery();
  const [isShow, setIsShow] = useState(false);

  const handleLnbShow = () => {
    setIsShow(!isShow);
  };

  return (
    <ProfileSettingsContainer>
      <ProfileSettingsInner>
        {innerWidth >= 1024 && (
          <SideMenu>
            <SideMenuTitle>Profile settings</SideMenuTitle>
            <SideMenuList>
              <li>
                {/* TODO : 활성화 될 경우 클래스 active 추가 합니다. */}
                <SideMenuLink className="active">Personal Details</SideMenuLink>
              </li>
              <li>
                <SideMenuLink>Branding Power</SideMenuLink>
              </li>
              <li>
                <SideMenuLink>Account Setting</SideMenuLink>
              </li>
              <li>
                <SideMenuLink>Identity Verification</SideMenuLink>
              </li>
              <li>
                <SideMenuLink>Support & Help</SideMenuLink>
              </li>
            </SideMenuList>
          </SideMenu>
        )}

        <RightContents>
          <RightContentsTitleBox>
            {/* TODO : 페이지에 따라 타이틀이 변경되어야 합니다. */}
            <RightContentsTitle>Personal Details</RightContentsTitle>
            <MenuLnbBox>
              {innerWidth >= 1024 ? (
                <MyPageButton>
                  <img alt="user icon" src={myPageUser} />
                  My page
                </MyPageButton>
              ) : (
                <MenuLnbButton onClick={handleLnbShow}>
                  <img
                    alt="down icon"
                    src={isShow === true ? upIcon : downIcon}
                  />
                </MenuLnbButton>
              )}

              <MenuLnb className={`${isShow === true ? 'show' : ''}`}>
                <MenuLnbList>
                  <li>
                    {/* TODO : 메뉴 활성화 시 클래스 active 가 추가됩니다. */}
                    <a href="#!" className="active">
                      Personal Details
                    </a>
                  </li>
                  <li>
                    <a href="#!">Branding Power</a>
                  </li>
                  <li>
                    <a href="#!">Account Setting</a>
                  </li>
                  <li>
                    <a href="#!">Identity Verification</a>
                  </li>
                  <li>
                    <a href="#!">Support & Help</a>
                  </li>
                  <li>
                    <a href="#!">My Page</a>
                  </li>
                </MenuLnbList>
              </MenuLnb>
            </MenuLnbBox>
          </RightContentsTitleBox>

          {/* TODO : 페이지별 로드되는 컴포넌트들 입니다. */}
          <PersonalDetails />
          {/* <IdentityVerification /> */}
          {/* <SupportHelp /> */}
          {/* <AccountSetting /> */}
        </RightContents>
      </ProfileSettingsInner>
    </ProfileSettingsContainer>
  );
};

export default ProfileSettings;
