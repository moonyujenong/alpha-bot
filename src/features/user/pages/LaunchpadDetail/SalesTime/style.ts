import styled from '@emotion/styled';

export const SalesTimeBox = styled.div`
  position: relative;
`;

export const SalesTimeTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #414142;
  }
`;

export const TimesBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #f0f2f5;
  border-radius: 12px;
  margin-bottom: 16px;

  li {
    flex: 1;
    text-align: center;
    position: relative;

    > b {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      color: #414142;
    }

    > p {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      color: #9b9c9e;
    }

    &:not(:last-of-type) {
      &::after {
        content: ':';
        display: block;
        position: absolute;
        right: 0;
        top: 3px;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        color: #414142;
      }
    }
  }
`;

export const FcfsText = styled.span`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dcdde0;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #788bf1;

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }
`;
