import styled from '@emotion/styled';

export const VerifyCodeContainer = styled.div`
  display: grid;
  gap: 8px;
  position: relative;
`;

export const VerifyCodeLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #414142;
`;

export const VerifyTimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 0;
  right: 0;

  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: #414142;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export const VerifyCodeInputBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;

  @media (min-width: 1024px) {
    gap: 8px;
  }
`;

export const VerifyCodeInput = styled.input`
  height: 48px;
  background-color: #fff;
  border: 1px solid #dcdde0;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #414142;

  &:active,
  &:focus {
    color: #414142;
    border-color: #414142;
  }

  &:invalid {
    border-color: #f33737;
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

  &.error {
    color: #f33737;
  }

  @media (min-width: 1024px) {
    margin-top: 4px;
    font-size: 14px;
  }
`;
