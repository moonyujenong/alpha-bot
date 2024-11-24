import {
  BrandingPowerBox,
  MobileTableCompanyInfo,
  MobileTableHead,
  TableOpenInner,
  MobileTableStatusInfo,
  MobileTableWrap,
  MyPageAside,
  MyPageContainer,
  MyPageContents,
  MyPageInner,
  PcTableCompanyInfo,
  PcTableHead,
  PcTableStatusInfo,
  PcTableTokenTitle,
  PcTableWrap,
  PointBox,
  RadiusBox,
  SearchInputBox,
  SettingsButton,
  SocialFrame,
  TabList,
  TabListBox,
  TableBoxWrap,
  TableItem,
  TableItemWrap,
  TableOpenBox,
  UserBehaviorBox,
  UserInfoBox,
  UserInfoTextBox,
  MoreBtn,
  MyPageNoDataBox,
} from './style';
import userThumbnail from '../../../../assets/sample/sample-profile.svg';
import settingIcon from '../../../../assets/icon-outline-setting.svg';
import settingWhiteIcon from '../../../../assets/icon-outline-setting-white.svg';
import copyIcon from '../../../../assets/icon-copy.svg';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import powerIcon from '../../../../assets/img-power.png';
import topIcon from '../../../../assets/icon-fill-arrow-top-blue.svg';
import minusIcon from '../../../../assets/icon-minus.svg';
import VerifiedMarkAfter from '../../../../components/VerifiedMarkAfter';
import VerifiedMarkBefore from '../../../../components/VerifiedMarkBefore';
import ResentWalletMark from '../../../../components/ResentWalletMark';
import searchIcon from '../../../../assets/icon-search.svg';
import RoundDropDown from '../../../../components/RoundDropDown';
import sampleCompanyLogo from '../../../../assets/sample/img-sample-company-logo.png';
import StatusLabel from '../../../../components/StatusLabel';
import arrowIcon from '../../../../assets/icon-up-arrow-bold.svg';
import circleRightArrowIcon from '../../../../assets/icon-circle-right-arrow-gray.svg';
import { useState } from 'react';
import arrowPcIcon from '../../../../assets/icon-up-arrow-regular.svg';
import folderIcon from '../../../../assets/img-folder-3d.png';

const MyPage = () => {
  const innerWidth = useMediaQuery();

  return (
    <MyPageContainer>
      <MyPageInner>
        <MyPageAside>
          <RadiusBox>
            <UserInfoBox>
              <img alt="user thumbnail" src={userThumbnail} />
              <UserInfoTextBox>
                <div className="user-nickname">
                  <h3>Elizabeth123</h3>
                  {innerWidth < 1024 && (
                    <img alt="setting icon" src={settingIcon} />
                  )}
                </div>
                <div className="user-id">
                  <p>
                    User ID <p>•</p>12345678
                  </p>
                  <button type="button">
                    <img alt="copy icon" src={copyIcon} />
                  </button>
                </div>
              </UserInfoTextBox>
            </UserInfoBox>
          </RadiusBox>
          <RadiusBox>
            <BrandingPowerBox>
              <h3>Branding Power</h3>
              <img alt="power icon" src={powerIcon} />
              <PointBox>
                <h3>63</h3>
                <p>
                  {/* TODO : 변동 사항이 없을 경우 */}
                  {/* <img alt="minus icon" src={minusIcon} /> */}
                  {/* TODO : 변동 사항이 있을 경우 */}
                  <img alt="up icon" src={topIcon} />
                  Top 10%
                </p>
              </PointBox>
              <SocialFrame>
                <li>
                  {/* TODO : 인증 되었을 경우 */}
                  <VerifiedMarkAfter />
                  {/* TODO : 인증 안되었을 경우 */}
                  {/* <VerifiedMarkBefore /> */}
                </li>
                <li>
                  Recent Wallet <ResentWalletMark />
                </li>
              </SocialFrame>
            </BrandingPowerBox>
          </RadiusBox>
        </MyPageAside>

        <MyPageContents>
          {innerWidth >= 1024 && (
            <SettingsButton>
              <img alt="setting icon" src={settingWhiteIcon} />
              Settings
            </SettingsButton>
          )}
          <TabListBox>
            <TabList>
              <li>
                <a href="#!" className="active">
                  Launchpad Participation
                </a>
              </li>
            </TabList>
          </TabListBox>
          <TableBoxWrap>
            <UserBehaviorBox>
              <SearchInputBox>
                <img alt="search icon" src={searchIcon} />
                <input type="text" name="" id="" placeholder="Search" />
              </SearchInputBox>

              <RoundDropDown title={'My Status'} />
            </UserBehaviorBox>
            {innerWidth >= 1024 ? <PcTable /> : <MobileTable />}

            {/* TODO : 데이터 없을 경우 */}
            {/* <MyPageNoDataBox>
              <img alt="document icon" src={folderIcon} />
              <h3>There is no token purchase history.</h3>
              <button type="button">Explore Launchpad</button>
            </MyPageNoDataBox> */}
          </TableBoxWrap>

          <MoreBtn>
            More <img alt="arrow icon" src={arrowIcon} />
          </MoreBtn>
        </MyPageContents>
      </MyPageInner>
    </MyPageContainer>
  );
};

