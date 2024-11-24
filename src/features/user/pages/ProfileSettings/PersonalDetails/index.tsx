import { Tooltip } from 'react-tooltip';
import {
  BrandingPowerBottom,
  DeleteAccountBox,
  DeleteButton,
  DeleteInputWrap,
  EditProfileBox,
  EditProfileWrap,
  FlexBox,
  ImageSettingButtonBox,
  PersonalDetailsContainer,
  SlidesBottomLink,
  StatusBox,
  TopSlidesBox,
  TopSlidesItem,
  UserNameBox,
} from './style';
import VerifiedMarkBefore from '../../../../../components/VerifiedMarkBefore';
import VerifiedMarkAfter from '../../../../../components/VerifiedMarkAfter';
import ResentWalletMark from '../../../../../components/ResentWalletMark';
import circleRightArrow from '../../../../../assets/icon-arrow-right.svg';
import powerIcon from '../../../../../assets/img-power.png';
import arrowTopFillIcon from '../../../../../assets/icon-fill-arrow-top-white.svg';
import minusWhiteIcon from '../../../../../assets/icon-minus-white.svg';
import IconText from '../../../../../components/IconText';
import trashIcon from '../../../../../assets/icon-trash.svg';
import trashRedIcon from '../../../../../assets/icon-trash-red.svg';
import clipIcon from '../../../../../assets/icon-clip.svg';
import sampleUserThumb from '../../../../../assets/sample/sample-profile.svg';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import infoIcon from '../../../../../assets/icon-info.svg';
import LabelInput from '../../../../../components/LabelInput';
import CopyLabelInput from '../../../../../components/CopyLabelInput';
import { HelperText } from '../../../../../components/LabelInput/style';
import StatsBox from '../../../../../components/StatsBox';

const PersonalDetails = () => {
  return (
    <PersonalDetailsContainer>
      <StatsBox />

      <EditProfileWrap>
        <p>Edit Profile</p>
        <EditProfileBox>
          <div className="left">
            <span>Profile Image</span>
            <p>300×300 image or GIF, max 5MB supported.</p>
            <ImageSettingButtonBox>
              <IconText title={'Change'} imgSrc={clipIcon} />
              <IconText title={'Remove'} imgSrc={trashIcon} />
            </ImageSettingButtonBox>
          </div>
          <div className="right">
            <img alt="user thumb" src={sampleUserThumb} />
          </div>
        </EditProfileBox>
      </EditProfileWrap>

      <UserNameBox>
        <LabelInput
          title={'User name'}
          /* TODO : 기본 helper text / 에러일 경우 에러 메시지를 넣으면 됩니다. */
          helperTextTitle={`Username must be 3-15 characters. No spaces or special characters allowed.\nOnly include English letters (A-Z) and numbers (0-9).`}
          buttonTitle={'Save'}
          // value={'test1023'}
          bgTransparent={true}
        />
      </UserNameBox>

      <FlexBox>
        <CopyLabelInput title={'User ID'} value={'test123'} />
        <LabelInput
          title={'Email Address'}
          placeHolderText={'Enter your Email address'}
          buttonTitle={'Save'}
          bgTransparent={true}
        />
      </FlexBox>

      <DeleteAccountBox>
        <h3>Delete Account</h3>
        <span>
          Deleting your account will permanently remove all of your information
          from our database. If you have already purchased tokens, you may not
          receive them on the expected date. Once the deletion process begins,
          your account cannot be recovered.
        </span>
        <DeleteInputWrap>
          <LabelInput
            title={'To confirm this, type "DELETE"'}
            bgTransparent={true}
            placeHolderText={'DELETE'}
          />
        </DeleteInputWrap>
        {/* TODO : 위 input 에 delete 값 입력시 클래스 active 추가됩니다. */}
        <DeleteButton className="active">
          {/* <img alt="trash icon" src={trashIcon} /> */}
          {/* TODO : 활성화 된 경우 */}
          <img alt="trash red icon" src={trashRedIcon} />
          Delete Account
        </DeleteButton>
      </DeleteAccountBox>
    </PersonalDetailsContainer>
  );
};

export default PersonalDetails;
