import { VerifiedMarkAfterBox } from './style';
import verifiedFillIcon from '../../assets/icon-verified-fill.svg';

const VerifiedMarkAfter = () => {
  return (
    <VerifiedMarkAfterBox>
      <img alt="verified icon" src={verifiedFillIcon} /> Verified
    </VerifiedMarkAfterBox>
  );
};

export default VerifiedMarkAfter;
