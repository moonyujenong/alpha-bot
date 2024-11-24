import styled from '@emotion/styled';

export const SupportHelpContainer = styled.div`
  padding: 40px 0 0;

  @media (min-width: 1024px) {
    padding: 64px 0 0;
  }
`;

export const TabListBox = styled.div`
  margin: 0 -16px;
  border-bottom: 1px solid #dcdde0;
  padding: 0 16px;

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0;
  }
`;

export const TabList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    color: #b9babd;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding-bottom: 10px;
    position: relative;
    display: block;
    white-space: nowrap;

    &.active {
      color: #414142;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background-color: #3955ea;
        border-radius: 100px;
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: 1;
      }
    }
  }

  @media (min-width: 1024px) {
    a {
      padding-bottom: 12px;
      font-size: 20px;
    }
  }
`;
