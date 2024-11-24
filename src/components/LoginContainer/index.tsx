import {
  CloseButton,
  LoginContainerContents,
  LoginContainerWrap,
} from './style';
import closeIcon from '../../assets/icon-close.svg';

const LoginCotainer = ({ children }: { children: any }) => {
  return (
    <LoginContainerWrap>
      <LoginContainerContents>
        <CloseButton>
          <img alt="close icon" src={closeIcon} />
        </CloseButton>
        {children}
      </LoginContainerContents>
    </LoginContainerWrap>
  );
};

export default LoginCotainer;
