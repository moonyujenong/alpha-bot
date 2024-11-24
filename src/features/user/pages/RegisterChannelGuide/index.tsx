import {
  ChannelGuideContainer,
  ChannelGuideInnter,
  GuideList,
  GuideTitle,
  LeftGuideTabs,
  TabsMobileList,
  TabsMobileVer,
} from './style';
import youtubeGuide1 from '../../assets/youtube-guide-1.png';
import youtubeGuide2 from '../../assets/youtube-guide-2.png';
import youtubeGuide3 from '../../assets/youtube-guide-3.png';
import youtubeGuide4 from '../../assets/youtube-guide-4.png';
import youtubeGuide5 from '../../assets/youtube-guide-5.png';
import youtubeGuide6 from '../../assets/youtube-guide-6.png';
import youtubeGuide7Mobile from '../../assets/youtube-guide-7-mobile.png';
import youtubeGuide7Pc from '../../assets/youtube-guide-7-pc.png';
import telegramGuide1 from '../../assets/telegram-guide-1.png';
import telegramGuide2 from '../../assets/telegram-guide-2.png';
import telegramGuide3 from '../../assets/telegram-guide-3.png';
import telegramGuide4 from '../../assets/telegram-guide-4.png';
import telegramGuide5Mobile from '../../assets/telegram-guide-5-mobile.png';
import telegramGuide5Pc from '../../assets/telegram-guide-5-pc.png';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import youtubeMark from '../../../../assets/img-sns-youtube.png';
import telegramMark from '../../../../assets/img-sns-telegram.png';
import UpArrowIcon from '../../../../assets/icon-circle-up.svg';
import DownArrowIcon from '../../../../assets/icon-circle-down.svg';
import { useState } from 'react';

const RegisterChannelGuide = () => {
  const innerWidth = useMediaQuery();
  const [isMobileTabsIcon, setIsMobileTabsIcon] = useState(false);

  const handleMobileTabsOpen = () => {
    setIsMobileTabsIcon(!isMobileTabsIcon);
  };

  return (
    <ChannelGuideContainer>
      <ChannelGuideInnter>
        {innerWidth >= 1024 && (
          <LeftGuideTabs>
            <li>
              {/* TODO : 탭 활성화 시 클래스 active 추가 합니다. */}
              <button type="button" className="active">
                Youtube channel
              </button>
            </li>
            <li>
              <button type="button">Telegram channel</button>
            </li>
          </LeftGuideTabs>
        )}

        <div style={{ flex: '1' }}>
          {innerWidth < 1024 && (
            <TabsMobileVer>
              <p>Youtube channel</p>
              <button type="button" onClick={handleMobileTabsOpen}>
                <img
                  alt="up down icon"
                  src={isMobileTabsIcon === true ? UpArrowIcon : DownArrowIcon}
                />
              </button>

              <TabsMobileList
                className={isMobileTabsIcon === true ? 'show' : ''}
              >
                <li>
                  <button type="button" className="active">
                    Youtube channel
                  </button>
                </li>
                <li>
                  <button type="button">Telegram channel</button>
                </li>
              </TabsMobileList>
            </TabsMobileVer>
          )}
          {/* <YoutubeGuide innerWidth={innerWidth} /> */}
          <TelegramGuide innerWidth={innerWidth} />
        </div>
      </ChannelGuideInnter>
    </ChannelGuideContainer>
  );
};

export default RegisterChannelGuide;

const YoutubeGuide = ({ innerWidth }) => {
  const youtubeList = [
    {
      id: 0,
      explain: `Copy and paste your channel's URL into the EST platform, then click the 'Generate' button to receive a code.`,
      img: youtubeGuide1,
    },
    {
      id: 1,
      explain: `Copy and add the code you receive to your channel’s bio`,
      img: youtubeGuide2,
    },
    {
      id: 2,
      explain: `Go to YouTube, open the profile dropdown menu, and click 'View Your Channel.`,
      img: youtubeGuide3,
    },
    {
      id: 3,
      explain: `Click "Customize Channel" to open YouTube Studio.`,
      img: youtubeGuide4,
    },
    {
      id: 4,
      explain: `Add the Alphabot code to your channel's bio`,
      img: youtubeGuide5,
    },
    {
      id: 5,
      explain: `Click “publish” to save the changes`,
      img: youtubeGuide6,
    },
    {
      id: 6,
      explain: `Go back to the EST platform to check if your channel is linked on the Branding Power page. Then, click "Update Branding Power" to refresh your Branding Power.`,
      img: innerWidth >= 1024 ? youtubeGuide7Pc : youtubeGuide7Mobile,
    },
  ];
  return (
    <>
      <div className="guide-page-title">
        {innerWidth >= 1024 && <img alt="youtube mark" src={youtubeMark} />}
        <p>How to add The EST code to your YouTube channel ?</p>
      </div>
      <GuideList className="youtube-list">
        {youtubeList.map((item) => (
          <div style={{ display: 'grid', gap: '16px' }} key={item.id}>
            <GuideTitle>
              <span>{item.id + 1}</span>
              <p>{item.explain}</p>
            </GuideTitle>
            <img
              alt="guide img"
              src={item.img}
              style={{ width: '100%' }}
              className="guide-img"
            />
          </div>
        ))}
      </GuideList>
    </>
  );
};

const TelegramGuide = ({ innerWidth }) => {
  const telegramList = [
    {
      id: 0,
      explain: `Copy and paste your channel's URL into the EST platform, then click the 'Generate' button to receive a code.`,
      img: telegramGuide1,
    },
    {
      id: 1,
      explain: `Copy and add the code you receive to your channel’s bio`,
      img: telegramGuide2,
    },
    {
      id: 2,
      explain: `Go to Telegram, click the channel profile image to open the detailed information settings.`,
      img: telegramGuide3,
    },
    {
      id: 3,
      explain: `Click the edit button to update the channel's bio, and add the code from EST to the description box.`,
      img: telegramGuide4,
    },
    {
      id: 4,
      explain: `Go back to the EST platform to check if your channel is linked on the Branding Power page. Then, click "Update Branding Power" to refresh your Branding Power.`,
      img: innerWidth >= 1024 ? telegramGuide5Pc : telegramGuide5Mobile,
    },
  ];

  return (
    <>
      <div className="guide-page-title">
        {innerWidth >= 1024 && <img alt="telegram mark" src={telegramMark} />}
        <p>How to add the EST code to your Telegram channel ?</p>
      </div>
      <GuideList className="telegram-list">
        {telegramList.map((item) => (
          <div style={{ display: 'grid', gap: '16px' }} key={item.id}>
            <GuideTitle>
              <span>{item.id + 1}</span>
              <p>{item.explain}</p>
            </GuideTitle>
            <img
              alt="guide img"
              src={item.img}
              style={{ width: '100%' }}
              className="guide-img"
            />
          </div>
        ))}
      </GuideList>
    </>
  );
};
