import { CenterPopupContainer, CenterPopupInner, CloseButton } from './style';
import closeIcon from '../../assets/icon-close.svg';

const CenterPopup = ({ children }: { children: any }) => {
  return (
    <CenterPopupContainer>
      <CenterPopupInner>
        <CloseButton>
          <img alt="close icon" src={closeIcon} />
        </CloseButton>

        {children}
      </CenterPopupInner>
    </CenterPopupContainer>
  );
};

export default CenterPopup;
