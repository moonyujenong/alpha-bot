import { CloseButton, ToastPopupBox, ToastPopupWrap } from './style';
import closeIcon from '../../assets/icon-close.svg';
import warningIcon from '../../assets/icon-warning-yellow.svg';
import checkIcon from '../../assets/icon-circle-check.svg';
import errorIcon from '../../assets/icon-circle-close-red.svg';
import infoIcon from '../../assets/icon-info-blue.svg';

const ToastPopup = ({ type, message }: { type: string; message?: any }) => {
  const imgMap = {
    success: checkIcon,
    warning: warningIcon,
    error: errorIcon,
  };

  const iconSrc = type === 'custom' ? null : imgMap[type] || infoIcon;

  return (
    <ToastPopupWrap>
      {/* TODO : type : default, success, warning, error, custom 총 5가지. 각 클래스별 css 스타일이 적용되어 있습니다. */}
      <ToastPopupBox className={type}>
        {iconSrc && <img alt="icon" src={iconSrc} />}

        <p>{message}</p>

        <CloseButton>
          <img alt="close" src={closeIcon} />
        </CloseButton>
      </ToastPopupBox>
    </ToastPopupWrap>
  );
};

export default ToastPopup;
