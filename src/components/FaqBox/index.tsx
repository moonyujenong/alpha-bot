import { FaqAnswer, FaqContainer, FaqTitle } from './style';
import downIcon from '../../assets/icon-down-gray.svg';
import upIcon from '../../assets/icon-up-black.svg';
import enterArrowRightIcon from '../../assets/icon-enter-arrow-right.svg';
import { useState } from 'react';

const FaqBox = ({ title, answer }: { title?: string; answer?: string }) => {
  const [isAnswerShow, setIsAnswerShow] = useState(false);

  const handleAnswerShow = () => {
    setIsAnswerShow(!isAnswerShow);
  };

  return (
    <FaqContainer className={`${isAnswerShow === true ? 'active' : ''}`}>
      <FaqTitle onClick={handleAnswerShow}>
        <h3>
          <p>Q</p>
          <p>{title}</p>
        </h3>
        <img alt="down icon" src={isAnswerShow === true ? upIcon : downIcon} />
      </FaqTitle>

      <FaqAnswer className={`${isAnswerShow === true ? 'active' : ''}`}>
        <img alt="enter icon" src={enterArrowRightIcon} />
        <p>{answer}</p>
      </FaqAnswer>
    </FaqContainer>
  );
};

export default FaqBox;
