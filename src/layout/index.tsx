import Header from './Header/index.tsx';
import Footer from './Footer/index.tsx';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import ToastPopup from '../components/ToastPopup/index.tsx';
import CenterPopup from '../components/CenterPopup/index.tsx';
import EmailCodeInput from '../features/user/pages/Auth/EmailCodeInput/index.tsx';

export const Body = styled.div`
  flex: 1;
  position: relative;
  padding-top: 56px;

  @media (min-width: 1024px) {
    padding-top: 88px;
  }
`;

export const ToastPopupOut = styled.div`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  position: fixed;
  bottom: 75px;
  z-index: 20;

  @media (min-width: 1024px) {
    height: fit-content;
    position: sticky;
    top: 112px;
  }
`;

const Layout = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Body>
        {/* <ToastPopupOut> */}
        {/* TODO : 줄바꿈 시 \n 사용 */}
        {/* <ToastPopup type={'success'} message={'토스트 팝업입니다.'} /> */}
        {/* </ToastPopupOut> */}
        <Outlet />
      </Body>
      <Footer />
    </div>
  );
};

export default Layout;
