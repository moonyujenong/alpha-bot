import { StatusLabelBox } from './style';

const StatusLabel = ({ title, color }: { title?: any; color?: string }) => {
  return (
    /* TODO : color 는 blue, green, red 총 3가지 타입이 있습니다. 기본은 blue 입니다. */
    <StatusLabelBox className={color}>{title}</StatusLabelBox>
  );
};

export default StatusLabel;
