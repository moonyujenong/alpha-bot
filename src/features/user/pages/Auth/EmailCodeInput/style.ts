import styled from '@emotion/styled';

export const EmailCodeContainer = styled.div`
  padding: 48px 16px 16px;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 48px 32px 40px;
    max-width: 420px;
  }
`;

export const EmailCodeTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: #212222;
  margin-bottom: 16px;
  text-align: center;
`;

export const EmailCodeSubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #5f6061;
  text-align: center;
  margin-bottom: 24px;
`;

export const BottmHelper = styled.div`
  margin-top: 32px;

  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #5f6061;
  }

  a {
    font-weight: 700;
    color: #2e83e6;
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    span,
    a {
      font-size: 14px;
    }

    span {
      line-height: 21px;
    }
  }
`;
