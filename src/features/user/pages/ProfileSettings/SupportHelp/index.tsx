import { SupportHelpContainer, TabList, TabListBox } from './style';
import Faq from '../Faq';
import Policy from '../Policy';
import ContactSupport from '../ContactSupport';

const SupportHelp = () => {
  return (
    <SupportHelpContainer>
      <TabListBox>
        <TabList>
          <li>
            <a href="#!" className="active">
              FAQ
            </a>
          </li>
          <li>
            <a href="#!">Policy</a>
          </li>
          <li>
            <a href="#!">Contact Support</a>
          </li>
        </TabList>
      </TabListBox>

      <Faq />
      {/* <Policy /> */}
      {/* <ContactSupport /> */}
    </SupportHelpContainer>
  );
};

export default SupportHelp;
