import {
  HelperText,
  VerifyCodeInput,
  VerifyCodeInputBox,
  VerifyCodeLabel,
  VerifyCodeContainer,
  VerifyTimeBox,
} from './style';
import timeIcon from '../../assets/icon-time.svg';

const VerifyCode = ({
  title,
  helperText,
}: {
  title?: string;
  helperText?: string;
}) => {
  return (
    <VerifyCodeContainer>
      <VerifyTimeBox>
        <img alt="time icon" src={timeIcon} />
        <p>05:00</p>
      </VerifyTimeBox>
      <VerifyCodeLabel>{title}</VerifyCodeLabel>

      <VerifyCodeInputBox>
        <li>
          <VerifyCodeInput />
        </li>
        <li>
          <VerifyCodeInput />
        </li>
        <li>
          <VerifyCodeInput />
        </li>
        <li>
          <VerifyCodeInput />
        </li>
        <li>
          <VerifyCodeInput />
        </li>
        <li>
          <VerifyCodeInput />
        </li>
      </VerifyCodeInputBox>

      {/* TODO : error 일 경우 클래스 error 추가 합니다. */}
      {helperText && <HelperText>{helperText}</HelperText>}
    </VerifyCodeContainer>
  );
};

export default VerifyCode;
