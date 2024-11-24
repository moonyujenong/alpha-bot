import styled from '@emotion/styled';

export const ResentWalletMarkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  overflow: hidden;

  p {
    font-size: 12px;
    font-weight: 500;
    /* line-height: 20px; */
    color: #5f6061;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const CopyButton = styled.button`
  margin-left: auto;

  .copy-img {
    width: 16px;
    min-width: 16px;
    height: 16px;
  }
`;
