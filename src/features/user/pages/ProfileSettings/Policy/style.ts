import styled from '@emotion/styled';

export const PolicyContainer = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 16px;

  @media (min-width: 1024px) {
    margin-top: 56px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PolicyBox = styled.div`
  background-color: #fff;
  border-radius: 12px;
  position: relative;
  padding: 24px;
`;

export const PolicyThumbBox = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PolicyTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #414142;
`;

export const PolicyShareButton = styled.a`
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  top: 24px;
  right: 24px;
`;
