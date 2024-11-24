import {
  AmountBox,
  CalculateBox,
  CalculateWrap,
  InputCloseButton,
  PlusUnitButton,
  PmgBox,
  TopScrollDownButton,
  TotalArea,
  UserInput,
} from './style';
import switchIcon from '../../../../../assets/icon-switch.svg';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import arrowDownIcon from '../../../../../assets/icon-arrow-down.svg';
import closeIcon from '../../../../../assets/icon-circle-close.svg';

const CalculateDetail = () => {
  const innerWidth = useMediaQuery();

  return (
    <CalculateWrap>
      {innerWidth < 1024 && (
        <TopScrollDownButton>
          <img alt="down icon" src={arrowDownIcon} />
        </TopScrollDownButton>
      )}
      {/* TODO : 버튼 클릭 시 노출됩니다. */}
      <CalculateBox>
        <li>
          <span>Branding power (0~100)</span>
          <span>64 P</span>
        </li>
        <li>
          <span>My token allocation</span>
          <span>0</span>
        </li>
      </CalculateBox>

      <AmountBox>
        <h3>
          Amount <p>999,999 left</p>
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ position: 'relative', flex: '1' }}>
            <InputCloseButton>
              <img alt="close icon" src={closeIcon} />
            </InputCloseButton>
            <UserInput />
          </div>
          <p>USDT</p>
        </div>
        <PlusUnitButton>
          <button type="button">+10</button>
          <button type="button">+100</button>
          <button type="button">+1000</button>
          <button type="button">Maximum</button>
        </PlusUnitButton>
        <img alt="change icon" src={switchIcon} style={{ width: '16px', height: '16px', margin: '8px auto' }} />
        <PmgBox>
          <div className="count">0</div>
          <p>PMG</p>
        </PmgBox>
      </AmountBox>

      <TotalArea>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Total Price</span>
          <p className="price">
            <b>0</b> USDT
          </p>
        </div>
        <button type="button">Buy Now</button>
      </TotalArea>
    </CalculateWrap>
  );
};

export default CalculateDetail;
