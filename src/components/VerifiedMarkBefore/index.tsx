import { VerifiedMarkBeforeBox } from './style';
import verifiedIcon from '../../assets/icon-verified.svg';

const VerifiedMarkBefore = () => {
  return (
    <VerifiedMarkBeforeBox>
      <img alt="verified icon" src={verifiedIcon} /> Unverified
    </VerifiedMarkBeforeBox>
  );
};

export default VerifiedMarkBefore;
