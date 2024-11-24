import {
  GradientButton,
  GradientOneButtonContainer,
  GradientOneButtonInner,
  GradientOneButtonSubTitle,
  GradientOneButtonTitle,
  IconBox,
} from './style';

const GradientOneButton = ({
  title,
  subTitle,
  imgSrc,
  buttonTitle,
}: {
  title?: string;
  subTitle?: any;
  imgSrc?: any;
  buttonTitle?: any;
}) => {
  return (
    <GradientOneButtonContainer>
      <GradientOneButtonInner>
        <IconBox>
          <img alt="icon" src={imgSrc} />
        </IconBox>

        <GradientOneButtonTitle>{title}</GradientOneButtonTitle>
        <GradientOneButtonSubTitle>{subTitle}</GradientOneButtonSubTitle>

        <GradientButton>{buttonTitle}</GradientButton>
      </GradientOneButtonInner>
    </GradientOneButtonContainer>
  );
};

export default GradientOneButton;
