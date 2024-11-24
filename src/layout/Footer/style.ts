import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #212222;
  padding: 32px 0 24px;
  z-index: 10;

  @media (min-width: 1024px) {
    padding: 32px 0px;
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.div`
  width: fit-content;

  img {
    width: 119px;
    height: 24px;
  }

  @media (min-width: 1024px) {
    img {
      width: 154px;
      height: 32px;
    }
  }
`;

export const FooterSns = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 0;
  right: 16px;
  z-index: 5;

  a {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1024px) {
    position: relative;
    gap: 40px;
    right: initial;
  }
`;

export const FooterTerms = styled.div`
  display: grid;
  gap: 8px;

  @media (min-width: 1024px) {
    gap: 4px;
  }
`;

export const FooterTermsLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #9b9c9e;
  cursor: pointer;

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

export const FooterCopyRight = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #5f6061;
`;
