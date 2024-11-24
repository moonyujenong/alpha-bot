import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const GradientBtn = styled.button`
  width: 100%;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f0f2f5 0%, #dcdde0 69.77%);
  height: 48px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #b9babd;

  &:active {
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    color: #fff;
  }

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.32) 0%,
        rgba(0, 0, 0, 0.32) 100%
      ),
      linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    box-shadow: 4px 4px 12px 0px rgba(90, 90, 90, 0.24);
    color: #fff;
  }

  &:disabled,
  &:disabled:hover {
    background: linear-gradient(90deg, #f0f2f5 0%, #dcdde0 69.77%);
    color: #b9babd;
    pointer-events: none;
  }

  .loading-icon {
    animation: ${loadingAnimation} 1s infinite linear;
  }

  @media (min-width: 1024px) {
    border-radius: 12px;
    height: 56px;
  }
`;
