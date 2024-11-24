import GradientButton from '../../../../../components/GradientButton';
import LabelInput from '../../../../../components/LabelInput';
import {
  EmailInputBox,
  EmailInputContainer,
  EmailInputSubTitle,
  EmailInputTitle,
} from './style';

const EmailInput = () => {
  return (
    <EmailInputContainer>
      <EmailInputTitle>Verify your Email</EmailInputTitle>
      <EmailInputSubTitle>
        To ensure the security of your account and gain access to all features,
        please verify your Email address.
      </EmailInputSubTitle>

      <EmailInputBox>
        <LabelInput
          title={'Email'}
          placeHolderText={'Enter your Email address'}
          deleteIcon={true}
        />
      </EmailInputBox>

      <GradientButton title={'Verify'} />
    </EmailInputContainer>
  );
};

export default EmailInput;
