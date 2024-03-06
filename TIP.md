#

-   [mackayson](https://www.mckayson.com/)
-   [m mack](https://m.mckayson.com/)
-   [recreate bootstrap](https://www.youtube.com/watch?v=TFxQ05_t0MQ)
-   [github-mui](https://github.com/mui/material-ui/blob/master/docs/pages/base-ui/react-button/%5BdocsTab%5D/index.js)
-   [cdn-purecss](https://cdnjs.com/libraries/pure)
-   [mui-custom](https://www.youtube.com/watch?v=HsdjivqQ7BA)
-   [cdn-pure2](https://cdnjs.cloudflare.com/ajax/libs/pure/3.0.0/grids-responsive.css)
-   [cdn-mui](https://unpkg.com/@mui/material@5.15.6/umd/material-ui.development.js)
-   [bootstrap](https://getbootstrap.com/)
-   [livesasscompiler위치](https://wazacs.tistory.com/45)
-   [figma-htmltodesign](https://www.youtube.com/watch?v=7dltJBH14g8)
-   [scss media](https://chaewonkong.github.io/posts/scss-media-query.html)
-   [scss media2](https://eunhee-programming.tistory.com/178)
-   [dl dt dd](https://aoa.gitbook.io/skymimo/aoa-2019/tips-2/dl-dt-dd-.)
-   [flex 가이드](https://www.heropy.dev/p/Ha29GI)
-   [mouse event](https://react.dev/reference/react-dom/components/common#handling-mouse-events)
-   [transition 가능속성](https://guiyomi.tistory.com/131)
-   [참고-UI](https://codepen.io/kimyangsun/pen/RwNByrY)

## carousel

-   [swiper](https://swiperjs.com/react)
-   [swiper-참고](https://xionwcfm.tistory.com/331)
-   [react-slick-참고](https://velog.io/@cookncoding/React-slick%EC%97%90-styled-components-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
    react-slick으로 나중에 바꿔보자 (성능최적화 찍자)
-   [slick-slider](https://www.npmjs.com/package/slick-slider)
    기존 맥케이슨은 이패키지를 쓰는데 jquery 방식이다.
-   [picsum](https://picsum.photos/)
-   [react picsum](https://classic.yarnpkg.com/en/package/react-lorem-picsum)

## prettier

-   [설정](https://joshua1988.github.io/vue-camp/format/prettier.html#husky%E1%84%85%E1%85%B3%E1%86%AF-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%8B%E1%85%A7-commit-%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A6-prettier-%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%A6-%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%A6-%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)

## 할일

1. figma활용하여 정리
2. header부터 만들면서 원본 완성 시 > component로 분할 > github에 commit 남기기

## error

-   [mouse event](https://velog.io/@rimo09/%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A0%95%EB%B3%B5)
-   [classList 쓰지마 react](https://sylagape1231.tistory.com/59)

## inifinite loop 조심

```jsx
   // ! infinite loop 조심
  onMouseEnter={handleMouseEnter(0)}
  onMouseEnter={() => handleMouseEnter(0)}
```

## ref와 state

https://bo5mi.tistory.com/215

## clientwidth vs offsetwidth

offsetWidth 속성은 요소의 가로 값(보더/패딩 포함)
clientWidth 속성은 요소의 가로 값(마진/보더 불포함)

https://webstoryboy.co.kr/1739

## ref 여러개 묶어서

https://itprogramming119.tistory.com/entry/React-useRef-%EC%97%AC%EB%9F%AC%EA%B0%9C%EB%A5%BC-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9C%BC%EB%A1%9C-%EB%8B%A4%EB%A3%A8%EA%B8%B0

## promotion 탭 hover 시에 margin때문에 on이 풀려버린다.

이것을 위해 margin을 padding으로 다시 수정 + borderbox를 content-box로 함으로써 아래 까만 표시줄을 padding포함 안하게
https://sirius7.tistory.com/6

## window.scrollY, element.scrollTop의 차이, header에

header에 마우스 직접은 scrollY를 0부터 1씩 찍어서 문제 없으나
휠로 하면 100씩하고 나중에 0을 한발 늦게 찍어서 문제. 그래서 다른 방법이 있나 고민
그러나 함수를 바깥으로 빼는 것으로 해결

```jsx
// 기존 코드
useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);

        if (scrollY > 80) {
            setIsOn(true);
        } else {
            setIsOn(false);
        }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [scrollY, isOn]);

// 해결 코드
const handleScroll = () => {
    setScrollY(window.scrollY);
};

useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    if (scrollY > 50) {
        setIsOn(true);
    } else {
        setIsOn(false);
    }

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [scrollY, isOn]);
```

## mainContents tab에서 a링크 막기

a링크 prevent시키는법
https://gseok.gitbooks.io/react/content/bd80-bd84-bd80-bd84-c9c0-c2dd-b4e4/react-preventdefault-cc98-b9ac-c815-b9ac.html

## mainContents tab 코드 리팩토링 필요

gpt 질문
User
I use react,
How to make tab as html, scss with React?
and how to apply onClick event as Toggle ?

`tab.map()`을 이용할 방법으로 리팩토링

## Swiper autoplay 적용

-   [refer](https://codesandbox.io/p/devbox/swiper-react-autoplay-pdrc53?file=%2Fsrc%2FApp.jsx%3A29%2C19-29%2C27)

## git fetch / merge / diff / pull

-   `git pull`: 원격(remote) 저장소의 업데이트를 가져오는 동시에 현재 작업하는 로컬 브랜치로 병합(merge)합니다.
-   `git fetch origin`: 원격 저장소의 업데이트를 확인하고 로컬 저장소에 업데이트된 내용을 다운로드합니다. 하지만 이 내용을 현재 작업 중인 브랜치에 병합하지 않습니다. 따라서 'git fetch' 명령어를 실행한 이후에는 'git merge'나 'git rebase' 명령어를 사용하여 로컬 브랜치에 업데이트를 병합해야 합니다.
-   [설명](https://kotlinworld.com/277)

-   diff: fetch로 가져온 코드를 remote코드를 diff로 local코드와 비교하기에는 힘들다.(터미널에서 보여주기 때문에) 그래서 difftool을 이용하여 vscode 파일로 쉽게볼 수 있게 해본다.
    (git diff 다음에 비교할 수 있는 방법은 여러가지가 있다. 예시 `git diff HEAD origin/main`)
-   `git config --global -e` > [difftool "vscode"] cmd = "code --wait --diff $LOCAL $REMOTE" > `git difftool main origin/main` (방법은 여러가지지만 local과 remote를 비교하는 코드다)
-   [difftool 설정](https://velog.io/@jaeyoung9849/Git-diff-vn9bi3g1)

## Swiper에서 default DIV 태그를 교체

-   [swiper props에서 참고](https://swiperjs.com/react)

## useEffect 오류

useEffect안에 useState에 초기 렌더링에 안바뀐다.
location으 pathname으로 처리하려는데 왜 안되 클래스
https://velog.io/@yhnb3/%EC%A3%BC%EB%8B%88%EC%96%B4-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%93%A4%EC%9D%B4-useEffect%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0%EB%95%8C-%EC%9E%90%EC%A3%BC-%ED%95%98%EB%8A%94-%EC%8B%A4%EC%88%98-1%ED%8E%B8

https://codingapple.com/unit/react-setstate-async-problems/

https://1yoouoo.tistory.com/16

https://velog.io/@khy226/useEffect-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C-%EC%9A%94%EC%95%BD

# router

https://github.com/remix-run/react-router/blob/main/examples/data-router/src/app.tsx

https://www.youtube.com/watch?v=XBRLVRjZ3CQ
https://www.youtube.com/watch?v=rkDSVHomVoQ
https://www.youtube.com/watch?v=d5kJDe1Y6ZU&list=PLynWqC6VC9KNJIAsMJMjmyNezoEnmjSfH
https://www.youtube.com/watch?v=5s57C7leXc4&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf&index=3
https://www.youtube.com/watch?v=nDGA3km5He4
https://www.youtube.com/watch?v=eFPvXGZETiY

## App, Layout, Header - useEffect 오류

**중요**

원인: Header에 isOn state 가 '/'를 제외하고는 모두 고정되어 on이 되어야한다. '/products' 및 모든 경우, 그런데 기존에 '/' 때문에 Header 컴포넌트에 `setIsOn`관련 해서 mouseLeave 라든지 하는 것에 너무 많이 변경을 둬서 문제가 생김.
그리고 scrollY 부분에서 `else{ setIsOn(false) }`가 한번 더 있어서 계속 렌더링이 false가 되는 문제가 생겼었다.

해결: 첫번째 useEffect안에 else를 지우고, 두번째로 mouseLeave 같은 것들은 '/' root에서만 가능하게 코드를 변경하자 (`handleActiveBgEnter`, `handleActiveBgLeave` 등)

궁금: 결국 Header에 있던 `const [isOn, ...]` 코드를 App, Layout에서 prop으로 Header 전달했던 것들도 가능하지만 다시 해보니 Header 그냥 둬도 된다. 다만 useEffect에서 setState이후 false가 찍히고 useEffect 밖에서 다시 찍어보니 true가 나와서 결국 Header에서 state를 해결해도 되는데,,, false가 찍히는 이유가 무엇인가 알아보자!!!

## reset 문제

https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0

## react로 scroll lib

-   [customhook](https://shylog.com/react-custom-hooks-scroll-animation-fadein/)
-   [react-scroll](https://www.npmjs.com/package/react-scroll)
-   [aos](https://michalsnik.github.io/aos/)
-   [aos-tip](https://inpa.tistory.com/entry/AOS-%F0%9F%93%9A-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-Animate-On-Scroll)

```jsx
// aos 설치
// yarn add aos
// yarn add @types/aos
// root 디렉토리에 types/aos.d.ts에 코드 넣기

import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    // ... rest of your component
}
```

## vite에서 live sass compiler map파일 세팅

```
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  }
})
```

-   [익스텐션](https://inpa.tistory.com/entry/VSCode-%F0%9F%92%BD-SCSS-%EC%BD%94%EB%94%A9%ED%95%98%EB%8A%94%EB%8D%B0-%EC%9C%A0%EC%9A%A9%ED%95%9C-%ED%99%95%EC%9E%A5%ED%8C%A9-%F0%9F%92%AF-%EC%B6%94%EC%B2%9C)
-   [참고](https://yozm.wishket.com/magazine/detail/2082/)

## 크롬 브라우저 개발자도구를 통한 코드작성

개발자도구>source탭>Workspace>add folder>내 프로젝트 폴더 넣기
해당 파일 예,scss를 변경시 바로 반영되고 vscode에 자동 동기화 된다.

-   [ref](https://inpa.tistory.com/entry/%F0%9F%92%BB-%ED%81%AC%EB%A1%AC-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%8F%84%EA%B5%AC-F12-%F0%9F%94%8D-%ED%99%9C%EC%9A%A9%EB%B2%95-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-Elements%ED%8E%B8)
