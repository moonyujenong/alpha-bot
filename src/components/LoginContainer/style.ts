import styled from '@emotion/styled';

export const LoginContainerWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 60;
  background: rgba(0, 0, 0, 0.56);
  display: flex;

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
`;

export const LoginContainerContents = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 24px 24px 0 0;
  height: 95%;
  align-self: flex-end;
  overflow-y: auto;
  position: relative;

  @media (min-width: 1024px) {
    height: fit-content;
    align-self: initial;
    border-radius: 16px;
    width: fit-content;
  }
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 16px;

  @media (min-width: 1024px) {
    top: 20px;
  }
`;
