import styled from '@emotion/styled';

export const ToastPopupWrap = styled.div`
  padding: 0 16px;
  position: absolute;
  z-index: 55;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 420px;

  @media (min-width: 1024px) {
    left: initial;
    transform: initial;
    right: 0;
    top: 0;
    bottom: initial;
  }
`;

export const ToastPopupBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: fit-content;
  padding: 16px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #212222;
  border-radius: 12px;
  min-height: 56px;
  box-shadow: 4px 8px 16px 0px rgba(0, 0, 0, 0.08);

  &.default {
    background-color: #e7f2ff;
    border: 1px solid #4f97ea;
  }

  &.success {
    background-color: #d9f4df;
    border: 1px solid #1ca463;
  }

  &.warning {
    background-color: #fffae2;
    border: 1px solid #fdd031;
  }

  &.error {
    background-color: #ffefef;
    border: 1px solid #f33737;
  }

  &.custom {
    background-color: #f0f2f5;
    border: 1px solid #b9babd;
  }

  img {
    width: 24px;
    height: 24px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #212222;
    flex: 1;
    word-break: break-all;
    white-space: pre-wrap;
  }
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
`;
