import styled from '@emotion/styled';

export const CalculateDetailQuantityWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.56);

  .inner {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 24px 24px 0 0;
    padding: 48px 16px 24px;
  }
`;

export const TitleArea = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #212222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;

  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const InputStyle = styled.input`
  border: 1px solid #dcdde0;
  border-radius: 8px;
  background-color: #fff;
  text-align: right;
  padding: 8px 16px;
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #414142;
  caret-color: #ff9445;
`;

export const PlusUnitButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    flex: 1;
    border-radius: 8px;
    border: 1px solid #dcdde0;
    background-color: #fff;
    text-align: center;
    padding: 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: #414142;

    &.reset {
      font-weight: 400;
      color: #5f6061;
      border: 0;
      padding: 0;
      margin-left: 8px;
      display: flex;
      align-items: center;
    }
  }
`;

export const Keypad = styled.div`
  position: relative;
  margin: 24px -16px;
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 0;
  border-top: 1px solid #f0f2f5;
  border-bottom: 1px solid #f0f2f5;

  button {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: #414142;
  }
`;

export const TotalArea = styled.div`
  background-color: #fff;
  padding: 0;

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

    b {
      color: #ff9445;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
  }

  button {
    background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
    border-radius: 8px;
    color: #fff;
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    width: 100%;
    text-align: center;
    margin-top: 16px;

    &.cancel {
      background: #414142;
      color: #fff;
    }
  }
`;
