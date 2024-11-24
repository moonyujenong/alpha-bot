import { CalculateDetailQuantityWrap, InputStyle, Keypad, PlusUnitButton, TitleArea, TotalArea } from './style';
import outlineMinusIcon from '../../../../../assets/icon-outline-minus.svg';
import outlinePlusIcon from '../../../../../assets/icon-outline-plus.svg';
import resetIcon from '../../../../../assets/icon-reset.svg';
import deleteIcon from '../../../../../assets/icon-arrow-delete.svg';

const CalculateDetailQuantity = () => {
  return (
    <CalculateDetailQuantityWrap>
      <div className="inner">
        <TitleArea>
          Quantity
          <p>
            <b style={{ fontWeight: '600', marginRight: '4px' }}>999,999</b>
            left
          </p>
        </TitleArea>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: '8px', marginBottom: '12px' }}>
          <button type="button">
            <img alt="outline minus icon" src={outlineMinusIcon} />
          </button>
          <InputStyle value={'10'} />
          <button type="button">
            <img alt="outline plus icon" src={outlinePlusIcon} />
          </button>
        </div>
        <PlusUnitButton>
          <button type="button">+10</button>
          <button type="button">+100</button>
          <button type="button">+1000</button>
          <button type="button">Max</button>
          <button type="button" className="reset">
            <img alt="reset icon" src={resetIcon} style={{ marginRight: '4px' }} />
            Reset
          </button>
        </PlusUnitButton>

        <Keypad>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">00</button>
          <button type="button">0</button>
          <button type="button">
            <img alt="delete" src={deleteIcon} style={{ margin: '0 auto' }} />
          </button>
        </Keypad>
        <TotalArea>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Total Price</span>
            <p className="price">
              <b>0</b> USDT
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button type="button" className="cancel">
              Cancel
            </button>
            <button type="button">Confirm</button>
          </div>
        </TotalArea>
      </div>
    </CalculateDetailQuantityWrap>
  );
};

export default CalculateDetailQuantity;
