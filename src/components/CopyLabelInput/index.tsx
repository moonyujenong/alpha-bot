import {
  CopyButton,
  CopyLabelInputBox,
  InputForm,
  InputFormBox,
  LabelTitle,
} from './style';
import copyIcon from '../../assets/icon-copy.svg';

const CopyLabelInput = ({
  title,
  value,
  placeHolder,
  copyBtnDisabeld,
}: {
  title?: string;
  value?: any;
  placeHolder?: any;
  copyBtnDisabeld?: boolean;
}) => {
  const inputStyle = {
    paddingRight: '50px',
  };

  return (
    <CopyLabelInputBox>
      {title && <LabelTitle>{title}</LabelTitle>}

      <InputFormBox>
        <CopyButton disabled={copyBtnDisabeld}>
          <img alt="copy icon" src={copyIcon} />
        </CopyButton>
        <InputForm
          style={inputStyle}
          disabled
          value={value}
          placeholder={placeHolder}
        />
      </InputFormBox>
    </CopyLabelInputBox>
  );
};

export default CopyLabelInput;
