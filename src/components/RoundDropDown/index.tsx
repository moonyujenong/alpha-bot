import {
  RoundDropDownBox,
  RoundDropDownOpen,
  RoundDropDownWrap,
} from './style';
import tagIcon from '../../assets/icon-tag.svg';
import arrowIcon from '../../assets/icon-up-arrow.svg';
import { useState } from 'react';

const RoundDropDown = ({ title }: { title?: any }) => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);

  const handleDropDownShow = () => {
    setIsDropDownShow(!isDropDownShow);
  };

  return (
    <RoundDropDownWrap>
      <RoundDropDownBox onClick={handleDropDownShow}>
        <img alt="tag icon" src={tagIcon} />
        <p>{title}</p>
        <img alt="arrow icon" className="arrow-icon" src={arrowIcon} />
      </RoundDropDownBox>
      <RoundDropDownOpen className={isDropDownShow === true ? 'show' : ''}>
        <li>
          {/* TODO : 활성화 된 버튼에 클래스 active 추가합니다. */}
          <button type="button" className="active">
            ALL
          </button>
        </li>
        <li>
          <button type="button">Registered</button>
        </li>
        <li>
          <button type="button">Rejected</button>
        </li>
        <li>
          <button type="button">Participated</button>
        </li>
      </RoundDropDownOpen>
    </RoundDropDownWrap>
  );
};

export default RoundDropDown;
