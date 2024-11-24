import styled from '@emotion/styled';

export const ConnectWalletContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 60;
  background: rgba(0, 0, 0, 0.56);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ConnectWalletInner = styled.div`
  border-radius: 16px;
  background-color: #fff;
  padding: 40px 24px 24px;
  position: relative;
  width: 100%;
  max-width: 420px;

  @media (min-width: 1024px) {
    padding: 48px 39px 40px;
  }
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 12px;
  top: 12px;

  @media (min-width: 1024px) {
    top: 20px;
    right: 16px;
  }
`;

export const ConnectWalletTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: #212222;
  text-align: center;
  margin-bottom: 37px;
`;

export const ConnectWalletOtherBox = styled.div`
  padding: 0 0 24px;
  border-bottom: 1px solid #dcdde0;
`;

export const ConnectWalletOtherSnsBox = styled.div`
  display: grid;
  gap: 8px;

  &:not(:first-of-type) {
    margin-top: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: #5f6061;
  }
`;

export const ConnectWalletOtherSnsList = styled.ul`
  display: grid;
  gap: 8px;
`;

export const ConnectWalletOtherSnsLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #414142;

  img {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: block;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const ConnectWalletBottomTerms = styled.p`
  display: block;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #9b9c9e;

  b {
    font-weight: 600;
    color: #5f6061;
  }

  @media (min-width: 1024px) {
    padding: 16px 0 0;
  }
`;
