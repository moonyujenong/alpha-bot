import styled from '@emotion/styled';

export const FaqContainer = styled.div`
  padding: 24px 0 0;

  @media (min-width: 1024px) {
    padding: 40px 0 0;
  }
`;

export const FaqTabBox = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FaqInnerTab = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  li {
    display: inline-block;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const FaqInnerTabMenu = styled.a`
  border: 1px solid #dcdde0;
  background-color: transparent;
  padding: 4px 12px;
  color: #9b9c9e;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 100px;
  display: block;
  box-sizing: border-box;

  &.active {
    background-color: #5f6061;
    border-color: #5f6061;
    color: #fff;
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
    padding: 9px 16px;
  }
`;

export const FaqContentBox = styled.div`
  margin-top: 40px;
`;

export const FaqContentTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #414142;
  margin-bottom: 16px;
`;

export const FaqContentInner = styled.div`
  display: grid;
  gap: 8px;
`;
