import styled from '@emotion/styled';

export const ContactSupportContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: linear-gradient(90deg, #ff9445 0%, #fa147a 28%, #2e83e6 96%);
  padding: 24px;
  border-radius: 16px;
  height: 168px;
  justify-content: center;

  img {
    width: 48px;
    height: 48px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    margin-top: 56px;
    flex-direction: row;
    gap: 24px;
    align-items: center;

    img {
      margin: 0;
      width: 64px;
      height: 64px;
    }
  }
`;

export const ContactSupportTitleBox = styled.div`
  text-align: center;

  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.8);
  }

  span {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: #fff;
  }

  @media (min-width: 1024px) {
    text-align: left;

    span {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;
