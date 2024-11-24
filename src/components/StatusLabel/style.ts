import styled from '@emotion/styled';

export const StatusLabelBox = styled.div`
  padding: 4px;
  box-sizing: border-box;
  font-size: 11px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 8px;
  background-color: #d5e6fa;
  color: #2e83e6;
  width: fit-content;
  width: 80px;
  min-width: 80px;
  text-align: center;

  &.red {
    background-color: #fdd7d7;
    color: #f33737;
  }

  &.green {
    background-color: #d9f4df;
    color: #3fc75d;
  }

  @media (min-width: 1024px) {
    padding: 4px;
    font-size: 12px;
    width: 90px;
    min-width: 90px;
  }
`;
