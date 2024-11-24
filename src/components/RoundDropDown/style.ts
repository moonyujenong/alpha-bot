import styled from '@emotion/styled';

export const RoundDropDownWrap = styled.div`
  position: relative;
`;

export const RoundDropDownBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 8px;
  border-radius: 100px;
  border: 1px solid #b9babd;
  padding: 4px 8px 4px 12px;
  cursor: pointer;

  p {
    font-size: 12px;
    font-weight: 600;
    line-height: 12px;
    color: #414142;
    min-width: 72px;
  }

  > img {
    width: 20px;
    height: 20px;
  }

  .arrow-icon {
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
  }

  @media (min-width: 1024px) {
    padding: 6px 8px 6px 12px;

    > img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const RoundDropDownOpen = styled.ul`
  background-color: #fff;
  position: absolute;
  top: 42px;
  z-index: 10;
  border-radius: 8px;
  width: 100%;
  left: 0;
  overflow: hidden;
  display: none;

  &.show {
    display: block;
  }

  li {
    button {
      padding: 8px 16px;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      color: #414142;
      background-color: #fff;
      display: block;
      width: 100%;
      text-align: left;

      &:hover {
        background-color: #e9ebee;
      }

      &.active {
        color: #ff9445;
        font-weight: 700;
        background-image: url(/src/assets/icon-check-orange.svg);
        background-repeat: no-repeat;
        background-position: center right 16px;
        background-size: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    top: 46px;

    li {
      button {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
`;
