import styled from '@emotion/styled';

export const OverviewBox = styled.div`
  display: grid;
  gap: 8px;

  > h2 {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #212222;
  }

  @media (min-width: 1024px) {
    gap: 24px;
    padding-bottom: 48px;
    border-bottom: 1px solid #f0f2f5;

    > h2 {
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
    }
  }
`;

export const OverviewGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  li {
    background-color: #f5f7fa;
    border-radius: 12px;
    padding: 16px;
    word-break: break-all;

    .category {
      font-size: 12px;
      font-weight: 600;
      line-height: 20px;
      color: #414142;
      display: block;
      margin-bottom: 8px;
    }

    > b {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      color: #212222;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    li {
      border-radius: 16px;
      padding: 24px;

      .category {
        font-size: 14px;
        line-height: 22px;
      }

      > b {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
`;
