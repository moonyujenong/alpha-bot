import {
  CloseButton,
  ConnectWalletBottomTerms,
  ConnectWalletContainer,
  ConnectWalletInner,
  ConnectWalletOtherBox,
  ConnectWalletOtherSnsBox,
  ConnectWalletOtherSnsLink,
  ConnectWalletOtherSnsList,
  ConnectWalletTitle,
} from './style';
import closeIcon from '../../assets/icon-close.svg';
import coinBaseSnsIcon from '../../assets/img-sns-coinbase.png';

const ConnectWallet = () => {
  return (
    <ConnectWalletContainer>
      <ConnectWalletInner>
        <CloseButton>
          <img alt="close icon" src={closeIcon} />
        </CloseButton>

        <ConnectWalletTitle>Connect Wallet</ConnectWalletTitle>
        <ConnectWalletOtherBox>
          <div style={{ overflowY: 'auto', height: '100%', maxHeight: '374px' }}>
            {/* TODO : ConnectWalletOtherSnsBox 가 반복됩니다. */}
            <ConnectWalletOtherSnsBox>
              <span>Popular</span>
              <ConnectWalletOtherSnsList>
                <li>
                  <ConnectWalletOtherSnsLink>
                    <img alt="sns icon" src={coinBaseSnsIcon} />
                    Coinbase Wallet
                  </ConnectWalletOtherSnsLink>
                </li>
                <li>
                  <ConnectWalletOtherSnsLink>
                    <img alt="sns icon" src={coinBaseSnsIcon} />
                    Coinbase Wallet
                  </ConnectWalletOtherSnsLink>
                </li>
              </ConnectWalletOtherSnsList>
            </ConnectWalletOtherSnsBox>

            <ConnectWalletOtherSnsBox>
              <span>More</span>
              <ConnectWalletOtherSnsList>
                <li>
                  <ConnectWalletOtherSnsLink>
                    <img alt="sns icon" src={coinBaseSnsIcon} />
                    Coinbase Wallet
                  </ConnectWalletOtherSnsLink>
                </li>
                <li>
                  <ConnectWalletOtherSnsLink>
                    <img alt="sns icon" src={coinBaseSnsIcon} />
                    Coinbase Wallet
                  </ConnectWalletOtherSnsLink>
                </li>
              </ConnectWalletOtherSnsList>
            </ConnectWalletOtherSnsBox>

            <ConnectWalletOtherSnsBox>
              <span>More</span>
              <ConnectWalletOtherSnsList>
                <li>
                  <ConnectWalletOtherSnsLink>
                    <img alt="sns icon" src={coinBaseSnsIcon} />
                    Coinbase Wallet
                  </ConnectWalletOtherSnsLink>
                </li>
                <li>
                  <ConnectWalletOtherSnsLink>
                    <img alt="sns icon" src={coinBaseSnsIcon} />
                    Coinbase Wallet
                  </ConnectWalletOtherSnsLink>
                </li>
              </ConnectWalletOtherSnsList>
            </ConnectWalletOtherSnsBox>
          </div>
        </ConnectWalletOtherBox>

        <ConnectWalletBottomTerms>
          By logging in to The EST, you agree to <b>Terms of Service</b> and <b>Privacy Policy.</b>
        </ConnectWalletBottomTerms>
      </ConnectWalletInner>
    </ConnectWalletContainer>
  );
};

export default ConnectWallet;
