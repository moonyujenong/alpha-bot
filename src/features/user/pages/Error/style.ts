import styled from '@emotion/styled';

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 39px 16px 120px;
  background-color: #000;
  text-align: center;

  > h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: #fff;
    margin-bottom: 16px;
  }

  > p {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #e9ebee;
  }

  @media (min-width: 1024px) {
    padding-top: 122px;
    padding-bottom: 140px;

    > h3 {
      font-size: 40px;
      line-height: 48px;
    }

    > p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const VideoWrap = styled.div`
  position: relative;
  max-width: 360px;
  margin: 0 auto 40px;

  @media (min-width: 1024px) {
    margin-bottom: 65px;
    max-width: 886px;
  }
`;

export const BottomButtonWrap = styled.div`
  margin-top: 32px;

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #fff;
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    h3 {
      margin-bottom: 24px;
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const BottomBtns = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;

  button {
    max-width: 190px;
    flex: 1;
    border: 2px solid transparent; /* 투명한 경계를 먼저 설정 */
    padding: 10px;
    display: block;
    border-radius: 8px;
    background:
      linear-gradient(#000, #000) padding-box,
      linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%) border-box;

    p {
      margin: 0;
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
      text-align: center;
      color: #fff;
    }
  }

  @media (min-width: 1024px) {
    gap: 12px;

    button {
      padding: 11px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 14px;
        line-height: 14px;
      }
    }
  }
`;
