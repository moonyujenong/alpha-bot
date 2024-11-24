import { BlackButtonItem } from './style';

const BlackButton = ({ title, mt }: { title?: any; mt?: number }) => {
  return <BlackButtonItem style={{ marginTop: mt + 'px' }}>{title}</BlackButtonItem>;
};

export default BlackButton;
