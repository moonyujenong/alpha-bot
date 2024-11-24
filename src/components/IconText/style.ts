import styled from '@emotion/styled';

export const IconTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #212222;

  img {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
