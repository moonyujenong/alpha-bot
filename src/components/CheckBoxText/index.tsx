import { CheckBoxCustom, CheckBoxTextLabel } from './style';

const CheckBoxText = ({ labelText }: { labelText?: any }) => {
  return (
    <CheckBoxTextLabel>
      <label htmlFor="check">
        <input type="checkbox" name="check" id="check" />
        <CheckBoxCustom></CheckBoxCustom>
        {labelText && <p>{labelText}</p>}
      </label>
    </CheckBoxTextLabel>
  );
};

export default CheckBoxText;
