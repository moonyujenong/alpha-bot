import styled from '@emotion/styled';

export const DetailsBox = styled.div`
  display: grid;
  gap: 8px;
  padding-top: 40px;

  > h2 {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #212222;
  }

  @media (min-width: 1024px) {
    gap: 24px;
    padding-top: 48px;

    > h2 {
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
    }
  }
`;

export const DetailsContent = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #414142;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
