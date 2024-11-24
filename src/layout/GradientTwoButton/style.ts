import { ButtonBox } from './../../features/user/pages/Auth/Login/style';
import styled from '@emotion/styled';

export const GradientTwoButtonContainer = styled.div`
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

export const GradientTwoButtonInner = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 40px 24px 32px;
  width: 100%;
  max-width: 420px;
`;

export const IconBox = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;

  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const GradientTwoButtonTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #212222;
  margin-bottom: 4px;

  @media (min-width: 1024px) {
    line-height: 30px;
  }
`;

export const GradientTwoButtonSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #5f6061;
  text-align: center;
`;

export const FlexButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;

  button {
    flex: 1;
    padding: 10px 12px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #fff;
    border-radius: 8px;
  }
`;

export const CancelButton = styled.button`
  background-color: #414142;
`;

export const ConfirmButton = styled.button`
  background-color: #414142;
  background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
`;
