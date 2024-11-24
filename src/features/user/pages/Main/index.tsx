import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SecTwoRightImage from '../../assets/main-kol-img.png';
import LaunchpadRight from '../../assets/main-kol-launchpad.svg';
import BrandingPowerRight from '../../assets/main-kol-branding-power.svg';
import SecTwoPhoneImage from '../../assets/main-kol-phone.png';
import mobileKolRightImage from '../../assets/main-mobile-kol.png';
import {
  BannerContainer,
  BannerText,
  BannerTextContainer,
  Box,
  MainContentsContainer,
  RightImageContainer,
  RightImageWrap,
  SectionItem,
  SectionOneContainer,
  SectionOneTitleContainer,
  SectionTwoContainer,
  SectionTwoListContainer,
  SectionTowWrapper,
  SectionTwoTitle,
  SectionTwoTopContainer,
  SectionWrap,
  TextContainer,
} from './style.ts';
import { useMediaQuery } from 'usehooks-ts';
import HashTag from './HashTag/index.tsx';
import 'animate.css';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const sectionTwoRef = useRef(null);
  const containerRef = useRef(null);
  const sectionTwoWrapperRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const isMobile = useMediaQuery('(max-width: 1023px)');

  useGSAP(
    () => {
      gsap.fromTo(
        sectionTwoRef.current,
        { scale: 0.9 },
        {
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionTwoRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          },
        },
      );

      // const cards = [card2Ref.current, card3Ref.current];

      if (!isMobile) {
        gsap.fromTo(
          card1Ref.current,
          {
            y: '30%',
          },
          {
            y: '60%',
            scrollTrigger: {
              trigger: sectionTwoWrapperRef.current,
              start: 'top center',
              end: 'top top',
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          card2Ref.current,
          {
            rotateX: '-20deg',
            y: '200%',
            z: '10px',
          },
          {
            rotateX: 0,
            y: '-100%',
            z: 0,
            scrollTrigger: {
              trigger: sectionTwoWrapperRef.current,
              start: 'top top-=200',
              end: 'top top-=800',
              scrub: true,
            },
          },
        );

        gsap.to(card1Ref.current, {
          y: '30%',
          scrollTrigger: {
            trigger: sectionTwoWrapperRef.current,
            start: 'top top-=400',
            end: 'top top-=800',
            scrub: true,
          },
        });

        gsap.fromTo(
          card3Ref.current,
          {
            rotateX: '-20deg',
            y: '200%',
            z: '10px',
          },
          {
            rotateX: 0,
            y: '-230%',
            z: 0,
            scrollTrigger: {
              trigger: sectionTwoWrapperRef.current,
              start: 'top top-=600',
              end: 'top top-=1200',
              scrub: true,
            },
          },
        );
      } else {
        return;
      }
    },
    { scope: sectionTwoRef, dependencies: [isMobile] },
  );

  return (
    <MainContentsContainer id="contents">
      <BannerContainer id="main-banner">
        <div className="banner-image">
          {/* <img src={MainBannerImage} alt="One platform all things The EST" /> */}
          <div className="banner-text">
            <BannerTextContainer>
              <BannerText className="right animate__animated animate__fadeInDown">
                One platform
              </BannerText>
              <BannerText className="left animate__animated animate__fadeInDown custom-delay-03s">
                all things <span className="line"></span>
              </BannerText>
              <BannerText className="center animate__animated animate__fadeInDown custom-delay-06s">
                The EST
              </BannerText>
            </BannerTextContainer>
          </div>
        </div>
      </BannerContainer>
      <div id="section">
        <SectionOneContainer id="section1">
          <SectionOneTitleContainer>
            <h2>
              Let’s make
              <br />
              <b>#together</b>
            </h2>
          </SectionOneTitleContainer>
          <HashTag />
        </SectionOneContainer>
        <SectionTwoContainer id="section2" ref={sectionTwoRef}>
          <div className="container">
            <SectionTwoTopContainer className="sec-top">
              <SectionTwoTitle className="sec-title">
                <h2>
                  KOL-centric
                  <br />
                  Platform
                </h2>
                <p>
                  We have a strong base of KOLs and rich data. We are building a
                  global platform that facilitates cross-border connections
                  among KOLs, empowering them to exchange insights and amplify
                  their impact by 200%.
                </p>
              </SectionTwoTitle>
              <RightImageContainer className="right-image">
                <img src={SecTwoRightImage} alt="right img" />
              </RightImageContainer>
            </SectionTwoTopContainer>
            <SectionTwoListContainer className="sec-list" ref={containerRef}>
              <SectionTowWrapper ref={sectionTwoWrapperRef}>
                <SectionItem className="card sec-item-1" ref={card1Ref}>
                  <Box className="box">
                    <SectionWrap className="sec-wrap">
                      <TextContainer className="text">
                        <h3>Exclusive Launchpad</h3>
                        <p>
                          <span>Coming Soon</span>
                        </p>
                      </TextContainer>
                      <RightImageWrap className="right-image">
                        <img src={LaunchpadRight} alt="Exclusive Launchpad" />
                      </RightImageWrap>
                    </SectionWrap>
                  </Box>
                </SectionItem>
                <SectionItem
                  className="card sec-item-2 gray-item"
                  ref={card2Ref}
                >
                  <Box className="box">
                    <SectionWrap className="sec-wrap">
                      <TextContainer className="text">
                        <h3>Web3 Campaign Builder</h3>
                        <p>
                          <span>Coming Soon</span>
                        </p>
                      </TextContainer>
                      <RightImageWrap className="right-image">
                        <img
                          src={BrandingPowerRight}
                          alt="Web3 Campaign Builder"
                        />
                      </RightImageWrap>
                    </SectionWrap>
                  </Box>
                </SectionItem>
                <SectionItem className="card sec-item-3" ref={card3Ref}>
                  <Box className="box">
                    <SectionWrap className="sec-wrap">
                      <TextContainer className="text item-3">
                        <h3>
                          KOL Analytics: <br />
                          Branding Power
                        </h3>
                        <p>
                          Your Branding Power is a combination of your Crypto
                          Ability and Social Influence, determining your
                          eligibility for rewards and granting you access to
                          exclusive Web3 projects. Boost your Branding Power now
                          to unlock unique benefits and opportunities.
                        </p>
                      </TextContainer>
                      <RightImageWrap
                        className="right-image kol-box-img"
                        style={{ display: 'block' }}
                      >
                        <img
                          src={
                            isMobile ? mobileKolRightImage : SecTwoPhoneImage
                          }
                          alt="KOL Analytics: Branding Power"
                        />
                      </RightImageWrap>
                    </SectionWrap>
                  </Box>
                </SectionItem>
              </SectionTowWrapper>
            </SectionTwoListContainer>
          </div>
        </SectionTwoContainer>
      </div>
    </MainContentsContainer>
  );
};

export default Main;
