import styled from '@emotion/styled';

export const MobileTabsContainer = styled.div`
  position: relative;
  padding-top: 48px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 100vw;
    left: 50%;
    transform: translateX(-50vw);
    height: 8px;
    background-color: #e9ebee;
  }
`;

export const Tabs = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid #dcdde0;

  li {
    > button {
      text-align: center;
      padding: 9px;
      display: block;
      width: 100%;
      background-color: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      color: #9b9c9e;

      &.active {
        background-color: #414142;
        color: #fff;
        font-weight: 600;
      }
    }

    &:not(:last-of-type) {
      border-right: 1px solid #dcdde0;
    }
  }
`;

export const TabsContents = styled.div`
  position: relative;
  margin-top: 24px;
`;
