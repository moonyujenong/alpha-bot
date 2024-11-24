import {
  GradientButton,
  IdentityConsentCheckBox,
  IdentityConsentContainer,
  IdentityConsentContentBox,
  IdentityConsentSteps,
  IdentityConsentTitle,
  IdentityContainer,
  IdentityIntro,
  IdentityIntroText,
  IdentityResultContainer,
  IdentityResultOutLink,
  IdentityResultSubTitle,
  IdentityResultTitle,
  Paralle,
} from './style';
import searchIcon from '../../../../../assets/img-search-3d.png';
import CheckBoxText from '../../../../../components/CheckBoxText';
import GradientOneButton from '../../../../../layout/GradientOneButton';
import documentIcon from '../../../../../assets/img-document-3d.png';
import successIcon from '../../../../../assets/icon-success-3d.png';
import rightArrowIcon from '../../../../../assets/icon-right-arrow-mini.svg';
import graphIcon from '../../../../../assets/img-graph-3d.png';
import warningIcon from '../../../../../assets/img-document-warning-3d.png';

const IdentityVerification = () => {
  const subTitle = (
    <>
      Thank you! Your application was submitted successfully. Our specialists will review your application within{' '}
      <b>24 hours.</b>
    </>
  );
  return (
    <IdentityContainer>
      {/* TODO : popup */}
      {/* <GradientOneButton
        title={'Submitted Successfully'}
        subTitle={subTitle}
        buttonTitle={'Okay'}
        imgSrc={documentIcon}
      /> */}

      <IdentityIntro>
        <img alt="search icon" src={searchIcon} />

        <IdentityIntroText>
          Welcome! To ensure the security of your account and access all features, we need to verify your identity.
          <br />
          This process helps us confirm that you are a real person and understand your location.
          <br />
          <br />
          Understanding your location is important because blockchain policies vary by country, and verifying your
          identity helps us ensure compliance with these policies.
          <br />
          <br />
          Additionally, completing the identity verification process allows you to level up on our platform, unlocking
          additional features and benefits.
          <br />
          <br />
          Please follow the steps below to complete the verification process. If you have any questions or need
          assistance, feel free to contact our support team
        </IdentityIntroText>

        <GradientButton>Start</GradientButton>
      </IdentityIntro>

      <IdentityConsent />
      <IdentityResult />
    </IdentityContainer>
  );
};

export default IdentityVerification;

const IdentityConsent = () => {
  return (
    <IdentityConsentContainer>
      <IdentityConsentSteps>
        {/* TODO : 활성화 step 인 경우 클래스 active 추가합니다. */}
        <Paralle className="active">
          <p>1</p>
        </Paralle>
        <Paralle>
          <p>2</p>
        </Paralle>
      </IdentityConsentSteps>
      <IdentityConsentTitle>Consent</IdentityConsentTitle>

      <IdentityConsentContentBox>
        <p>
          To comply with regulatory requirements and ensure the security of our platform, we require you to complete the
          identity verification process. This involves verifying your identity by providing certain documents and
          information. By proceeding with the identity verification process, you agree to the following:
        </p>
        <br />
        <br />
        <b style={{ marginBottom: '12px', display: 'block' }}>1. Data Collection and Use:</b>
        <ul>
          <li>
            We will collect personal information such as your full name, date of birth, address, identification
            documents (e.g., passport, driver's license), and any other information deemed necessary.
          </li>
          <li>
            The collected data will be used solely for the purpose of verifying your identity, preventing fraud, and
            ensuring compliance with legal and regulatory requirements.
          </li>
        </ul>
        <b style={{ marginBottom: '12px', display: 'block', marginTop: '24px' }}>2. Data Security:</b>
        <ul>
          <li>
            We are committed to protecting your personal data and will implement appropriate technical and
            organizational measures to prevent unauthorized access, disclosure, alteration, or destruction of your
            information.
          </li>
        </ul>
      </IdentityConsentContentBox>

      <IdentityConsentCheckBox>
        <CheckBoxText
          labelText={
            'I agree to the collection, use, and sharing of my personal information as described above for the purpose of identity verification.'
          }
        />
      </IdentityConsentCheckBox>

      <GradientButton>Next</GradientButton>
    </IdentityConsentContainer>
  );
};

const IdentityResult = () => {
  return (
    <>
      <IdentityResultContainer>
        <img alt="success icon" src={successIcon} />
        <IdentityResultTitle>Verified</IdentityResultTitle>
        <IdentityResultOutLink>
          See Result <img alt="right arrow" src={rightArrowIcon} />
        </IdentityResultOutLink>
      </IdentityResultContainer>

      <IdentityResultContainer>
        <img alt="success icon" src={graphIcon} />
        <IdentityResultTitle>Under Review</IdentityResultTitle>
        <IdentityResultSubTitle>
          It will take <b>7 days</b> after submission
        </IdentityResultSubTitle>
      </IdentityResultContainer>

      <IdentityResultContainer>
        <img alt="success icon" src={warningIcon} />
        <IdentityResultTitle>Rejected</IdentityResultTitle>
        <IdentityResultSubTitle>
          Please check your email for details regarding the reason for your rejection
        </IdentityResultSubTitle>
      </IdentityResultContainer>
    </>
  );
};
