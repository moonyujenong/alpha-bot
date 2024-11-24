# alphabot-publisher

## 개발모드 실행

yarn start

---

## 프로젝트 구조: feature based

https://reboot.studio/blog/folder-structures-to-organize-react-project/

```
src/
|-- assets/
|-- components/
|   |-- Button/
|   |   |-- index.tsx
|   |   |-- styles.ts
|-- features/
|   |-- user/
|   |   |-- api/
|   |   |-- data/
|   |   |-- hooks/
|   |   |-- pages/
|   |   |   |-- Auth/
|   |   |   |   |-- SignIn/
|   |   |   |   |-- SignUp/
|   |   |   |-- Profile/
|   |   |-- routes/
|   |   |-- views/
|   |   |-- utils/
|-- hooks/
|   |-- useMediaQuery.js
|-- pages/
|   |-- Static
|   |   |-- index.tsx
|-- layout/
|   |-- index.tsx
|-- routes/
|   |-- index.tsx
|-- styles/
|   |-- index.tsx
|   |-- reset.tsx
|-- utils/
|   |-- lazy.tsx
|   |-- format.ts
|   |-- http.ts
|   |-- cookie.ts
|-- App.tsx
|-- index.html
```

### 폴더별 설명

- [assets]
  - 공통으로 사용하는 이미지, 폰트 등
- [components]
  - 공통으로 재사용하는 디자인 컴포넌트
  ```s
  TextFied, Button, Input, Label, Avatar ...
  ```
  - 공통 여부가 애매할 시에는 해당 도메인 폴더에 넣고 개발자간 협의 후 이동한다.
- [features]
  - 도메인별 집합 폴더
    - [api]
      - 도메인에서 사용하는 api
      - 백엔드 리소스별로 파일명을 맵팡하는게 좋음
      ```s
      features/wallet/api/activity -> http://baseURL/api/wallet/activity
      features/wallet/api/assets -> http://baseURL/api/wallet/assets
      ```
      - 백엔드와 프론트엔드가 도메인을 1:1로 팀을 맺는 구조가 아니므로 잘 안맞을 수 있으나 최대한 리소스별로 파일을 생성
    - [assets]
      - 도메인에서 사용하는 이미지, 폰트, 비디오 등
      - images, videos 등 폴더 구분 가능
      - image만 있을 경우에는 별도 폴더 구분 X
    - [data]
      - 도메인에서 사용하는 swr 데이터 폴더
      - 전역상태 저장소 및 미들웨어, 사이드이펙트처리로 swr만 사용할 예정
      - store라는 이름을 고려했으나 swr에서 data라는 이름으로 사용하므로 이렇게 감
    - [hooks]
      - 도메인에서 사용하는 react hook
    - [pages]
      - routes path와 연결되는 컴포넌트
      - routes와 1:1 맵핑할 필요는 없으나 1:1맵핑을하면 좀더 직관적이므로 가능하면 그렇게 하는 것이 좋음
      ```s
      /user/auth/signin -> features/user/pages/Auth/SignIn
      /games -> features/game/pages/List
      /games/1 -> features/game/pages/Detail
      ```
    - [routes]
      - 도메인별 routes, features/game 폴더를 참조하여 확인
      - useRoutes 훅을 이용하여 처리하므로 객체형태를 사용함, react router 6 문서를 참조하여 확인
    - [styles]
      - 도메인 범위 emotion styled component
      - component, view, page 범위 styled component는 components, pages, views 등에 styles.ts로 작성
    - [utils]
      - 도메인 범위에서 사용하는 utils
    - [views]
      - 페이지 이외에 모달로 띄워지는 컴포넌트, 페이지에서 삽입되는 컴포넌트 등을 작성
      - 컴포넌트간 종속관계에 따라서 자유롭게 작성
      ```s
      features/game/views/Video
      features/node/views/Order/Terms
      features/wallet/views/Container;
      features/wallet/views/Assets;
      features/wallet/views/OTPInput;
      ```
