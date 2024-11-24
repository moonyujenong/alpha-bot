import { DeleteButton, HelperText, InputForm, InputFormBox, LabelInputBox, LabelTitle, RightButton } from './style';
import deleteIconSrc from '../../assets/icon-circle-delete.svg';
import deleteIconError from '../../assets/icon-clrcle-delete-error.svg';

const LabelInput = ({
  title,
  deleteIcon,
  buttonTitle,
  helperTextTitle,
  placeHolderText,
  value,
  bgTransparent,
}: {
  title?: string;
  deleteIcon?: any;
  buttonTitle?: string;
  helperTextTitle?: string;
  placeHolderText?: string;
  value?: any;
  bgTransparent?: boolean;
}) => {
  const paddingRight = deleteIcon ? '46px' : buttonTitle ? '110px' : '16px';
  const bgColor = bgTransparent === true ? 'transparent' : '#fff';

  const inputStyle = {
    paddingRight: paddingRight,
    backgroundColor: bgColor,
  };

  return (
    <LabelInputBox>
      <LabelTitle>{title}</LabelTitle>
      <InputFormBox>
        {/* TODO : error 일 경우 aria-invalid={true} attr 적용합니다. */}
        <InputForm style={inputStyle} placeholder={placeHolderText} value={value} />

        {deleteIcon === true && (
          <DeleteButton>
            <img alt="delete icon" src={deleteIconSrc} className="default" />
            {/* TODO : error 일 경우 delete icon 이미지 */}
            <img alt="delete error" src={deleteIconError} className="error" />
          </DeleteButton>
        )}

        {buttonTitle && <RightButton>{buttonTitle}</RightButton>}
      </InputFormBox>

      {/* TODO : input 이 error 일 경우 클래스 invalid 추가, disabled 일때 클래스 disabled 추가합니다. */}
      {helperTextTitle && <HelperText>{helperTextTitle}</HelperText>}
    </LabelInputBox>
  );
};

export default LabelInput;
