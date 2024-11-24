import styled from '@emotion/styled';

export const CheckBoxTextLabel = styled.div`
  cursor: pointer;
  position: relative;

  label {
    display: flex;
    align-items: flex-start;
    gap: 11px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #414142;
    position: relative;
  }

  input {
    position: absolute;
    visibility: hidden;
  }

  input[type='checkbox']:checked + div {
    border-color: #3955ea;
    background-color: #3955ea;
    background-image: url(/src/assets/icon-check-white.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px;

    + p {
      color: #3955ea;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

export const CheckBoxCustom = styled.div`
  width: 18px;
  min-width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid #5f6061;
  box-sizing: border-box;
  position: relative;
  top: 2px;
`;
