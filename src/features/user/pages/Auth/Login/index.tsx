import {
  BottomLoginCheckBox,
  ButtonBox,
  HelpText,
  LoginTitle,
  LoginWrap,
  SnsBox,
  SnsLink,
  SnsLinkBox,
  WalletBox,
} from './style';
import LabelInput from '../../../../../components/LabelInput';
import GradientButton from '../../../../../components/GradientButton';
import googleSns from '../../../assets/img-sns-google.png';
import discordSns from '../../../assets/img-sns-discord.png';
import twitterSns from '../../../assets/img-sns-twitter.png';
import teleSns from '../../../assets/img-sns-telegram.png';
import OutlineButton from '../../../../../components/OutlineButton';
import rightLongIcon from '../../../../../assets/icon-right-arrow-long.svg';

const Login = () => {
  return (
    <LoginWrap>
      <LoginTitle>
        {/* TODO : 로그인일 경우 */}
        {/* Log in to <p>The EST</p> */}
        {/* TODO : 회원가입일 경우 */}
        Sign up for <p>The EST</p>
      </LoginTitle>
      <HelpText>
        By logging in to AlphaBot, you agree to <b>Terms of Service</b> and <b>Privacy Policy.</b>
      </HelpText>

      <LabelInput title={'With Email'} placeHolderText={'Enter your Email address'} deleteIcon={true} />

      <ButtonBox>
        <GradientButton title={'Next'} />
      </ButtonBox>

      <SnsBox>
        {/* TODO : 로그인일 경우 */}
        <p>Or continue with</p>

        {/* TODO : 회원가입일 경우 */}
        <p>With Social account</p>
        <SnsLinkBox>
          <li>
            <SnsLink>
              <img alt="google" src={googleSns} />
            </SnsLink>
          </li>
          <li>
            <SnsLink>
              <img alt="twitter" src={twitterSns} />
            </SnsLink>
          </li>
          <li>
            <SnsLink>
              <img alt="telegram" src={teleSns} />
            </SnsLink>
          </li>
          <li>
            <SnsLink>
              <img alt="discord" src={discordSns} />
            </SnsLink>
          </li>
        </SnsLinkBox>
      </SnsBox>

      <WalletBox>
        {/* TODO : 로그인일 경우 */}
        {/* <p>Sign in with wallet</p> */}

        {/* TODO : 회원가입일 경우 */}
        <p>With Wallet</p>
        <OutlineButton title={'Connect Wallet'} />
      </WalletBox>

      <BottomLoginCheckBox>
        {/* TODO : 로그인일 경우 */}
        {/* <p>Haven't signed up yet?</p> */}

        {/* TODO : 회원가입일 경우 */}
        <p>Already have an account?</p>

        <a href="#!">
          {/* TODO : 로그인일 경우 */}
          {/* Log in */}
          {/* TODO : 회원가입일 경우 */}
          Get started now
          <img alt="right arrow long icon" src={rightLongIcon} />
        </a>
      </BottomLoginCheckBox>
    </LoginWrap>
  );
};

export default Login;
