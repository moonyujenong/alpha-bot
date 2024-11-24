import styled from '@emotion/styled';

export const GradientOneButtonContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.56);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 60;
`;

export const GradientOneButtonInner = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 40px 24px 32px;
  max-width: 420px;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 48px 32px 40px;
  }
`;

export const IconBox = styled.div`
  width: 96px;
  height: 96px;
  margin: 0 auto 16px;

  @media (min-width: 1024px) {
    margin-bottom: 24px;
    width: 144px;
    height: 144px;
  }
`;

export const GradientOneButtonTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #212222;
  margin-bottom: 4px;

  @media (min-width: 1024px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 8px;
  }
`;

export const GradientOneButtonSubTitle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: #5f6061;
  text-align: center;
  margin-bottom: 24px;

  b {
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`;

export const GradientButton = styled.button`
  padding: 10px 16px;
  color: #fff;
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
  border-radius: 8px;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 16px 24px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 12px;
  }
`;
