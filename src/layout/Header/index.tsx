import {
  HeaderContainer,
  HeaderInner,
  HeaderMenu,
  HeaderMenuLink,
  InfoBottom,
  InfoBottomItem,
  InfoMiddleBox,
  InfoMiddleItem,
  InfoMiddleItemLeft,
  InfoMiddleItemRight,
  InfoNumber,
  InfoNumberBox,
  InfoNumberChage,
  InfoNumberChageBox,
  InfoTitle,
  InfoTopBox,
  InfoTopLeft,
  InfoTopRight,
  InfoWalletLeft,
  InfoWalletRight,
  InfoWalletRightAfterAdd,
  InfoWalletRightBeforeAdd,
  LogoIcon,
  UserProfileBox,
  UserProfileButton,
  UserProfileInfo,
  UserProfileInfoInner,
} from './style.ts';
import useMediaQuery from '../../hooks/useMediaQuery.ts';
import pcLogo from '../../assets/img-text-logo.svg';
import mobileLogo from '../../assets/img-logo-symbol.svg';
import sampleProfile from '../../assets/sample/sample-profile.svg';
import arrowTop from '../../assets/icon-up-arrow.svg';
import minusIcon from '../../assets/icon-minus.svg';
import arrowTopFillBlue from '../../assets/icon-fill-arrow-top-blue.svg';
import powerImg from '../../assets/img-power.png';
import verifiedIcon from '../../assets/icon-verified.svg';
import verifiedFillIcon from '../../assets/icon-verified-fill.svg';
import arrowRightIcon from '../../assets/icon-arrow-right.svg';
import coinBaseIconBlue from '../../assets/icon-coinbase-blue.svg';
import settingIcon from '../../assets/icon-setting.svg';
import userIcon from '../../assets/icon-user.svg';
import logoutIcon from '../../assets/icon-logout.svg';
import topWhite from '../../assets/icon-white-fill-top.svg';
import plusCircleIcon from '../../assets/icon-circle-plus.svg';
import logoWhite from '../../assets/logo-text-white-2.png';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const innerWidth = useMediaQuery();
  const urlInfo = useLocation();

  return (
    <HeaderContainer className={urlInfo.pathname === '/error' ? 'black' : ''}>
      <HeaderInner>
        <LogoIcon>
          {innerWidth >= 1024 ? (
            <img
              alt="pc 로고"
              src={urlInfo.pathname === '/error' ? logoWhite : pcLogo}
            />
          ) : (
            <img alt="mobile 로고" src={mobileLogo} />
          )}
        </LogoIcon>

        <HeaderMenu>
          <li>
            <HeaderMenuLink className="link">About us</HeaderMenuLink>
          </li>
          <li>
            <HeaderMenuLink className="link">Lunchpad</HeaderMenuLink>
          </li>
          <li>
            {/* TODO : disabled 인 경우 동일 클래스명 추가합니다. 호버시 그라데이션 효과 적용하려면 disalbed 삭제 */}
            <HeaderMenuLink className="disabled link">Campaign</HeaderMenuLink>
          </li>
        </HeaderMenu>

        {/* TODO : 로그인 전 */}
        {/* <RadiusBtn>Login</RadiusBtn> */}

        {/* TODO : 로그인 후 */}
        <UserProfileBox>
          <UserProfileButton>
            <img alt="sample profile" src={sampleProfile} />
            {innerWidth >= 1024 && (
              <img alt="icon arrow top" className="arrow" src={arrowTop} />
            )}
          </UserProfileButton>

          {/* TODO : 프로필 클릭 시 나타나는 UI */}
          <UserProfileInfo style={{ display: 'none' }}>
            {innerWidth >= 1024 && <img alt="top white" src={topWhite} />}
            <UserProfileInfoInner>
              <InfoTopBox>
                <InfoTopLeft>
                  <InfoTitle>Branding Power</InfoTitle>
                  <InfoNumberBox>
                    <InfoNumber>12</InfoNumber>
                    {/* TODO : 변동 없을 경우 */}
                    {/* <img alt="minus icon" src={minusIcon} /> */}

                    {/* TODO :변동 있을 경우 */}
                    <InfoNumberChageBox>
                      <img alt="fill arrow top blue" src={arrowTopFillBlue} />
                      <InfoNumberChage>Top 12%</InfoNumberChage>
                    </InfoNumberChageBox>
                  </InfoNumberBox>
                </InfoTopLeft>

                <InfoTopRight>
                  <img alt="img power" src={powerImg} />
                </InfoTopRight>
              </InfoTopBox>

              <InfoMiddleBox>
                <InfoMiddleItem>
                  {/* TODO : 인증 완료 되면 클래스 active 추가 합니다. */}
                  <InfoMiddleItemLeft>
                    {/* TODO : 인증 전 */}
                    <img alt="verified icon" src={verifiedIcon} /> Unverified
                    {/* TODO : 인증 후 */}
                    {/* <img alt="verified icon" src={verifiedFillIcon} /> Verified */}
                  </InfoMiddleItemLeft>
                  <InfoMiddleItemRight>
                    Go verify <img alt="arrow right" src={arrowRightIcon} />
                  </InfoMiddleItemRight>
                </InfoMiddleItem>

                <InfoMiddleItem>
                  <InfoWalletLeft>Recent Wallet</InfoWalletLeft>
                  <InfoWalletRight>
                    {/* TODO : add 전 */}
                    <InfoWalletRightBeforeAdd>
                      <p>Add</p>
                      <img alt="plus icon" src={plusCircleIcon} />
                    </InfoWalletRightBeforeAdd>

                    {/* TODO : add 후 */}
                    <InfoWalletRightAfterAdd>
                      <img alt="coin icon blue" src={coinBaseIconBlue} />
                      <p>0xBAe7aaaa1993</p>
                    </InfoWalletRightAfterAdd>
                  </InfoWalletRight>
                </InfoMiddleItem>
              </InfoMiddleBox>
            </UserProfileInfoInner>

            <InfoBottom>
              <InfoBottomItem>
                <img alt="icon user" src={userIcon} />
                My page
              </InfoBottomItem>

              <InfoBottomItem>
                <img alt="icon setting" src={settingIcon} />
                Profile Settings
              </InfoBottomItem>

              <InfoBottomItem>
                <img alt="icon setting" src={logoutIcon} />
                Logout
              </InfoBottomItem>
            </InfoBottom>
          </UserProfileInfo>
        </UserProfileBox>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
