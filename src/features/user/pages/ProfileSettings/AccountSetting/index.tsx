import {
  AccountDataBox,
  AccountDataItem,
  AccountDataItemLeft,
  AccountDataItemRight,
  AccountSettingBorderText,
  AccountSettingContainer,
  ConnectForm,
  ConnectFormBox,
  ConnectSnsInputBox,
  ConnectSnsThumbBox,
  CopyInputBox,
  CrawlingBox,
  CrawlingInner,
  CrawlingTime,
  MoreButton,
  NoticeTitle,
  SectionSubTitle,
  SectionTitle,
  SnsChannelBox,
  SocialAccountsBox,
  TimeOut,
  UpdatingBtn,
  UserInfoBox,
  UserInfoLeft,
  WalletAddressAddButton,
  WalletAddressBox,
} from './style';
import lighttningIcon from '../../../../../assets/icon-lightning-circle.svg';
import walletIcon from '../../../../../assets/img-wallet-3d.png';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import plusIcon from '../../../../../assets/icon-circle-plus.svg';
import sampleCoinIcon from '../../../../../assets/img-sns-coinbase.png';
import copyIcon from '../../../../../assets/icon-copy.svg';
import IconText from '../../../../../components/IconText';
import trashIcon from '../../../../../assets/icon-trash.svg';
import downArrowIcon from '../../../../../assets/icon-up-arrow.svg';
import connectIcon from '../../../../../assets/icon-connect.svg';
import youtubeIcon from '../../../../../assets/img-sns-youtube.png';
import telegramIcon from '../../../../../assets/img-sns-telegram.png';
import timeIcon from '../../../../../assets/icon-time.svg';
import CopyLabelInput from '../../../../../components/CopyLabelInput';
import sampleUserThumbnail from '../../../../../assets/sample/sample-profile.svg';
import GradientButton from '../../../../../components/GradientButton';
import StatsBox from '../../../../../components/StatsBox';
import { TailSpin } from 'react-loader-spinner';

const AccountSetting = () => {
  return (
    <AccountSettingContainer>
      {/* <CrawlingBox>
        <CrawlingInner>
          <TailSpin
            visible={true}
            width="40"
            height="40"
            color="#3955EA"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass="spinner"
          />
          <h3>Your Branding Power update in</h3>
          <CrawlingTime>
            <li>
              <span>23</span>
              <p>Hours</p>
            </li>
            <li>
              <span>38</span>
              <p>Minutes</p>
            </li>
            <li>
              <span>60</span>
              <p>Seconds</p>
            </li>
          </CrawlingTime>
        </CrawlingInner>
      </CrawlingBox> */}
      <StatsBox />
      <AccountSettingBorderText>
        <p>
          Items marked with <img alt="lightning icon" src={lighttningIcon} />{' '}
          (Branding Power) affect your Branding Power.
        </p>
        <p>
          Your Branding Power combines your crypto ability and social influence,
          affecting rewards eligibility and allowing you to buy more tokens at
          better prices.
        </p>
      </AccountSettingBorderText>
      <WalletAddress />
      <SocialAccounts />
      <SnsChannel />
      <UpdatingBtn>
        <GradientButton
          title={'Update my Branding Power'}
          // grayLoadingIcon={true}
        />
      </UpdatingBtn>
    </AccountSettingContainer>
  );
};

export default AccountSetting;

const WalletAddress = () => {
  const innerWidth = useMediaQuery();

  return (
    <WalletAddressBox>
      <SectionTitle>
        <h3>
          Wallet Address <img alt="lightning icon" src={lighttningIcon} />
        </h3>

        {/* TODO : 데이터 있을 경우 add wallet 버튼 */}
        {innerWidth >= 1024 && (
          <WalletAddressAddButton>
            Add Wallet <img alt="plus icon" src={plusIcon} />
          </WalletAddressAddButton>
        )}
      </SectionTitle>

      {/* TODO : 데이터 없을 경우 */}
      {/* <WalletAddressNoDataBox>
        <img alt="wallet icon" src={walletIcon} />
        <p>There are no linked wallets. Please add a wallet.</p>
        <button type="button">Add Wallet</button>
      </WalletAddressNoDataBox> */}

      {/* TODO : 데이터 있을 경우 */}
      <AccountDataBox>
        <AccountDataItem>
          <AccountDataItemLeft>
            <img alt="coin icon" src={sampleCoinIcon} />
            <div className="title-info">
              <h3>Coinbase</h3>
              <div className="copy-info">
                <p>0xBAe7530xBAe753x0xBAe7530xBAe753x</p>
                <button type="button">
                  <img alt="copy icon" src={copyIcon} />
                </button>
              </div>
            </div>
          </AccountDataItemLeft>
          <AccountDataItemRight>
            <IconText
              title={innerWidth >= 1024 ? 'Remove' : ''}
              imgSrc={trashIcon}
            />
          </AccountDataItemRight>
        </AccountDataItem>

        <AccountDataItem>
          <AccountDataItemLeft>
            <img alt="coin icon" src={sampleCoinIcon} />
            <div className="title-info">
              <h3>Coinbase</h3>
              <div className="copy-info">
                <p>0xBAe7530xBAe753x0xBAe7530xBAe753x</p>
                <button type="button">
                  <img alt="copy icon" src={copyIcon} />
                </button>
              </div>
            </div>
          </AccountDataItemLeft>
          <AccountDataItemRight>
            <IconText
              title={innerWidth >= 1024 ? 'Remove' : ''}
              imgSrc={trashIcon}
            />
          </AccountDataItemRight>
        </AccountDataItem>
      </AccountDataBox>

      {/* TODO : 데이터 더보기 버튼 */}
      <MoreButton>
        More <img alt="down icon" src={downArrowIcon} />
      </MoreButton>
    </WalletAddressBox>
  );
};

