import styled from '@emotion/styled';

export const SectionOneHashtagsContainer = styled.div`
  overflow: hidden;

  .hashtag-list {
    width: auto;
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 13px;

    &:not(:last-child) {
      margin-bottom: 26px;
    }

    &:nth-child(odd) {
      animation: slideLeft 70s linear infinite;
    }

    &:nth-child(even) {
      transform: translateX(-50%);
      animation: slideRight 70s linear infinite;
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const TagItem = styled.div`
  background-color: #5f6061;
  height: 48px;
  display: flex;
  gap: 0 10px;
  align-items: center;
  position: relative;
  transform: skewX(-20deg);
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 0 32px 0 24px;

  & > p,
  & > img {
    transform: skewX(20deg);
  }

  &.no-check {
    background-color: #9b9c9e;
  }

  &:last-child {
    margin-right: 0;
  }

  &.gradient-item {
    background: linear-gradient(
      90deg,
      #ff9445 -22.81%,
      #fa147a 18.21%,
      #2e83e6 117.82%
    );
  }

  p {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const IconItem = styled.div`
  img {
    max-width: unset;
    height: 48px;
  }
`;