- [hooks]
  - 공통으로 사용하는 훅
- [layout]
  - 장치별 레이아웃 컴포넌트
  - header, footer, sidebar 등
  - modal이 고정위치라면 modal도 가능
- [pages]
  - 정적 컨텐츠 중심의 페이지들
- [routes]
  - 최상위 root(/) 경로에 대한 맵핑 및 하위 도메인 경로에 대해서 routes를 설정
  - useRoutes 훅을 이용하여 처리함
- [styles]
  - 전역 스타일을 설정
  - emotion Global style을 사용한다.
- [utils]
  - 공통으로 사용하는 유틸리티 함수, 객체들
- 그외 추가적인 구조들은 개발자간 협의하여 정하도록 함

### features 폴더 사용 규칙

- 도메인 별로 features 폴더에 코드를 작성한다.
  - 클린코드에서는 문제 영역(Problem Domain)이라고 함, Business
  - 같은 영역에 코드들을 비슷한 위치에 배치하여 응집성 높음
  - 도메인을 별도 패키지로 분리할 때의 유리함
- 다른 도메인과 서로 공유 되더라도 도메인 종속성이 있는 코드는 features 안쪽에 작성한다.
  - ex) wallet 도메인의 hook, data를 user 도메인에서 사용
  - 제공해주는 쪽(provider)에서 도메인 주체를 갖는다. -> wallet 도메인에 있어야함
  - 도메인별로 package를 분리하거나(build-time integration), 도메인 명을 분리(runtime integration)는 하지 않음
    - 패키지를 분리하면 다른 도메인의 패키지를 업데이트 하기 전까지는 변경된 코드로 인한 위험성이 낮으나 개발/배포 시에 overhead 가능성 존재
    - 그리고, 현재 플랫폼 내부에 로그인 및 지갑이 탑재되어 향후의 기능들이 이 프로젝트에 추가되고 도메인 분리될 가능성이 낮음
- 공통 코드만 features 외부 풀더에 작성
  - 클린코드에서는 해법 영역(Solution Domain)이라고 함, Technical
  - ex) features 외부 util폴더에 http, format 관련 유틸을 작성
  - 공통인지 판단이 어려우면 features/도메인 영역에 먼저 작성 후 개발자간 협의 및 코드리뷰를 거쳐 공통화 한다.

---

## 네이밍 규칙

### 파일 및 폴더명

- assets는 [단/복수혼용 kebab-case]를 사용한다

```s
pome-survival-thumb.png, xxxx-yyyy-bold.woff
```

- 도메인 명은 features 폴더 아래에 [단수형 kebab-case]를 폴더 명으로 작성한다.

```s
features/marketplace, features/nft, features/exchange, features/swap
```

```s
features/nft-marketplace
```

### 컴포넌트

- component, page, view와 같이 React Component인 경우에는 폴더명을 [단/복수혼용 pascal-case]로 쓴다.

```tsx
폴더명: features / user / pages / Auth / SignIn;
컴포넌트명: <SignIn />;
```

- React Component 명을 지을 때 도메인을 생략하여 짓도록함

```s
  game도메인에 GameDetail(x), Detail(O)
```

- 다른 도메인에서 사용한다면 사용하는 측에서 컴포넌트 명을 변경해서 쓴다.

```tsx
import * as GameDetail from "@/features/game/views/Detail";
```

### 인터페이스

- I[이름][용도] 형식으로 파스칼 케이스로 작성한다.

```tsx
// I[이름][용도];
컴포넌트 props: interface IDetailProps {}
api 요청객체: interface IAssetRequest {}
api 응답객체: interface IAssetResponse {}
swr 데이터: interface IAssetData {}
```

### Data(swr)

- data폴더의 swr 훅은 아래와 같이 [단수형 camel-case]로 명명한다.
- 일부 복수로만 쓰는 단어는 쓸 수 있음. ex) terms
- tree-shaking 문제로 namespace처리는 별도로 하지 않고 뒤에 data를 붙임

