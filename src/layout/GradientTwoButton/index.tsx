import {
  CancelButton,
  ConfirmButton,
  FlexButtonBox,
  GradientTwoButtonContainer,
  GradientTwoButtonInner,
  GradientTwoButtonSubTitle,
  GradientTwoButtonTitle,
  IconBox,
} from './style';
import logoutIcon from '../../assets/icon-logout-3d.svg';
import trashBlueIcon from '../../assets/icon-trash-blue-3d.svg';
import trashRedIcon from '../../assets/icon-trash-red-3d.svg';
import successIcon from '../../assets/icon-success-3d.svg';
import warningIcon from '../../assets/icon-warning-3d.svg';

const GradientTwoButton = ({
  title,
  subTitle,
}: {
  title?: string;
  subTitle?: string;
}) => {
  return (
    <GradientTwoButtonContainer>
      <GradientTwoButtonInner>
        <IconBox>
          {/* TODO : 필요에 따라 맞는 아이콘 path 를 import 합니다. */}
          <img alt="" src={logoutIcon} />
        </IconBox>

        {/* TODO : 필요에 따라 title, subTitle 부분을 불러오는 쪽에서 작성해줍니다. */}
        <GradientTwoButtonTitle>
          {/* {title} */}
          Are you Logging Out? {/* 임시 */}
        </GradientTwoButtonTitle>
        <GradientTwoButtonSubTitle>
          {/* {subTitle} */}
          You can always comeback at anytime! {/* 임시 */}
        </GradientTwoButtonSubTitle>

        <FlexButtonBox>
          <CancelButton>Cancel</CancelButton>
          <ConfirmButton>Confirm</ConfirmButton>
        </FlexButtonBox>
      </GradientTwoButtonInner>
    </GradientTwoButtonContainer>
  );
};

export default GradientTwoButton;
