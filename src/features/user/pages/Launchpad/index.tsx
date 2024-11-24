import {
  FlexBox,
  GridBox,
  GridWrap,
  ItemBox,
  ItemInfo,
  LaunchpadContainer,
  LaunchpadInner,
  NameBox,
  RadiusLabel,
  RadiusLabelBox,
  TimeOutBox,
} from './style';
import sampleThumb from '../../../../assets/sample/img-sample-est-thumb.png';
import sampleTokenThumb from '../../../../assets/sample/sample-token.svg';
import verifiedIcon from '../../../../assets/icon-verified-fill.svg';
import arrowTop from '../../../../assets/icon-fill-arrow-top-white.svg';
import useMediaQuery from '../../../../hooks/useMediaQuery';

const Launchpad = () => {
  const innerWidth = useMediaQuery();

  return (
    <LaunchpadContainer>
      <LaunchpadInner>
        <h2>The EST Launchpad</h2>
        <p>
          Be the first to claim priority access to influential crypto tokens.
        </p>

        <GridWrap>
          <h3>Invest with The EST</h3>

          <FlexBox>
            <ItemBox className="flex">
              <img alt="sample est thumb" src={sampleThumb} />
              <ItemInfo>
                <NameBox>
                  <img
                    alt="token icon"
                    src={sampleTokenThumb}
                    className="icon"
                  />
                  <h3>The EST</h3>
                  <img
                    alt="verified icon"
                    className="verified"
                    src={verifiedIcon}
                  />
                </NameBox>
                <h3 className="token-title">Token Title</h3>
                {innerWidth >= 1024 && (
                  <p
                    className="sub-explain"
                    style={{
                      fontSize: '12px',
                      lineHeight: '16px',
                      fontWeight: '400',
                      color: '#414142',
                      marginBottom: '16px',
                    }}
                  >
                    Body text for whatever you’d like to suggest. Add main
                    takeaway points, quotes, anecdotes, or even a very very
                    short story
                  </p>
                )}
                <RadiusLabelBox className="flex">
                  <RadiusLabel className="gradient">
                    60P <img alt="arrow top icon" src={arrowTop} />
                  </RadiusLabel>
                  <RadiusLabel>Category A</RadiusLabel>
                  <RadiusLabel className="access">Early access</RadiusLabel>
                </RadiusLabelBox>
                {innerWidth >= 1024 && (
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#414142',
                      marginBottom: '4px',
                    }}
                  >
                    Upcoming in
                  </p>
                )}
                <TimeOutBox>
                  <span>
                    <b>0</b>d
                  </span>
                  <span>
                    <b>0</b>h
                  </span>
                  <span>
                    <b>0</b>m
                  </span>
                  <span>
                    <b>0</b>s
                  </span>
                </TimeOutBox>
              </ItemInfo>
            </ItemBox>
            <ItemBox className="flex">
              <img alt="sample est thumb" src={sampleThumb} />
              <ItemInfo>
                <NameBox>
                  <img
                    alt="token icon"
                    src={sampleTokenThumb}
                    className="icon"
                  />
                  <h3>The EST</h3>
                  <img
                    alt="verified icon"
                    className="verified"
                    src={verifiedIcon}
                  />
                </NameBox>
                <h3 className="token-title">Token Title</h3>
                {innerWidth >= 1024 && (
                  <p
                    className="sub-explain"
                    style={{
                      fontSize: '12px',
                      lineHeight: '16px',
                      fontWeight: '400',
                      color: '#414142',
                      marginBottom: '16px',
                    }}
                  >
                    Body text for whatever you’d like to suggest. Add main
                    takeaway points, quotes, anecdotes, or even a very very
                    short story
                  </p>
                )}
                <RadiusLabelBox className="flex">
                  <RadiusLabel className="gradient">
                    60P <img alt="arrow top icon" src={arrowTop} />
                  </RadiusLabel>
                  <RadiusLabel>Category A</RadiusLabel>
                  <RadiusLabel className="live">Live now</RadiusLabel>
                </RadiusLabelBox>
                {innerWidth >= 1024 && (
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#414142',
                      marginBottom: '4px',
                    }}
                  >
                    Upcoming in
                  </p>
                )}
                <TimeOutBox>
                  <span>
                    <b>0</b>d
                  </span>
                  <span>
                    <b>0</b>h
                  </span>
                  <span>
                    <b>0</b>m
                  </span>
                  <span>
                    <b>0</b>s
                  </span>
                </TimeOutBox>
              </ItemInfo>
            </ItemBox>
          </FlexBox>

          <GridBox>
            <ItemBox>
              <img alt="sample est thumb" src={sampleThumb} />
              <ItemInfo>
                <NameBox>
                  <img
                    alt="token icon"
                    src={sampleTokenThumb}
                    className="icon"
                  />
                  <h3>The EST</h3>
                  <img
                    alt="verified icon"
                    className="verified"
                    src={verifiedIcon}
                  />
                </NameBox>
                <h3 className="token-title">Token Title</h3>
                <RadiusLabelBox>
                  <RadiusLabel className="gradient">
                    60P <img alt="arrow top icon" src={arrowTop} />
                  </RadiusLabel>
                  <RadiusLabel>Category A</RadiusLabel>
                  <RadiusLabel className="live">Live now</RadiusLabel>
                </RadiusLabelBox>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#414142',
                    marginBottom: '4px',
                  }}
                >
                  Upcoming in
                </p>
                <TimeOutBox>
                  <span>
                    <b>0</b>d
                  </span>
                  <span>
                    <b>0</b>h
                  </span>
                  <span>
                    <b>0</b>m
                  </span>
                  <span>
                    <b>0</b>s
                  </span>
                </TimeOutBox>
              </ItemInfo>
            </ItemBox>
            <ItemBox>
              <img alt="sample est thumb" src={sampleThumb} />
              <ItemInfo>
                <NameBox>
                  <img
                    alt="token icon"
                    src={sampleTokenThumb}
                    className="icon"
                  />
                  <h3>The EST</h3>
                  <img
                    alt="verified icon"
                    className="verified"
                    src={verifiedIcon}
                  />
                </NameBox>
                <h3 className="token-title">Token Title</h3>
                <RadiusLabelBox>
                  <RadiusLabel className="gradient">
                    60P <img alt="arrow top icon" src={arrowTop} />
                  </RadiusLabel>
                  <RadiusLabel>Category A</RadiusLabel>
                  <RadiusLabel className="ended">Sale ended</RadiusLabel>
                </RadiusLabelBox>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#414142',
                    marginBottom: '4px',
                  }}
                >
                  Upcoming in
                </p>
                <TimeOutBox>
                  <span>
                    <b>0</b>d
                  </span>
                  <span>
                    <b>0</b>h
                  </span>
                  <span>
                    <b>0</b>m
                  </span>
                  <span>
                    <b>0</b>s
                  </span>
                </TimeOutBox>
              </ItemInfo>
            </ItemBox>
          </GridBox>
        </GridWrap>
      </LaunchpadInner>
    </LaunchpadContainer>
  );
};

export default Launchpad;