```tsx
  (X)
  const useAssetData = (...) => {...};
  const useActivityData = (...) => {...};
  const Data = {useAssetData, useActivityData};
  export default Data;

  import Data from "...";

  Data.useAsset, Data.useActivity
```

```tsx
  (O)
  export const useAssetData = (...) => {...};
  export const useActivityData = (...) => {...};

  import {useAssetData, useActivityData} from "...";

  useAssetData, useActivityData
```

```tsx
// 명명구조
폴더/파일명: features/wallet/data/[데이터명].ts
hook이름: use[데이터명]Data
data이름: [데이터명]Data,
mutator이름: mutate[데이터명]Data,
validating이름: [데이터명]DataIsValidating
key이름: 'data/[도메인명]/[데이터명]';
// 예시
폴더/파일명: features/wallet/data/asset.ts
hook이름: useAssetData
data이름: assetData,
mutator이름: mutateAssetData,
세부mutator이름: appendAssetData, removeAssetData, modifyAssetData...
validating이름: assetDataIsValidating
key이름: 'data/wallet/asset';

// 코드 예시1
export const useAssetData = () => {
  const {data : assetData, muteate : mutateAssetData, isValidating: assetDataIsValidating} = useSWR('data/wallet/asset', ...);

  return {assetData, mutateAssetData, assetDataIsValidating};
}
// 코드 예시2
export const useAssetData = () => {
  const {data : assetData, muteate, isValidating: assetDataIsValidating} = useSWR('data/wallet/asset', ...);

  const mutateAssetData = (asset: IAssetData) => {
    mutate(prevData) => {
      // ...

      return nextData;
    }
  };

  return {assetData, mutateAssetData, assetDataIsValidating};
}
// 코드 예시3
export const useAssetData = () => {
  const {data : assetData, muteate, isValidating: assetDataIsValidating} = useSWR('data/asset', ...);

  const appendAssetData = (asset: IAssetData) => {
    mutate(prevData) => {
      // ...
      const nextData = [...prevData, {...asset}];
      return nextData;
    }
  };

  const removeAssetData = (symbol : string) => {
    mutate(prevData) => {
      // ...
      const nextData = prevData.filter(a => a.symbol !== symbol );
      return nextData;
    }
  };

  return {assetData, appendAssetData, removeAssetData, assetDataIsValidating};
}
```

### 글로벌 style

- 글로벌 레벨의 styles는 emotion 컴포넌트로 작성하되 아래에 룰에 따라서 작성한다.

```tsx
// camel-case
파일명: styles / glowOnHover.tsx;
// pascal-case + Style
컴포넌트명: <GlowOnHoverStyle />;
```

### 이벤트 속성명 및 이벤트 핸들러 함수명

- 이벤트속성명: on[이벤트명], on[이벤트명][객체명] on[객체명][이벤트명]
- 이벤트핸들러: handle[이벤트명], handle[이벤트명][객체명], handle[객체명][이벤트명]
- 뒤쪽 부분은 유연하게 작성가능하나 앞쪽에 on/handle은 꼭 지켜주시기 바랍니다.

```
ex) 이벤트속성명: onClick, 이벤트핸들러: handleClick
ex) 이벤트속성명: onClickItem, 이벤트핸들러: handleClickItem (유저행동이벤트)
ex) 이벤트속성명: onPageLoaded, 이벤트핸들러: handlePageLoaded (상태변경이벤트)
```

```tsx
<Component onClick={handleClick}> ...
<DropDown onClickItem={handleClickItem}> ...
<PageFrame onPageLoad={handlePageLoaded}> ...
```

### 그 외

- 그 외의 파일명, 폴더명 등은 [단/복수혼용 camel-case]로 작성한다.

### peer review

- 클린코드 스터디 대신에 프로젝트 진행중에는 비정기적으로 peer review를 진행한다.
- 잠재적인 오류, 컨벤션, 디자인 패턴 등을 서로 검토함.
