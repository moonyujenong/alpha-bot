import { RouteObject } from 'react-router-dom';
import lazy from '../../../utils/lazy.tsx';

const SignUp = lazy(() => import('../pages/signup/index.tsx'));
const Auth = lazy(() => import('../pages/Auth/index.tsx'));
const ProfileSettings = lazy(
  () => import('../pages/ProfileSettings/index.tsx'),
);
const About = lazy(() => import('../pages/About/index.tsx'));
const MyPage = lazy(() => import('../pages/MyPage/index.tsx'));
const Error = lazy(() => import('../pages/Error/index.tsx'));
const Launchpad = lazy(() => import('../pages/Launchpad/index.tsx'));
const LaunchpadDetail = lazy(
  () => import('../pages/LaunchpadDetail/index.tsx'),
);
const RegisterChannelGuide = lazy(
  () => import('../pages/RegisterChannelGuide/index.tsx'),
);
const Main = lazy(() => import('../pages/Main'));

const signUpRoutes: RouteObject[] = [
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'login',
    element: <Auth />,
  },
  {
    path: 'profilesettings',
    element: <ProfileSettings />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'mypage',
    element: <MyPage />,
  },
  {
    path: 'error',
    element: <Error />,
  },
  {
    path: 'launchpad',
    element: <Launchpad />,
  },
  {
    path: 'launchpad/detail',
    element: <LaunchpadDetail />,
  },
  {
    path: 'registerchannelguide',
    element: <RegisterChannelGuide />,
  },
  {
    path: '/',
    element: <Main />,
  },
];

export default signUpRoutes;
