import {
  PolicyBox,
  PolicyContainer,
  PolicyShareButton,
  PolicyThumbBox,
  PolicyTitle,
} from './style';
import shareIcon from '../../../../../assets/icon-share.svg';
import termsImg from '../../../../../assets/img-terms-3d.png';
import policyImg from '../../../../../assets/img-policy-3d.png';

const Policy = () => {
  return (
    <PolicyContainer>
      <PolicyBox>
        <PolicyThumbBox>
          <img alt="sample thumb" src={termsImg} />
        </PolicyThumbBox>

        <PolicyTitle>Terms of Service</PolicyTitle>

        <PolicyShareButton>
          <img alt="share icon" src={shareIcon} />
        </PolicyShareButton>
      </PolicyBox>

      <PolicyBox>
        <PolicyThumbBox>
          <img alt="sample thumb" src={policyImg} />
        </PolicyThumbBox>

        <PolicyTitle>Privacy Policy</PolicyTitle>

        <PolicyShareButton>
          <img alt="share icon" src={shareIcon} />
        </PolicyShareButton>
      </PolicyBox>
    </PolicyContainer>
  );
};

export default Policy;
