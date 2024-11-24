import { ContactSupportContainer, ContactSupportTitleBox } from './style';
import mailIcon from '../../../../../assets/img-mail-3d.png';

const ContactSupport = () => {
  return (
    <ContactSupportContainer>
      <img alt="mail icon" src={mailIcon} />

      <ContactSupportTitleBox>
        <p>Contact us</p>
        <span>contactus@alphabot.com</span>
      </ContactSupportTitleBox>
    </ContactSupportContainer>
  );
};

export default ContactSupport;
