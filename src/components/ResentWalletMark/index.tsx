import { CopyButton, ResentWalletMarkBox } from './style';
import coinBaseIconBlue from '../../assets/icon-coinbase-blue.svg';
import copyIcon from '../../assets/icon-copy.svg';

const ResentWalletMark = ({ copyBtn }: { copyBtn?: boolean }) => {
  return (
    <ResentWalletMarkBox>
      <img alt="icon" src={coinBaseIconBlue} />
      <p>0xBAe70xBAe719931993</p>
      {copyBtn === true && (
        <CopyButton>
          <img alt="copy icon" className="copy-img" src={copyIcon} />
        </CopyButton>
      )}
    </ResentWalletMarkBox>
  );
};

export default ResentWalletMark;
