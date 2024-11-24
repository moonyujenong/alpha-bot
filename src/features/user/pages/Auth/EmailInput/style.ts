import styled from '@emotion/styled';

export const EmailInputContainer = styled.div`
  padding: 48px 16px 16px;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 48px 32px 40px;
    max-width: 420px;
  }
`;

export const EmailInputTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: #212222;
  text-align: center;
  margin-bottom: 16px;
`;

export const EmailInputSubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #5f6061;
  text-align: center;
`;

export const EmailInputBox = styled.div`
  margin: 24px 0;
`;
