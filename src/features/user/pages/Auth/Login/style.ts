import styled from '@emotion/styled';

export const LoginWrap = styled.div`
  padding: 48px 16px 16px;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 48px 32px 40px;
    max-width: 420px;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: #212222;
  padding-bottom: 24px;
  border-bottom: 1px solid #dcdde0;

  p {
    color: #3955ea;
    display: inline-block;
  }
`;

export const HelpText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: #9b9c9e;
  padding: 8px 0;
  margin-bottom: 24px;

  b {
    color: #5f6061;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const ButtonBox = styled.div`
  margin: 16px 0 32px;

  @media (min-width: 1024px) {
    margin-top: 24px;
  }
`;

export const SnsBox = styled.div`
  display: grid;
  gap: 8px;

  p {
    color: #5f6061;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
  }
`;

export const SnsLinkBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
`;

export const SnsLink = styled.a`
  width: 48px;
  height: 48px;
  display: block;

  @media (min-width: 1024px) {
    width: 56px;
    height: 56px;
  }
`;

export const WalletBox = styled.div`
  width: 100%;
  margin-top: 24px;
  display: grid;
  gap: 8px;

  p {
    color: #5f6061;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
  }
`;

export const BottomLoginCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: #414142;
  }

  a {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    color: #5f6061;
  }
`;