const SocialAccounts = () => {
  return (
    <SocialAccountsBox>
      <SectionTitle>
        <h3>Social Account</h3>
      </SectionTitle>

      <AccountDataBox>
        <AccountDataItem className="social-data">
          <AccountDataItemLeft>
            <img alt="coin icon" src={sampleCoinIcon} />
            <div className="title-info">
              <h3>Coinbase</h3>
            </div>
          </AccountDataItemLeft>
          <AccountDataItemRight>
            {/* TODO : 브랜딩 파워 점수에 영향이 있을 경우 lightning 아이콘 노출 */}
            <img alt="lightning icon" src={lighttningIcon} />
            {/* TODO : 소셜 계정에 연동되었을 경우 trash icon 으로 노출됩니다. */}
            <IconText title={'Remove'} imgSrc={trashIcon} />
          </AccountDataItemRight>
        </AccountDataItem>

        <AccountDataItem className="bg-transparent social-data">
          <AccountDataItemLeft>
            <img alt="coin icon" src={sampleCoinIcon} />
            <div className="title-info">
              <h3>Coinbase</h3>
            </div>
          </AccountDataItemLeft>
          {/* TODO : 소셜 계정이 연동되어 있지 않을 경우 connect 버튼으로 노출 */}
          <AccountDataItemRight className="connect-btn">
            <IconText title={'Connect'} imgSrc={connectIcon} />
          </AccountDataItemRight>
        </AccountDataItem>

        <AccountDataItem className="bg-transparent social-data">
          <AccountDataItemLeft>
            <img alt="coin icon" src={sampleCoinIcon} />
            <div className="title-info">
              <h3>Coinbase</h3>
            </div>
          </AccountDataItemLeft>
          <AccountDataItemRight className="connect-btn">
            <img alt="lightning icon" src={lighttningIcon} />
            <IconText title={'Connect'} imgSrc={connectIcon} />
          </AccountDataItemRight>
        </AccountDataItem>
      </AccountDataBox>
    </SocialAccountsBox>
  );
};

const SnsChannel = () => {
  const innerWidth = useMediaQuery();

  return (
    <SnsChannelBox>
      <SectionTitle style={{ marginBottom: '16px' }}>
        <h3>
          YouTube & Telegram Channel
          <img alt="lightning icon" src={lighttningIcon} />
        </h3>
      </SectionTitle>
      <SectionSubTitle>
        Connect your channels and boost branding power by entering your channel
        ID, generating a code, and adding it to your bio—quick and simple!
      </SectionSubTitle>
      <NoticeTitle>
        Notice : Once you generate a code, it's valid for 24 hours only.
      </NoticeTitle>

      <ConnectFormBox>
        <ConnectForm>
          <ConnectSnsThumbBox>
            <img alt="youtube tumbnail" src={youtubeIcon} />
            YouTube
          </ConnectSnsThumbBox>
          <ConnectSnsInputBox>
            <input type="text" placeholder="Please paste your channel’s id" />
            <button type="button">Generate</button>
          </ConnectSnsInputBox>
          <CopyInputBox>
            <CopyLabelInput
              placeHolder={'Please generate a code to copy'}
              /* TODO : 값이 없을 때 true, 값이 있을 때 false 로 분기합니다. */
              copyBtnDisabeld={true}
            />
            <a href="#!">How it works on Youtube ?</a>
          </CopyInputBox>

          {/* TODO : 유저 정보 */}
          <UserInfoBox>
            <UserInfoLeft>
              <img alt="user thumbnail" src={sampleUserThumbnail} />
              <div>
                <span style={{ marginBottom: '4px' }}>Argent</span>
                <span>
                  <p>Alphabot Code: 156548</p>
                  {/* TODO : 구분자 , 필요한 경우 사용 */}
                  {innerWidth >= 1024 && <p className="discern">|</p>}
                  <p>10.25.2023 linked</p>
                </span>
              </div>
            </UserInfoLeft>
            <AccountDataItemRight>
              <IconText
                title={innerWidth >= 1024 ? 'Remove' : ''}
                imgSrc={trashIcon}
              />
            </AccountDataItemRight>
          </UserInfoBox>
        </ConnectForm>

        <ConnectForm>
          <TimeOut>
            <img alt="time icon" src={timeIcon} />
            23:00:00
          </TimeOut>
          <ConnectSnsThumbBox>
            <img alt="telegram tumbnail" src={telegramIcon} />
            Telegram
          </ConnectSnsThumbBox>

          <ConnectSnsInputBox>
            <input type="text" placeholder="Please paste your channel’s id" />
            <button type="button">Generate</button>
          </ConnectSnsInputBox>
          <CopyInputBox>
            <CopyLabelInput
              placeHolder={'Please generate a code to copy'}
              /* TODO : 값이 없을 때 true, 값이 있을 때 false 로 분기합니다. */
              copyBtnDisabeld={false}
            />
            <a href="#!">How it works on Telegram ?</a>
          </CopyInputBox>
        </ConnectForm>
      </ConnectFormBox>
    </SnsChannelBox>
  );
};
