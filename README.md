# 🙂 ez-mail
![login-logo](https://user-images.githubusercontent.com/98013867/227068947-1bd52e17-8abb-4af6-85a2-c47ffb0b6e55.png)

ez-mail은 쉽게 이메일 탬플릿을 작성하고, 구독자들에게 전달해 주는 뉴스레터 서비스입니다. 드래그 앤 드롭으로 쉽고 빠르게 디자인된 이메일 탬플릿을 만들어 나의 구독자들에게 발송할 수 있고, 간편하게 구독자를 관리할 수 있습니다.


# 📖 Contents
* [🙂 ez-mail](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#-ez-mail)
* [💫 Motivation](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#-motivation)
* [🏋️ Challenges](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#%EF%B8%8F-challenges)
  * [1. 이메일 웹빌더 구현](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#1-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%9B%B9%EB%B9%8C%EB%8D%94-%EA%B5%AC%ED%98%84)
    * [1) 이메일 템플릿 태그](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#1-%EC%9D%B4%EB%A9%94%EC%9D%BC-%ED%83%AC%ED%94%8C%EB%A6%BF-%ED%83%9C%EA%B7%B8)
    * [2) 이메일 템플릿화 및 데이터 구조](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#2-%EC%9D%B4%EB%A9%94%EC%9D%BC-%ED%85%9C%ED%94%8C%EB%A6%BF%ED%99%94-%EB%B0%8F-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B5%AC%EC%A1%B0)
    * [3) 드래그앤 드롭](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#3-%EB%93%9C%EB%9E%98%EA%B7%B8%EC%95%A4-%EB%93%9C%EB%A1%AD)
    * [4) 버튼, 텍스트 블록에 사용되는 텍스트 에디터 구현](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#4-%EB%B2%84%ED%8A%BC-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%B8%94%EB%A1%9D%EC%97%90-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%97%90%EB%94%94%ED%84%B0-%EA%B5%AC%ED%98%84)
  * [2. 메일 서버 구현](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#2-%EB%A9%94%EC%9D%BC-%EC%84%9C%EB%B2%84-%EA%B5%AC%ED%98%84)
  * [3. CDN 적용](https://github.com/ez-mail/ez-mail-client-web/edit/feature/readme-edit/README.md#3-cdn-%EC%A0%81%EC%9A%A9)


# 💫 Motivation
이번 팀 프로젝트의 메인 목표는 부트 캠프에서 프론트엔드와 백엔드 교육 기간 동안 공부했던 지식들을 다듬으며 현업과 유사한 기술 스택을 사용하며 실력 향상을 도모하기였습니다. 이 메인 목표에 맞는 프로젝트 아이디어를 고민하다 우연히 제가 관심 있게 본 기업에서 뉴스레터를 구독하는 창의 주소가 해당 기업 주소가 아닌 다른 기업의 주소인 것을 발견했습니다. 메일 보내는 건 간단한 작업이라 생각했는데 이런 서비스가 따로 있다는 것이 신기해 해당 서비스들에 대한 조사를 시작했습니다. 그 결과 메일 보내는 게 서버에서 꽤나 자원이 드는 일이었고, 여러 클라이언트에서 호환되는 디자인 이메일 템플릿을 만드는 것도 꽤나 번거로운 일이라 많은 기업이 비슷한 뉴스레터 서비스를 사용 중이었습니다. 해당 서비스를 직접 만든다면 서비스 이용자가 디자인 이메일 템플릿을 쉽게 만들 수 있도록 이메일 웹 빌더도 제공하고, 구독자 관리, 메일 전송 등 프론트엔드와 백엔드에 챌린지 요소들이 골고루 있었고, 그 과정에서 팀 프로젝트의 메인 목표도 이룰 수 있을 것이라 판단해 이러한 뉴스레터 서비스를 만들게 되었습니다.


# 🏋️ Challenges
## 1. 이메일 웹빌더 구현
이메일 웹빌더를 구현하는데 크게 다음 4가지의 어려움이 있었습니다.

* 어떻게 유저가 작성한 이메일 템플릿을 저장하고, 불러와도 그대로 편집이 가능하게 할 수 있을까?
* 어떻게 유저가 만든 템플릿 데이터를 이메일에 쓰이는 태그들에 맞게 변환해 줄 수 있을까?
* 어떻게 편집 요소들을 드래그 앤 드롭으로 사용할 수 있을까?
* 이메일 웹 빌더의 텍스트 상자와 버튼 상자에 쓰이는 텍스트 에디터를 어떻게 구현해야 할까?

처음엔 어디서부터 시작해야 할지 막막했지만, 반드시 해야 하는 것부터 첫 단추를 꿰어보기로 했습니다.

### 1) 이메일 탬플릿 태그
이메일은 비교적 오래된 통신 수단이지만 표준이 없기 때문에 수많은 클라이언트들과의 하위 호환성을 고려해야 했습니다. 그래서 우리에게 익숙한 `<div>` 태그나 `margin` 속성 같은 표준 코딩에서 자주 사용하는 개념을 사용할 수 없었고 거의 모든 부분에서 `<table>`, `<td>` 태그에 의존해야 했습니다. 이외에도 일부 이메일 클라이언트에선 `<body>` 태그를 대체, style은 인라인 방식으로 등등 하위 호환성을 높이기 위한 코딩 방법들을 사용하면 아래와 같이 단순히 헤더, 바디, 푸터의 형식으로 이메일을 보내기만 해도 많은 코드가 사용됩니다.
```html
<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
    <tr>
        <td align="center" valign="top">
            <table border="0" cellpadding="20" cellspacing="0" width="600" id="emailContainer">
                <tr>
                    <td align="center" valign="top">
                        <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailHeader">
                            <tr>
                                <td align="center" valign="top">
                                    This is where my header content goes.
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top">
                        <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailBody">
                            <tr>
                                <td align="center" valign="top">
                                    This is where my body content goes.
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top">
                        <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailFooter">
                            <tr>
                                <td align="center" valign="top">
                                    This is where my footer content goes.
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
```
해당 태그들을 이메일 빌더에서도 그대로 사용하면 너무 코드가 복잡해지므로 이메일 빌더에는 div 태그를 사용하고, 최종적으로 이메일을 보낼 때만 이메일 템플릿화 해서 보내기로 정했습니다.

### 2) 이메일 템플릿화 및 데이터 구조
이메일 탬플릿 구조에 대한 공부가 끝나니 다음으로 드는 생각은 **'어떻게 같은 데이터로 유저가 편집도 하고, 이메일을 보내는 데이터로도 사용할 수 있을까?'** 였습니다. 구체적으로는 같은 데이터를 편집 중에는 html dom 요소로 만들어줘야 했고, 이메일 템플릿화 할 때는 html 요소들을 string 형태로 만들어 전송해야 했습니다. 그러다 문득 결국 리액트의 함수 컴포넌트는 데이터가 들어오면 그걸 html 요소로 만든 뒤 DOM 요소 노드 객체로 변환해 주는 역할을 하니 그걸 객체로 만들지 않고 string 으로 만들어주는 것도 있을 거라 생각해 조사를 했고 공식문서에서 [Server React DOM APIs](https://react.dev/reference/react-dom/server)의 [renderToStaticMarkup](https://react.dev/reference/react-dom/server/renderToStaticMarkup)라는 것을 발견했습니다. 해당 API를 이용하여 평소에는 이메일 빌더 컴포넌트에 데이터를 넣어서 사용자가 편집하는 화면을 보여주고, 메일 발송을 할 때는 이메일 컴포넌트에 해당 데이터를 넣어서 html string 으로 보내주는 식으로 구현을 하게됐습니다.

이제 남은 것은 같은 데이터가 이메일 빌더 컴포넌트에 들어가든 이메일 템플릿 컴포넌트에 들어가든 같은 결과물로 보이게 하는 것이었습니다. 저희가 만들 이메일 빌더는 결국 블록 기반의 웹 빌더라 생각했고 이메일 탬플릿은 결국 블록 데이터들이 모여있는 배열로 봐야겠다 생각했습니다. 블록 단위로 생각을 해보니 각 블록들에 맞는 데이터 구조를 짜는데 좀 더 수월했습니다. 최종적으로는 아래와 같은 데이터 구조가 나오게 됐습니다. 버튼 블록을 예시로 들었습니다.
```javascript
{
  id: "asdf",
  type: "button",
  link: "#",
  content: "버튼 이름",
  boxStyle: {
    backgroundColor: "#FFFFFF",
    borderWidth: "0px",
    borderColor: "#000000",
    borderStyle: "solid",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "0px",
    paddingRight: "0px",
    textAlign: "center",
  },
  contentStyle: {
    display: "inline-block",
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingLeft: "18px",
    paddingRight: "18px",
    backgroundColor: "#ffdf2b",
    color: "#000000",
    borderWidth: "0px",
    borderStyle: "solid",
    borderRadius: "3px",
    fontSize: "16px",
    fontFamily: 'AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", dotum, arial, helvetica, sans-serif',
    textDecoration: "none",
}
```
위와 같은 데이터들의 배열을 이메일 빌더 컴포넌트에 넣어주면 유저가 편집할 수 있게 보이고, 이메일 템플릿 컴포넌트에 넣으면 이메일 내용에 들어가는 html string 상태가 됩니다.

### 3) 드래그앤 드롭
저희가 만든 웹 빌더는 결국 블록 데이터들이 모여있는 배열을 컴포넌트가 그 순서에 맞춰 보여주는 식이었습니다. 그러므로 사용자가 드래그 앤 드롭한 요소를 배열에서 올바른 위치로 바꿔주기만 하면 리액트 컴포넌트가 배열 데이터를 기반으로 리렌더링 되므로 사용자 입장에선 해당 요소를 드래그 앤 드롭해 줬더니 해당 요소가 이동했다고 느낄 것이라 생각했습니다. 그래서 실제 로직도 드래그를 시작한 요소의 인덱스, 끝난 위치의 인덱스를 기준으로 배열 데이터의 순서를 바꿔주는 식으로 구현을 했습니다. 이때 사용자가 블록을 드롭할 위치를 직관적으로 느낄 수 있도록 현재 마우스가 있는 블록을 기준으로 그 블록의 높이의 반보다 커서가 위에 있으면 해당 블록 위에 들어가는 위치가 표시되도록 했고, 그 블록의 높이의 반보다 커서가 아래에 있으면 해당 블록 아래에 들어가는 위치가 표시되도록 했습니다.

### 4) 버튼, 텍스트 블록에 사용되는 텍스트 에디터 구현
다른 블록들과 달리 버튼, 텍스트 블록에는 사용자가 텍스트를 입력하고 글자 크기나 색상 등을 자유롭게 조절해야 하므로 텍스트 에디터 구현이 필요했습니다. `<textarea>` 같이 단순히 텍스트를 받는 태그보다는 우리가 버튼으로 쓸 `<a>` 태그나 텍스트 상자로 쓸 `<div>` 태그 자체를 텍스트 에디터로 쓰길 원해서 조사해 보니 `contenteditable` 이라는 html 속성을 사용하면 원하는 html 요소를 쉽게 웹 에디터로 변경할 수 있었습니다. 그런데 `contenteditable` 을 리액트에서 사용하려니 input 과 동작 방식이 달라 몇 가지 문제들이 있었습니다.
* 텍스트 입력시 `change event` 가 아니라 `input event` 가 동작합니다.
* `input` 이 아니라 `value` 값이 없습니다.
* `element.focus()` 를 이용해서 포커스를 주면 작성 중인 내용이 있어도 입력 커서가 맨 앞으로 갑니다. 이는 일반적으로 `input` 에 포커스를 주면 커서가 맨 뒤로 가는 것과 대조적입니다.

이러한 문제들이 있어 `contenteditable` 을 사용한 태그를 리액트의 제어 컴포넌트로 만들기가 어려웠습니다. 그래서 조사를 해보니 [react-contenteditable](https://www.npmjs.com/package/react-contenteditable) 라이브러리를 사용하면 위의 문제점들을 쉽게 해결이 가능했습니다. 그러나 이러한 라이브러리를 사용하는 건 팀 프로젝트 메인 목표였던 실력 향상에 아무런 도움이 되지 않는다 느꼈고 해당 라이브러리 같은 기능을 직접 구현하기로 했습니다.

우선 `value` 값이 없는 문제는 해당 태그의 `innerHTML` 값을 `value` 처럼 다루는 것으로 해결했습니다. 그리고 유저가 작성하던 텍스트를 그때마다 데이터에 저장해 주기 위해 제어 컴포넌트로 만들어야겠다 생각했고 `innerHTML` 이 바뀔 때마다 해당 컴포넌트가 업데이트 되도록 했습니다. 이때 그냥 `element.focus()` 를 사용하게 되면 매 입력마다 커서가 맨 앞으로 가서 글을 작성할 수가 없으므로 그때마다 텍스트 커서를 맨 뒤로 옮겨주는 `moveCaretToEnd` 라는 유틸 함수도 만들어 항상 사용자가 기대하는 위치에 텍스트 입력 커서가 올 수 있도록 했습니다. 그러다 생각지도 못한 문제를 직면하게 됐습니다.

영어나 한자, 일본어처럼 단순히 문자를 나열하는 언어들은 위와 같은 방식으로만 구현해도 충분했지만 모음과 자음이 합쳐져야 하는 한글은 아니었습니다. 위와 같이 `innerHTML` 값이 업데이트될 때마다 컴포넌트를 렌더링 하니 한글이 합쳐지기도 전에 커서의 위치가 업데이트되면서 'ㅎㅏㄴㄱㅡㄹ' 과 같이 자음 모음이 모두 분리되는 현상이 생겼습니다. 이는 결국 제어 컴포넌트로 만들며 생긴 문제였기에 비제어 컴포넌트로 만들어 해당 돔 요소가 자연스럽게 동작하도록 하면 해결되는 문제였지만 이러면 사용자가 보고 있는 화면과 데이터가 일치하지 않을 수 있다는 문제가 있었습니다. 이를 해결하려면 결국 제어 컴포넌트와 비제어 컴포넌트의 특성을 모두 이용해야 했습니다.

위의 문제를 해결하기 위해 `ContentEditable` 이라는 컴포넌트를 만들어 사용자가 해당 컴포넌트를 사용할 땐 마치 제어 컴포넌트 내의 `<input>` 태그처럼 `onChange`, `contentHTML`, `style` 등을 `props` 로 받게 만들었고 내부적으로는 비제어 컴포넌트로써 작용해 한글도 문제없이 써지도록 했습니다. `ContentEditable` 컴포넌트 내부에선 `input` 이벤트를 밖에서 `onChange` 이벤트처럼 다룰 수 있게 만들고, `innerHTML` 값은 state 가 아닌 지역변수로써 관리해 매번 렌더링이 일어나지 않도록 했습니다. 그리고 `memo` 를 사용해 혹시라도 유저가 작성 중인 글과 데이터가 일치하지 않을 때나 스타일이 바뀌었을 때만 리렌더링이 일어나도록 해 모든 문제들을 해결할 수 있었습니다. 추가적으로 브라우저마다 `contentEditable` 요소가 `innerHTML` 을 다루는 방식이 조금씩 달라 모두 동일한 데이터로 저장되도록 `normalizeHtml` 유틸 함수를 만들어 적용했고, 크로스 사이트 스크립팅 공격을 예방하기 위해 [DOMPurify](https://www.npmjs.com/package/dompurify) 를 이용하여 `innerHTML` 데이터를 살균 후 저장했습니다.

결과적으로 마치 라이브러리처럼 사용자는 내부 구조를 몰라도 리액트에서 쉽게 `contentEditable` 요소를 관리할 수 있도록 `ContentEditable` 컴포넌트를 만들었고, 해당 컴포넌트를 사용해 쉽게 버튼과 텍스트 블록을 만들고 사용자가 편집한 내용을 데이터로 관리할 수 있었습니다.

## 2. 메일 서버 구현
일반적으로 클라이언트에서 메일 서버에 요청을 할 때는 SMTP 프로토콜을 사용하고, 메일 서버에서 클라이언트로 메일을 수신할 때는 POP3 혹은 IMAP 프로토콜을 사용합니다. 그리고 메일 서버 간 요청할 때는 SMTP 프로토콜을 사용합니다. 저희 메일 서버는 백엔드 서버에서 메일 발송을 SMTP 프로토콜로 요청을 하면 해당 메일 주소에 맞는 메일 서버로 SMTP 프로토콜로 메일 전송을 요청하는 역할을 해야 했습니다. 조사를 더 해보니 해당 기능들을 구현하기 위해 도메인과 고정 IP 도 필요하였고, 또 다른 도메인 메일 서버로 보내기 위한 보안 절차도 생각보다 까다롭다는 것을 알게 되었습니다.

현실적으로 남은 기간 동안 기존에 계획했던 SMTP 프로토콜을 사용하는 메일 서버를 구현하는 것은 불가능하다 판단했고 다른 방향으로 조사를 하니 SMTP 방식의 느린 속도, 보안 문제 등을 때문에 https 프로토콜을 사용하는 아마존의 [SES](https://aws.amazon.com/ko/ses/)나 [SendGrid](https://sendgrid.com/) 서비스들도 있다는 것을 알게 됐습니다. 메일 서버 구현의 궁극적인 목표는 결국 메일 서버의 동작 방식과 메일을 전송하는데 드는 비용을 이해하고 해당 작업들을 처리해 보며 학습 효과를 보는 것이었으므로 저희 메일 서버는 마치 SES와 같은 서비스처럼 http로 메일 전송 요청을 받으면 타사의 smtp 서버를 이용해 목표 도메인으로 메일을 전송해 주는 식으로 구현을 하고 그 메일 서버 안에서 여러 이메일 전송 요청을 하는데 드는 시간을 저희의 힘으로 줄여보는 식으로 구현하기로 했습니다.

테스트해보니 메일 하나를 보내는데 대략 2초 정도의 시간이 걸렸습니다. 만약 동시에 n 명에게 보낼 때 차례대로 처리를 한다면 2n 초가 걸려 엄청난 시간이 소모되니 이를 해결해야 했습니다. NodeJS는 단일 스레드로 구현돼있고 단일 스레드에서 여러 비동기를 가장 빠르게 처리하는 방법은 첫 번째 비동기 요청이 끝나는 것을 기다리지 않고 먼저 모든 비동기 요청을 하고 한 번에 요청 결과를 받는 것이었습니다. 이는 `Promise.all()` 혹은 `Promise.allSettled()` 를 이용하여 구현이 가능했습니다. 저희 메일 서버에서는 여러 메일 전송 요청을 받았을 때 각 요청들에 대한 성공과 실패에 관한 정보를 보내줘야 하는데 하나의 요청만 실패해도 reject 결과를 받게 되는 `Promise.all()` 이 아닌 `Promise.allSettled()` 를 사용했습니다. 그 결과 한 번에 많은 메일 전송 요청을 받아도 메일 하나를 전송하는 시간과 비슷한 시간이 걸리는 메일 서버를 구현할 수 있었습니다.

## 3. CDN 적용
