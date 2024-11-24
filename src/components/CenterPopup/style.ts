import styled from '@emotion/styled';

export const CenterPopupContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.56);
  z-index: 60;
`;

export const CenterPopupInner = styled.div`
  width: 100%;
  max-width: 420px;
  height: fit-content;
  position: relative;
  background-color: #fff;
  border-radius: 16px;
  /* padding: 40px 24px 24px; */

  @media (min-width: 1024px) {
    /* padding: 48px 32px 40px; */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 24px;
  height: 24px;
`;
