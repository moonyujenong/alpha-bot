import styled from '@emotion/styled';

export const CopyLabelInputBox = styled.div`
  width: 100%;
  display: grid;
  gap: 8px;
  position: relative;
`;

export const LabelTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #414142;

  /* @media (min-width: 1024px) {
    color: #141414;
  } */
`;

export const InputFormBox = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
`;

export const InputForm = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dcdde0;
  box-sizing: border-box;
  background-color: #fff;
  padding: 0px 16px;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  &:disabled {
    background-color: #e9ebee;
    color: #414142;
  }

  @media (min-width: 1024px) {
    height: 56px;
  }
`;

export const HelperText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #9b9c9e;
  white-space: pre-wrap;

  &.invalid {
    color: #f33737;
  }

  &.disabled {
    color: #414142;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;

export const CopyButton = styled.button`
  width: 24px;
  height: 24px;
  opacity: 1;

  &:disabled {
    opacity: 0.3;
  }
`;
