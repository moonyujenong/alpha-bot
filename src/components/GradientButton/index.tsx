import { GradientBtn } from './style.ts';
import loadingIconSrc from '../../assets/icon-loading.svg';
import disabledLoadingIcon from '../../assets/icon-loading-disabled-white.svg';
import grayDisabledLoadingIcon from '../../assets/icon-spinner.svg';

const GradientButton = ({
  title,
  loadingIcon,
  grayLoadingIcon,
}: {
  title?: string;
  loadingIcon?: boolean;
  grayLoadingIcon?: boolean;
}) => {
  return (
    <GradientBtn>
      {/* TODO : 로딩 아이콘이 있을 경우 노출 */}
      {loadingIcon === true && (
        <img alt="loading icon" className="loading-icon" src={loadingIconSrc} />
      )}
      {/* TODO : 회색 아이콘 */}
      {grayLoadingIcon === true && (
        <img
          alt="loading icon"
          className="loading-icon"
          src={grayDisabledLoadingIcon}
        />
      )}

      {/* TODO : 비활성화 상태에서 로딩 아이콘 노출 시 아래 이미지 사용합니다. */}
      {/* <img alt="disabled loading icon" src={disabledLoadingIcon} /> */}
      {title}
    </GradientBtn>
  );
};

export default GradientButton;
