import styled from '@emotion/styled';

export const TimelineBox = styled.div`
  > h2 {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #212222;
    margin-bottom: 8px;
  }

  @media (min-width: 1024px) {
    margin-top: 64px;

    > h2 {
      font-size: 24px;
      line-height: 28px;
      font-weight: 600;
    }
  }
`;

export const TimelineList = styled.ul`
  display: grid;
  gap: 42px;
  padding-left: 16px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;

    &:not(:last-of-type) {
      &::after {
        content: '';
        display: block;
        background-image: url(/src/features/user/assets/icon-timeline-after.svg);
        position: absolute;
        background-repeat: no-repeat;
        width: 30px;
        height: 34px;
        bottom: -38px;
      }
    }

    > .number {
      border-radius: 100px;
      aspect-ratio: 1/1;
      background-color: #5f6061;
      color: #fff;
      width: 32px;
      min-width: 32px;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;

export const TimelineInfo = styled.div`
  > p {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #5f6061;
  }

  > b {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const DistributionBox = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #212222;
  }

  ul {
    display: grid;
    gap: 16px;
    margin-top: 8px;
    padding-left: 16px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 500;
      line-height: 32px;
      color: #000000;

      > img {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin-top: 64px;

    h3 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
    }

    ul {
      margin-top: 24px;
      gap: 16px;
      padding-left: 0;
    }
  }
`;
