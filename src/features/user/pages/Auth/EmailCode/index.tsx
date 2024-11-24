import GradientButton from '../../../../../components/GradientButton';
import VerifyCode from '../../../../../components/VerifyCode';
import { BottmHelper, EmailCodeContainer, EmailCodeTitle } from './style';

const EmailCode = () => {
  return (
    <EmailCodeContainer>
      <EmailCodeTitle>
        Log in to <p>The EST</p>
      </EmailCodeTitle>

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

export default EmailCode;
