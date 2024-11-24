import { IconTextBox } from './style';

const IconText = ({ title, imgSrc }: { title?: any; imgSrc?: any }) => {
  return (
    <IconTextBox>
      <img alt="icon" src={imgSrc} />
      {title}
    </IconTextBox>
  );
};

export default IconText;
