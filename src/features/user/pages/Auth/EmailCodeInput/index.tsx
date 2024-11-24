import GradientButton from '../../../../../components/GradientButton';
import VerifyCode from '../../../../../components/VerifyCode';
import {
  BottmHelper,
  EmailCodeContainer,
  EmailCodeSubTitle,
  EmailCodeTitle,
} from './style';

const EmailCodeInput = () => {
  return (
    <EmailCodeContainer>
      <EmailCodeTitle>Verify your Email</EmailCodeTitle>
      <EmailCodeSubTitle>
        To ensure the security of your account and gain access to all features,
        please verify your Email address.
      </EmailCodeSubTitle>

      <VerifyCode title={'Verification code'} />

      <div style={{ marginTop: '24px' }}>
        <GradientButton title={'Confirm'} />
      </div>

      <BottmHelper>
        <span>Can't find your code?</span> <br />
        <span>
          Check the spam folder or <a href="#!">send code again.</a>
        </span>
      </BottmHelper>
    </EmailCodeContainer>
  );
};

export default EmailCodeInput;
