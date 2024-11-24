import styled from '@emotion/styled';

export const OutlineBtn = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  display: flex;
  gap: 8px;
  border: 1px solid #3955ea;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #3955ea;

  &:hover {
    border: 1px solid #273a9f;
    box-shadow: 4px 4px 12px 0px rgba(90, 90, 90, 0.24);
    color: #273a9f;
  }

  &:active {
    border: 1px solid #1e2c7a;
    color: #1e2c7a;
  }

  &:disabled {
    background: #e9ebee;
    border: 1px solid #b9babd;
    color: #b9babd;
  }

  @media (min-width: 1024px) {
    height: 56px;
  }
`;
