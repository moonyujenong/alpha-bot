import {
  FaqContainer,
  FaqContentBox,
  FaqContentInner,
  FaqContentTitle,
  FaqInnerTab,
  FaqInnerTabMenu,
  FaqTabBox,
} from './style';
import FaqBox from '../../../../../components/FaqBox';

const Faq = () => {
  return (
    <FaqContainer>
      <FaqTabBox>
        <FaqInnerTab>
          <li>
            <FaqInnerTabMenu className="active">All</FaqInnerTabMenu>
          </li>
          <li>
            <FaqInnerTabMenu>General Information</FaqInnerTabMenu>
          </li>
          <li>
            <FaqInnerTabMenu>Tokens Purchases</FaqInnerTabMenu>
          </li>
          <li>
            <FaqInnerTabMenu>Campaigns</FaqInnerTabMenu>
          </li>
          <li>
            <FaqInnerTabMenu>Updates and Support</FaqInnerTabMenu>
          </li>
        </FaqInnerTab>
      </FaqTabBox>

      <FaqContentBox>
        <FaqContentTitle>General Information</FaqContentTitle>
        <FaqContentInner>
          <FaqBox
            title={'What is Alphabot about? '}
            answer={'How do I log in?'}
          />
          <FaqBox
            title={
              'Why do I need to do email verification to combine my wallets and social media accounts? Maximum : 2 Lines '
            }
            answer={'How do I log in?'}
          />
        </FaqContentInner>
      </FaqContentBox>

      <FaqContentBox>
        <FaqContentTitle>Campaigns</FaqContentTitle>
        <FaqContentInner>
          <FaqBox
            title={'What is Alphabot about? '}
            answer={'How do I log in?'}
          />
          <FaqBox
            title={'What is Alphabot about? '}
            answer={'How do I log in?'}
          />
        </FaqContentInner>
      </FaqContentBox>
    </FaqContainer>
  );
};

export default Faq;
