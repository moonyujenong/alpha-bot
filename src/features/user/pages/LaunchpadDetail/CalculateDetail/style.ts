import styled from '@emotion/styled';

export const CalculateWrap = styled.div`
  @media (min-width: 1024px) {
    margin-top: 24px;
  }
`;

export const CalculateBox = styled.ul`
  border: 1px solid #b9babd;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px 16px;
  display: grid;
  gap: 8px;
  margin-bottom: 16px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
      color: #5f6061;

      &:last-of-type {
        color: #212222;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 16px 24px;
    margin-bottom: 24px;
  }
`;

export const TotalArea = styled.div`
  background-color: #fff;
  padding: 24px 0;

  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: #212222;
  }

  .price {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #212222;
    display: flex;
    align-items: center;
    gap: 4px;

    b {
      color: #ff9445;
      font-size: 16px;
      font-weight: 700;
      line-height: 32px;
    }
  }

  button {
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    border-radius: 8px;
    color: #fff;
    padding: 12px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    width: 100%;
    text-align: center;
    margin-top: 16px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 0;

    span {
      font-size: 16px;
      line-height: 24px;
    }

    .price {
      font-size: 16px;
      line-height: 24px;

      b {
        font-size: 24px;
        line-height: 32px;
      }
    }

    button {
      border-radius: 16px;
      padding: 16px;
    }
  }
`;

export const AmountBox = styled.div`
  border-top: 1px solid #dcdde0;
  padding-top: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid #dcdde0;

  > h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #212222;
    margin-bottom: 8px;

    > p {
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
    }
  }

  @media (min-width: 1024px) {
    padding-top: 24px;
  }
`;

export const PlusUnitButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > button {
    flex: 1;
    border-radius: 4px;
    border: 1px solid #dcdde0;
    background-color: #fff;
    text-align: center;
    padding: 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: #414142;
  }
`;

export const PmgBox = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #212222;

  .count {
    background-color: #e9ebee;
    border-radius: 8px;
    border: 1px solid #dcdde0;
    text-align: center;
    padding: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #414142;
    flex: 1;
  }

  @media (min-width: 1024px) {
    gap: 15px;
  }
`;

export const TopScrollDownButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 8px;
  width: 100%;

  img {
    width: 24px;
    height: 24px;
    margin: 0 auto;
  }
`;

export const UserInput = styled.input`
  border: 1px solid #dcdde0;
  border-radius: 8px;
  background-color: #fff;
  padding: 8px 16px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #414142;
  caret-color: #ff9445;
  padding-right: 30px;
`;

export const InputCloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 10px;
`;

export const InputUnit = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #212222;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