export default MyPage;

const MobileTable = () => {
  const [isShow, setIsShow] = useState(false);

  const handleStatusShowMobile = () => {
    setIsShow(!isShow);
  };

  return (
    <MobileTableWrap>
      <MobileTableHead>
        <h3>Company</h3>
        <h3>My Status</h3>
      </MobileTableHead>

      <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
        {/* TODO : MobileTableItemWrap 가 반복됩니다. */}
        <TableItemWrap>
          <TableItem onClick={handleStatusShowMobile}>
            <MobileTableCompanyInfo>
              <img alt="company logo" src={sampleCompanyLogo} />
              <div>
                <h3>Company name</h3>
                <p>Token Title</p>
              </div>
            </MobileTableCompanyInfo>
            <MobileTableStatusInfo>
              <StatusLabel title={'Registered'} />
              <img
                alt="arrow icon"
                src={arrowIcon}
                className={`open-arrow-icon ${!isShow ? '' : 'show'}`}
              />
            </MobileTableStatusInfo>
          </TableItem>

          {/* TODO : 오픈 시 UI */}
          <TableOpenBox className={!isShow ? '' : 'show'}>
            <div style={{ display: 'grid', gap: '16px' }}>
              <TableOpenInner>
                <li>
                  <span className="left">Project</span>

                  <div className="right">
                    <p>08.13.2024 - 08.26.2024</p>
                  </div>
                </li>
                <li>
                  <span className="left">Vesting</span>
                  <div className="right">
                    <p>08.13.2024 - 08.26.2025</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner>
                <li>
                  <span className="left">Registration Status</span>

                  <div className="right">
                    <p>
                      <b>Registered</b>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="left">Registration No.</span>
                  <div className="right">
                    <p>953471496</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner>
                <li>
                  <span className="left">Participation Status</span>

                  <div className="right">
                    <p>Participate Now</p>
                    <button type="button">
                      <img alt="right arrow icon" src={circleRightArrowIcon} />
                    </button>
                  </div>
                </li>
                <li>
                  <span className="left">Transaction No.</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
                <li>
                  <span className="left">Claimed Status</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
              </TableOpenInner>
            </div>
          </TableOpenBox>
        </TableItemWrap>

        <TableItemWrap>
          <TableItem onClick={handleStatusShowMobile}>
            <MobileTableCompanyInfo>
              <img alt="company logo" src={sampleCompanyLogo} />
              <div>
                <h3>Company name</h3>
                <p>Token Title</p>
              </div>
            </MobileTableCompanyInfo>
            <MobileTableStatusInfo>
              <StatusLabel title={'Rejected'} color={'red'} />
              <img
                alt="arrow icon"
                src={arrowIcon}
                className={`open-arrow-icon ${!isShow ? '' : 'show'}`}
              />
            </MobileTableStatusInfo>
          </TableItem>

          {/* TODO : 오픈 시 UI */}
          <TableOpenBox className={!isShow ? '' : 'show'}>
            <div style={{ display: 'grid', gap: '16px' }}>
              <TableOpenInner>
                <li>
                  <span className="left">Project</span>

                  <div className="right">
                    <p>08.13.2024 - 08.26.2024</p>
                  </div>
                </li>
                <li>
                  <span className="left">Vesting</span>
                  <div className="right">
                    <p>08.13.2024 - 08.26.2025</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner>
                <li>
                  <span className="left">Registration Status</span>

                  <div className="right">
                    <p>
                      <b className="red">Rejected</b>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="left">Registration No.</span>
                  <div className="right">
                    <p>953471496</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner>
                <li>
                  <span className="left">Participation Status</span>

                  <div className="right">
                    <p>Participate Now</p>
                    <button type="button">
                      <img alt="right arrow icon" src={circleRightArrowIcon} />
                    </button>
                  </div>
                </li>
                <li>
                  <span className="left">Transaction No.</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
                <li>
                  <span className="left">Claimed Status</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
              </TableOpenInner>
            </div>
          </TableOpenBox>
        </TableItemWrap>

        <TableItemWrap>
          <TableItem onClick={handleStatusShowMobile}>
            <MobileTableCompanyInfo>
              <img alt="company logo" src={sampleCompanyLogo} />
              <div>
                <h3>Company name</h3>
                <p>Token Title</p>
              </div>
            </MobileTableCompanyInfo>
            <MobileTableStatusInfo>
              <StatusLabel title={'Participated'} color={'green'} />
              <img
                alt="arrow icon"
                src={arrowIcon}
                className={`open-arrow-icon ${!isShow ? '' : 'show'}`}
              />
            </MobileTableStatusInfo>
          </TableItem>

          {/* TODO : 오픈 시 UI */}
          <TableOpenBox className={!isShow ? '' : 'show'}>
            <div style={{ display: 'grid', gap: '16px' }}>
              <TableOpenInner>
                <li>
                  <span className="left">Project</span>

                  <div className="right">
                    <p>08.13.2024 - 08.26.2024</p>
                  </div>
                </li>
                <li>
                  <span className="left">Vesting</span>
                  <div className="right">
                    <p>08.13.2024 - 08.26.2025</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner>
                <li>
                  <span className="left">Registration Status</span>

                  <div className="right">
                    <p>
                      <b className="green">Participated</b>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="left">Registration No.</span>
                  <div className="right">
                    <p>953471496</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner>
                <li>
                  <span className="left">Participation Status</span>

                  <div className="right">
                    <p>Participate Now</p>
                    <button type="button">
                      <img alt="right arrow icon" src={circleRightArrowIcon} />
                    </button>
                  </div>
                </li>
                <li>
                  <span className="left">Transaction No.</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
                <li>
                  <span className="left">Claimed Status</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
              </TableOpenInner>
            </div>
          </TableOpenBox>
        </TableItemWrap>
      </div>
    </MobileTableWrap>
  );
};

