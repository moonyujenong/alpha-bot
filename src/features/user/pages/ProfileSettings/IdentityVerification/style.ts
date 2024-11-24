import styled from '@emotion/styled';

export const IdentityContainer = styled.div`
  margin-top: 24px;

  @media (min-width: 1024px) {
    margin-top: 64px;
  }
`;

export const IdentityIntro = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;

  img {
    width: 96px;
    height: 96px;
    margin: 0 auto 16px;
  }

  @media (min-width: 1024px) {
    padding: 48px 40px;

    img {
      width: 144px;
      height: 144px;
      margin-bottom: 32px;
    }
  }
`;

export const IdentityIntroText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #414142;
  display: block;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`;

export const GradientButton = styled.button`
  width: 100%;
  border-radius: 8px;
  padding: 15px 24px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
  max-width: 356px;
  margin: 0 auto;
  display: block;
  height: 48px;

  @media (min-width: 1024px) {
    border-radius: 12px;
    height: 56px;
  }
`;

export const IdentityConsentContainer = styled.div`
  margin-top: 40px;
  background-color: #fff;
  border-radius: 16px;
  padding: 40px 24px 32px;

  @media (min-width: 1024px) {
    margin-top: 64px;
    padding: 48px 40px;
  }
`;

export const IdentityConsentSteps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Paralle = styled.div`
  width: 34px;
  height: 32px;
  background: #d9d9d9;
  transform: skew(-20deg);
  border-radius: 0 8px 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:not(:last-of-type) {
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 16px;
      height: 1px;
      background-color: #d9d9d9;
      right: -16px;
    }
  }

  p {
    transform: skew(20deg);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #9b9c9e;
  }

  &.active {
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 77.45%, #dc258b 99.13%);

    p {
      color: #fff;
    }
  }
`;

export const IdentityConsentTitle = styled.h3`
  margin: 24px 0;
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  color: #212222;

  @media (min-width: 1024px) {
    margin: 32px 0 40px;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const IdentityConsentContentBox = styled.div`
  border-radius: 16px;
  border: 1px solid #b9babd;
  background-color: #f0f2f5;
  padding: 24px 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #414142;
  max-height: 380px;
  overflow-y: auto;

  ul {
    li {
      position: relative;
      padding-left: 28px;

      &:not(:first-of-type) {
        margin-top: 8px;
      }

      &:before {
        display: inline-block;
        position: absolute;
        left: 18px;
        top: 9px;
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 100px;
        background-color: #414142;
      }
    }
  }

  @media (min-width: 1024px) {
    overflow-y: hidden;
    padding: 31px 28px 26px;
    font-size: 14px;
    line-height: 22px;
    max-height: initial;
  }
`;

export const IdentityConsentCheckBox = styled.div`
  margin-top: 9px;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    margin-top: 17px;
    margin-bottom: 40px;
  }
`;

export const IdentityResultContainer = styled.div`
  margin-top: 40px;
  background-color: #fff;
  padding: 56px 24px;
  text-align: center;
  width: 100%;
  border-radius: 16px;

  > img {
    width: 96px;
    height: 96px;
    display: block;
    margin: 0 auto 24px;
  }

  @media (min-width: 1024px) {
    margin-top: 32px;
    padding: 40px;
  }
`;

export const IdentityResultTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #212222;
  margin-bottom: 8px;
`;

export const IdentityResultSubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #212222;

  b {
    font-weight: 700;
    color: #2e83e6;
  }
`;

export const IdentityResultOutLink = styled.a`
  border-radius: 100px;
  display: block;
  margin: 0 auto;
  border: 1px solid #b9babd;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  color: #212222;
  width: fit-content;
  padding-left: 12px;
  padding-right: 4px;
`;
