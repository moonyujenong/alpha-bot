import styled from '@emotion/styled';

export const FaqContainer = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 12px;
  background-color: #fff;

  h3 {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding-right: 16px;
  }

  &.active {
    border-color: #ff9445;
    box-shadow: 2px 8px 16px 0px rgba(0, 0, 0, 0.04);

    h3 {
      color: #eb6a0c;
    }
  }

  @media (min-width: 1024px) {
    h3 {
      gap: 16px;
      align-items: center;
    }
  }
`;

export const FaqTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 24px;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #5f6061;

  p {
    &:first-of-type {
      font-size: 16px;
    }

    &:last-of-type {
      white-space: pre-wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      display: -webkit-box;
    }
  }

  @media (min-width: 1024px) {
    padding: 23px 24px;
    font-size: 16px;
    line-height: 24px;

    p {
      &:first-of-type {
        font-size: 24px;
      }
    }
  }
`;

export const FaqAnswer = styled.div`
  padding: 22px 24px;
  border-top: 1px solid #dcdde0;
  gap: 8px;
  align-items: flex-start;
  display: none;

  img {
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #5f6061;
    white-space: pre-wrap;
  }

  &.active {
    display: flex;
  }

  @media (min-width: 1024px) {
    padding: 23px 24px;
    gap: 16px;

    img {
      width: 24px;
      height: 24px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