const PcTable = () => {
  const [isPcShow, setIsPcShow] = useState(false);

  const handleStatusShowPc = () => {
    setIsPcShow(!isPcShow);
  };

  return (
    <PcTableWrap>
      <PcTableHead>
        <h3>Company</h3>
        <h3>Token Title</h3>
        <h3>My Status</h3>
      </PcTableHead>

      <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
        <TableItemWrap>
          <TableItem className="pc" onClick={handleStatusShowPc}>
            <PcTableCompanyInfo>
              <img alt="company logo" src={sampleCompanyLogo} />
              <h3>Company Title</h3>
            </PcTableCompanyInfo>
            <PcTableTokenTitle>Token Title</PcTableTokenTitle>
            <PcTableStatusInfo>
              <StatusLabel title={'Registered'} />
              <img
                alt="arrow icon"
                src={arrowPcIcon}
                className={`open-arrow-icon ${!isPcShow ? '' : 'show'}`}
              />
            </PcTableStatusInfo>
          </TableItem>

          {/* TODO : 오픈 시 UI */}
          <TableOpenBox className={`pc ${!isPcShow ? '' : 'show'}`}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '42px',
              }}
            >
              <TableOpenInner>
                <li>
                  <span className="left">Project</span>

                  <div className="right">
                    <p>08.13.2024 - 08.26.2024</p>
                  </div>
                </li>
                <li>
                  <span className="left">Vesting</span>
                  <div className="right">
                    <p>08.13.2024 - 08.26.2025</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner>
                <li>
                  <span className="left">Registration Status</span>

                  <div className="right">
                    <p>
                      <b>Registered</b>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="left">Registration No.</span>
                  <div className="right">
                    <p>953471496</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner className="pc-last-list">
                <li>
                  <span className="left">Participation Status</span>

                  <div className="right" style={{ flex: '1' }}>
                    <p>Participate Now</p>
                    <button type="button" style={{ marginLeft: 'auto' }}>
                      <img alt="right arrow icon" src={circleRightArrowIcon} />
                    </button>
                  </div>
                </li>
                <li style={{ justifyContent: 'flex-start' }}>
                  <span className="left">Transaction No.</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
                <li style={{ justifyContent: 'flex-start' }}>
                  <span className="left">Claimed Status</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
              </TableOpenInner>
            </div>
          </TableOpenBox>
        </TableItemWrap>

        <TableItemWrap>
          <TableItem className="pc" onClick={handleStatusShowPc}>
            <PcTableCompanyInfo>
              <img alt="company logo" src={sampleCompanyLogo} />
              <h3>Company Title</h3>
            </PcTableCompanyInfo>
            <PcTableTokenTitle>Token Title</PcTableTokenTitle>
            <PcTableStatusInfo>
              <StatusLabel title={'Rejected'} color="red" />
              <img
                alt="arrow icon"
                src={arrowPcIcon}
                className={`open-arrow-icon ${!isPcShow ? '' : 'show'}`}
              />
            </PcTableStatusInfo>
          </TableItem>

          {/* TODO : 오픈 시 UI */}
          <TableOpenBox className={`pc ${!isPcShow ? '' : 'show'}`}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '42px',
              }}
            >
              <TableOpenInner>
                <li>
                  <span className="left">Project</span>

                  <div className="right">
                    <p>08.13.2024 - 08.26.2024</p>
                  </div>
                </li>
                <li>
                  <span className="left">Vesting</span>
                  <div className="right">
                    <p>08.13.2024 - 08.26.2025</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner>
                <li>
                  <span className="left">Registration Status</span>

                  <div className="right">
                    <p>
                      <b className="red">Rejected</b>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="left">Registration No.</span>
                  <div className="right">
                    <p>953471496</p>
                  </div>
                </li>
              </TableOpenInner>

              <TableOpenInner className="pc-last-list">
                <li>
                  <span className="left">Participation Status</span>

                  <div className="right" style={{ flex: '1' }}>
                    <p>Participate Now</p>
                    <button type="button" style={{ marginLeft: 'auto' }}>
                      <img alt="right arrow icon" src={circleRightArrowIcon} />
                    </button>
                  </div>
                </li>
                <li style={{ justifyContent: 'flex-start' }}>
                  <span className="left">Transaction No.</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
                <li style={{ justifyContent: 'flex-start' }}>
                  <span className="left">Claimed Status</span>
                  <div className="right">
                    <p>-</p>
                  </div>
                </li>
              </TableOpenInner>
            </div>
          </TableOpenBox>
        </TableItemWrap>
      </div>
    </PcTableWrap>
  );
};
