# 🙂 ez-mail

![ez_mail nav바 로고-001 (1)](https://user-images.githubusercontent.com/98013867/227674894-5e476aa3-ef5c-4a7e-a916-85cd137d6b2a.png)

ez-mail은 쉽게 이메일 탬플릿을 작성하고, 구독자들에게 전달해 주는 뉴스레터 서비스입니다.

드래그 앤 드롭으로 직관적이고 빠르게 디자인 이메일 탬플릿을 만들고, 간편하게 구독자를 관리할 수 있습니다.

[🎥 ez-mail 시연 영상](https://youtu.be/h--7z8hWbiI)

<br>
<br>

# 📖 Table of contents
- [🙂 ez-mail](#-ez-mail)
- [🔥 Motivation](#-motivation)
- [🏋 Challenges](#-challenges)
  + [1. 이메일 웹 빌더를 어떻게 구현할까?](#1-이메일-웹-빌더를-어떻게-구현할까)
    * [1) 이메일 템플릿에는 어떤 태그들이 쓰일까?](#1-이메일-템플릿에는-어떤-태그들이-쓰일까)
    * [2) 어떻게 동일한 데이터로 웹 편집도 하고, 이메일 전송도 할까?](#2-어떻게-동일한-데이터로-웹-편집도-하고-이메일-전송도-할까)
    * [3) 드래그 앤 드롭](#3-드래그-앤-드롭)
    * [4) 텍스트 에디터 ](#4-텍스트-에디터-구현)
      * [input이 아니라 value값이 없는 문제](#input이-아니라-value값이-없는-문제)
      * [element.focus()를 이용해서 포커스를 주면 입력 커서가 맨 앞으로 가는 문제](#elementfocus를-이용해서-포커스를-주면-입력-커서가-맨-앞으로-가는-문제)
      * [한글이라서 생긴 문제](#한글이라서-생긴-문제)
      * [반제어 컴포넌트로 만들자](#반제어-컴포넌트로-만들자)
  + [2. 메일 서버 구현](#2-메일-서버-구현)
    * [1) 우리가 구현할 메일 서버?](#1-우리가-구현할-메일-서버)
    * [2) 현실적으로 부족한 시간... 대안은?](#2-현실적으로-부족한-시간-대안은)
    * [3) 메일 서버 구현 결과](#3-메일-서버-구현-결과)
  + [3. CDN 적용 및 CORS 문제 해결](#3-cdn-적용-및-cors-문제-해결)
    * [1) CDN 사용 이유](#1-cdn-사용-이유)
    * [2) 무료 proxy를 이용한 CORS 문제 해결](#2-무료-proxy를-이용한-cors-문제-해결)
    * [3) 무료 proxy의 문제점 및 대안](#3-무료-proxy의-문제점-및-대안)
    * [4) CORS DEEP DIVE](#4-cors-deep-dive)
- [🗓 Schedule](#-schedule)
- [🛠 Tech Stacks](#-tech-stacks)
- [🔗 Repository Link](#-repository-link)
- [🧑‍💻 Member](#-member)

<br>
<br>

# 🔥 Motivation

이번 팀 프로젝트의 메인 목표는 '**부트 캠프 교육 기간 동안 배웠던 지식들을 다듬고 현업과 유사한 기술 스택을 사용하며 개발 실력을 증진하자**'였습니다.

이 목표에 적합한 아이디어를 고민하다 우연히 제가 관심 있게 보던 회사의 홈페이지에서 뉴스레터를 구독하는 창의 주소가 해당 기업 도메인이 아닌 것을 발견했습니다. 메일 보내는 건 간단한 작업이라 생각했는데 해당 기업이 직접 보내지 않고 메일 발송 서비스를 따로 사용하고 있는 것에 호기심이 생겨 해당 서비스들에 대한 조사를 시작했습니다. 그 결과 메일 전송이 서버에서 자원이 많이 드는 작업이고, 여러 클라이언트에서 호환되는 디자인 이메일 템플릿을 만드는 것도 번거로운 일이라 많은 기업들이 뉴스레터 서비스를 사용하고 있다는 것을 알게 됐습니다.

이러한 뉴스레터 서비스들은 이용자가 디자인 이메일 템플릿을 쉽게 만들 수 있는 이메일 웹 빌더, 자신의 홈페이지에 구독자 추가 폼 기능 제공, 메일 전송 기능을 제공하고 있었습니다. 이를 직접 구현해 보면 프론트엔드와 백엔드에 있는 챌린지 요소들을 해결하며 자연스럽게 메인 목표도 달성될 것이라 판단해 이러한 서비스를 만들게 됐습니다.

<br>
<br>

# 🏋 Challenges
4주 동안 개발을 진행하며 많은 도전들이 있었지만 그중 제일 핵심적인 것들은 크게 3가지였습니다.

<br>

## 1. 이메일 웹 빌더를 어떻게 구현할까?

이메일 웹빌더를 구현하는데 크게 다음 4가지의 어려움이 있었습니다.

* 어떻게 유저가 작성한 이메일 템플릿을 저장하고, 불러와도 그대로 편집이 가능하게 할 수 있을까?
* 어떻게 유저가 만든 템플릿 데이터를 이메일에 쓰이는 태그들에 맞게 변환해 줄 수 있을까?
* 어떻게 편집 요소들을 드래그 앤 드롭으로 사용할 수 있을까?
* 이메일 웹 빌더의 텍스트 상자와 버튼 상자에 쓰이는 텍스트 에디터를 어떻게 구현해야 할까?

어디서부터 시작해야 할지 막막했지만, 반드시 해야 하는 것부터 첫 단추를 꿰어보기로 했습니다.

<br>

### 1) 이메일 템플릿에는 어떤 태그들이 쓰일까?

이메일은 비교적 오래된 통신 수단이지만 표준이 없기 때문에 수많은 클라이언트들과의 하위 호환성을 고려해야 합니다. 하위 호환성이 높은 이메일 템플릿을 만드는 몇 가지 방법들은 아래와 같습니다.
- `<div>` 태그나 `margin` 속성과같이 표준 코딩에서 사용하는 개념들을 사용하지 않습니다. 대신 `<table>` 과 `<td>` 를 사용해야 합니다.
- 일부 클라이언트는 `<body>` 태그를 삭제하므로 이를 대신하는 `<table>` 태그를 사용해야 합니다.
- 빈 태그는 반드시 닫아야 합니다. ex) `<br/>`
- css는 인라인 방식으로 적어야 합니다.
- css는 개별 속성을 사용해야 합니다.

이처럼 하위 호환성을 높이기 위한 코딩 방법들을 모두 적용하면 아래와 같이 단순히 헤더, 바디, 푸터의 형식의 이메일을 보내기만 해도 많은 코드가 사용됩니다.

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

<br>

이렇게 이메일 템플릿의 하위 호환성을 고려하면 필요 이상의 태그들을 사용하게 되는데 이를 그대로 웹 빌더에 사용하면 코드가 너무 복잡해지고 유지 보수성도 떨어진다고 판단했습니다.

그래서 위의 태그들을 그대로 사용하는 대신 웹 빌더에는 우리에게 익숙한 `<div>` 태그들을 최종적으로 보내질 이메일과 같은 결과가 보이도록 최소한으로 사용하고, 이메일 전송 시에 위의 태그들로 변환을 해 보내기로 했습니다.

<br>

### 2) 어떻게 동일한 데이터로 웹 편집도 하고, 이메일 전송도 할까?

이제 다음 문제는 **'어떻게 동일한 데이터로 웹 편집도 하고, 이메일을 전송도 할까?'** 였습니다. 같은 데이터를 편집 중에는 html dom 요소로 만들어줘야 했고, 이메일 템플릿화 할 때는 html 요소들을 string 형태로 만들어 전송해야 했습니다.

그런데 결국 리액트의 함수 컴포넌트는 데이터가 들어오면 그걸 html 요소로 만든 뒤 DOM 요소 노드 객체로 변환해 주는 역할을 하니 그걸 객체로 만들지 않고 string 으로 만들어주는 것도 있을 거라 생각해 조사를 시작했습니다.

그 결과 공식문서에서 [Server React DOM APIs](https://react.dev/reference/react-dom/server)의 [renderToStaticMarkup](https://react.dev/reference/react-dom/server/renderToStaticMarkup)라는 것을 발견하였고, 해당 API를 이용하여 아래 그림처럼 평소에는 이메일 빌더 컴포넌트에 데이터를 넣어서 `html dom object` 로 변환해 사용자가 편집하는 화면을 보여주고, 메일 발송을 할 때는 이메일 컴포넌트에 해당 데이터를 넣어서 `html string` 으로 변환을 방식으로 구현할 수 있었습니다.

<p align="center"><img width="743" alt="data-to-component" src="https://user-images.githubusercontent.com/98013867/227749574-7c834d71-4310-4996-b8c8-16167e461630.jpeg"></p>

<br>

이제 남은 것은 구체적인 데이터 형식을 정하는 것 이였습니다.

저희가 만드는 이메일 빌더는 결국 버튼 상자, 텍스트 상자 등 각 상자들이 나열되는 형태라 전체 데이터는 아래와 같이 각 도구 상자 타입에 맞는 블록 데이터들이 들어있는 배열이 적합하다 생각했습니다.

```javascript
[
  { type: "space", ... },
  { type: "text", ... },
  { type: "image", ... }
]
```

<br>

그리고 각 도구 상자에 맞는 데이터를 담을 수 있도록 블록 데이터를 구성했습니다. 아래에 버튼 상자 데이터를 예시로 들었습니다.

```javascript
{
  id: "asdf",
  type: "button", // 버튼 데이터를 버튼 컴포넌트로 바꾸는데 사용
  link: "#", // 버튼의 링크 데이터를 저장하는데 사용
  content: "버튼 이름", // 버튼 내부 텍스트를 저장하는데 사용
  boxStyle: { // 버튼 블록 전체의 스타일 데이터를 저장하는데 사용
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
  contentStyle: { // 버튼 그 자체의 스타일 데이터를 저장하는데 사용
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

<br>

마지막으로 위와 같은 데이터들이 어떤 컴포넌트에 들어가도 같은 디자인으로 보일 수 있도록 테스트를 하며 데이터들의 적절한 위치를 찾았습니다. 아래는 위의 버튼 블록 데이터가 실제로 사용되는 코드의 일부분입니다.

```javascript
// 이메일 에디터 컴포넌트의 버튼 상자 JSX
return (
  <Box style={boxStyle}> // 버튼 블록 데이터의 boxStyle
    <ContentEditable
      contentHTML={emailContentsData.emailContents[index].content} // 버튼 블록 데이터의 content
      isContentEditable={isContentEditable}
      innerRef={$editorRef}
      onChange={handleContentChange}
      style={contentStyle} // 버튼 블록 데이터의 contentStyle
      onKeyDown={handleKeyDown}
      tagName="a"
      link={link} // 버튼 블록 데이터의 link
      onBlur={handleEditorBlur}
      onClick={handleEditorClick}
    />
  </Box>
);
 
 // 이메일 템플릿 컴포넌트의 버튼 상자 JSX
 return (
  <tr>
    <td align="center" valign="top">
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        style={data.boxStyle} // 버튼 블록 데이터의 boxStyle
      >
        <tr>
          <td valign="top">
            <a href={data.link} style={data.contentStyle}> // 버튼 블록 데이터의 link, contentStyle, content
              {data.content} // 버튼 블록 데이터의 content
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
);
```

<br>

그 결과 데이터가 어떤 컴포넌트에 들어가냐에 따라 실제로 변환되는 태그의 종류는 다르더라도 같은 디자인의 이메일 템플릿으로 보이도록 만들 수 있었습니다.

<br>

### 3) 드래그 앤 드롭

저희가 만든 웹 빌더는 블록 데이터들이 모여있는 배열을 컴포넌트가 `props` 로 전달받아 그 순서에 맞게 보여주는 식이었습니다.

리액트의 컴포넌트는 `props` 로 받은 데이터가 업데이트되면 리렌더링을 하게 됩니다. 이를 이용해 사용자가 드래그 앤 드롭한 요소를 배열에서 올바른 위치로 바꿔주기만 하면 리액트 컴포넌트가 배열 데이터를 기반으로 리렌더링 되고 그 결과 사용자는 해당 요소가 자신이 드래그 앤 드롭한 위치로 이동했다고 느낄 것이라 생각했습니다.

그렇게 드래그 앤 드롭 관련 이벤트들을 이용하여 사용자가 드래그를 하는 요소의 시작 인덱스와 끝 인덱스를 받아 사용자가 드래그 앤 드롭을 마치면 이메일 데이터에서 데이터 순서를 업데이트해주는 로직을 작성해 줌으로써 자연스럽게 드래그 앤 드롭 기능을 구현할 수 있었습니다.

<p align="center"><img alt="data-to-component" src="https://user-images.githubusercontent.com/98013867/227751212-d5db4901-912f-45f0-b81d-a046aea395f5.jpeg"></p>

<br>

추가적으로 블록을 드래그 중 일 때 드롭 될 위치를 표시해서 사용자가 블록이 놓일 위치를 직관적으로 알 수 있도록 했습니다.

<p align="center"><img alt="드래그-앤-드롭-짤" src="https://user-images.githubusercontent.com/98013867/227751881-64b1f3cf-4253-48a1-ace7-4940e9573413.gif"></p>

<br>

### 4) 텍스트 에디터 구현

다른 블록들과 달리 버튼, 텍스트 블록에는 사용자가 텍스트를 입력하고 글자 크기나 색상 등을 자유롭게 조절해야 하므로 텍스트 에디터가 필요했습니다. `<textarea>` 같이 단순히 텍스트를 받는 태그보다는 우리가 버튼으로 쓸 `<a>` 태그나 텍스트 상자로 쓸 `<div>` 태그 자체를 텍스트 에디터로 쓰길 원해서 조사해 보니 `contenteditable` 이라는 html 속성을 사용하면 원하는 html 요소를 쉽게 웹 에디터로 변경할 수 있었습니다. 그런데 `contenteditable` 을 리액트에서 사용하려니 input 과 동작 방식이 달라 몇 가지 문제들이 있었습니다.
- 텍스트 입력시 `change event` 가 아니라 `input event` 가 동작합니다.
- `<input>` 이 아니라 `value` 값이 없습니다.
- `element.focus()` 를 이용해서 포커스를 주면 작성 중인 내용이 있어도 입력 커서가 맨 앞으로 갑니다. 이는 일반적으로 `input` 에 포커스를 주면 커서가 맨 뒤로 가는 것과 대조적입니다.

이러한 문제들이 있어 `contenteditable` 을 사용한 태그를 리액트의 제어 컴포넌트로 만들기가 어려웠습니다. 그래서 조사를 해보니 [react-contenteditable](https://www.npmjs.com/package/react-contenteditable) 라이브러리를 사용하면 위의 문제점들을 쉽게 해결이 가능했습니다. 그러나 **이런 라이브러리를 사용하는 건 팀 프로젝트 메인 목표였던 실력 향상에 아무런 도움이 되지 않는다 판단하여** 해당 라이브러리 기능을 직접 구현하기로 했습니다.

<br>

#### input이 아니라 value값이 없는 문제
유저가 입력하는 텍스트를 그저 텍스트 정보로 저장하는 것보단 `html` 태그로 저장하는 것이 스타일을 적용하는데 더 유리했습니다. 그래서 `value` 값이 없는 문제는 해당 태그의 `innerHTML` 값을 `value` 처럼 다루는 것으로 해결했습니다. 그리고 유저가 작성하던 텍스트를 그때마다 데이터에 저장해 주기 위해 `innerHTML` 이 바뀔 때마다 업데이트가 되는 제어 컴포넌트로 만들었습니다.

<br>

#### element.focus()를 이용해서 포커스를 주면 입력 커서가 맨 앞으로 가는 문제

이때 그냥 `element.focus()` 를 사용하게 되면 매 입력마다 커서가 맨 앞으로 가서 글을 작성할 수가 없으므로 그때마다 텍스트 커서를 맨 뒤로 옮겨주는 `moveCaretToEnd` 라는 유틸 함수도 만들어 항상 사용자가 기대하는 위치에 텍스트 입력 커서가 올 수 있도록 했습니다.

```javascript
function moveCaretToEnd(element) {
  if (element.innerText.length === 0) {
    return element.focus();
  }

  const selection = window.getSelection();

  if (selection !== null) {
    const newRange = document.createRange();
    newRange.selectNodeContents(element);
    newRange.collapse(false);
    selection.removeAllRanges();
    selection.addRange(newRange);
  }
}
```

그러나 위와 같은 방식으로 구현을 하니 생각지도 못한 문제를 만나게 됐습니다.

<br>

#### 한글이라서 생긴 문제

영어나 한자, 일본어처럼 단순히 문자를 나열하는 언어들은 위와 같은 방식으로만 구현해도 문제가 없었지만 자음과 모음이 합쳐지는 한글은 아니었습니다. 사용자가 입력을 할 때마다 `innerHTML` 값이 업데이트되고 그때마다 리렌더링 후 커서를 맨 뒤로 옮기니 아래와 같이 한글이 합쳐지지 않고 분리되는 문제가 생겼습니다.

<p align="center"><img alt="텍스트에디터-짤" src="https://user-images.githubusercontent.com/98013867/227760048-cebbc6b7-6ee1-45ef-a91c-2129ca66e8b5.gif"></p>

<br>

이는 contentEditable 컴포넌트를 제어 컴포넌트로 만들며 생긴 문제였습니다. 그래서 비제어 컴포넌트로 만들어 해당 돔 요소가 자연스럽게 동작하도록 하면 해결되는 문제였지만 이러면 사용자가 보고 있는 화면과 데이터가 일치하지 않을 수 있다는 문제가 있었습니다.

<br>

#### 반제어 컴포넌트로 만들자

제어 컴포넌트로 만들어도 문제고 비제어 컴포넌트로 만들어도 문제인데 어떻게 해결해야 할지 난감했습니다. 그러다 '**둘 중 하나로 규정해서 문제가 됐으니 제어 컴포넌트이면서 비제어 컴포넌트로 만들면 해결되지 않을까?**' 하는 생각이 번뜩 들었습니다. 아래 그림처럼 컴포넌트를 2중으로 사용하여 내부는 비제어 컴포넌트로 외부는 제어 컴포넌트로 만들고 데이터 다룬다면 위의 문제가 해결될 것 같다는 생각이 들었습니다.

<p align="center"><img width="743" alt="반제어 컴포넌트" src="https://user-images.githubusercontent.com/98013867/227761882-5eebd251-dcc2-4817-9b2a-9b3534bf3bf6.jpeg"></p>

이를 실현하기위해 `ContentEditable` 이라는 컴포넌트를 만들어 사용자가 해당 컴포넌트를 사용할 땐 마치 제어 컴포넌트 내의 `<input>` 태그처럼 `onChange`, `contentHTML`, `style` 등을 `props` 로 받게 만들었고 내부적으로는 비제어 컴포넌트로 작용해 한글도 문제없이 써지도록 했습니다.

`ContentEditable` 컴포넌트 내부에선 `input` 이벤트를 밖에서 `onChange` 이벤트처럼 다룰 수 있게 만들고, `innerHTML` 값은 state 가 아닌 지역변수로써 관리해 매번 렌더링이 일어나지 않도록 했습니다. 그리고 `memo` 를 사용해 혹시라도 유저가 작성 중인 글과 데이터가 일치하지 않을 때나 스타일이 바뀌었을 때만 리렌더링이 일어나도록 해 모든 문제들을 해결할 수 있었습니다.

```javascript
// 버튼 컴포넌트의 리턴 부분 코드입니다.

return (
    <Box style={boxStyle}>
      <ContentEditable // 사용자는 ContentEditable 컴포넌트를 input 태그처럼 사용하면됩니다.
        contentHTML={emailContentsData} // innerHTML 값을 외부 컴포넌트에서 제어하며 props로 전달해줍니다.
        isContentEditable={isContentEditable}
        innerRef={$editorRef}
        onChange={handleContentChange} // 실제 내부에는 onChange라는 이벤트가 없지만 사용자는 이를 신경 쓰지 않아도 됩니다.
        style={contentStyle}
        onKeyDown={handleKeyDown}
        tagName="a"
        link={link}
        onBlur={handleEditorBlur}
        onClick={handleEditorClick}
      />
    </Box>
  );
  ```
  
 <br>

추가적으로 브라우저마다 `contentEditable` 요소가 `innerHTML` 을 다루는 방식이 조금씩 달라서 생기는 문제를 방지하기 위해 `normalizeHtml` 유틸 함수를 만들어 모두 동일한 데이터로 저장되도록 했고, 크로스 사이트 스크립팅 공격을 예방하기 위해 [DOMPurify](https://www.npmjs.com/package/dompurify) 를 이용하여 `innerHTML` 데이터를 살균 후 저장했습니다.

그 결과 마치 라이브러리처럼 사용자는 내부 구조를 몰라도 리액트에서 쉽게 `contentEditable` 요소를 관리할 수 있도록 해주는 `ContentEditable` 컴포넌트가 만들어졌습니다. 해당 컴포넌트를 사용해 쉽게 버튼과 텍스트 블록에 텍스트 에디터를 추가하여 사용자가 편집한 내용을 데이터로 관리할 수 있었습니다.

마지막으로 이메일에 관한 여러 테스트를 제공하는 [mailtrap](https://mailtrap.io/)에서 최종적으로 발송된 이메일 템플릿의 호환성을 테스트한 결과 약 96%의 수치로 시중의 웬만한 이메일 클라이언트는 모두 호환되는 이메일 템플릿을 생성할 수 있었습니다.

<p align="center"><img width="743" alt="Screen Shot 2023-03-25 at 15 21 08" src="https://user-images.githubusercontent.com/98013867/227700618-278dabb3-1b76-4793-b907-ca78b5d7f482.png"></p>

<br>

## 2. 메일 서버 구현

### 1) 우리가 구현할 메일 서버?
일반적으로 클라이언트에서 메일 서버에 요청을 할 때는 SMTP 프로토콜을 사용하고, 메일 서버에서 클라이언트로 메일을 수신할 때는 POP3 혹은 IMAP 프로토콜을 사용합니다. 그리고 메일 서버 간 요청할 때는 SMTP 프로토콜을 사용합니다. 이중에서 저희 메일 서버는 백엔드 서버에서 메일 발송을 SMTP 프로토콜로 요청을 받아 해당 메일 주소에 맞는 메일 서버로 SMTP 프로토콜로 메일 전송을 요청하는 역할을 해야 했습니다.

<p align="center"><img width="743" alt="smtp-메일서버" src="https://user-images.githubusercontent.com/98013867/227772755-af460e66-986d-49ee-a2eb-bfa38738f471.jpeg"></p>

<br>

### 2) 현실적으로 부족한 시간... 대안은?

그런데 조사를 더 해보니 해당 기능들을 구현하기 위해 도메인과 고정 IP 도 필요하였고, 또 다른 도메인 메일 서버로 보내기 위한 보안 절차도 생각보다 까다롭다는 것을 알게 되었습니다. 현실적으로 남은 기간 동안 기존에 계획했던 SMTP 프로토콜을 사용하는 메일 서버를 구현하는 것은 불가능하다 판단했고 다른 방향으로 조사를 하니 SMTP 방식의 느린 속도, 보안 문제 등을 때문에 https 프로토콜을 사용하는 [아마존의 SES](https://aws.amazon.com/ko/ses/)나 [SendGrid](https://sendgrid.com/) 서비스들도 있다는 것을 알게 됐습니다.

메일 서버 구현의 궁극적인 목표도 결국 **메일 서버의 동작 방식과 메일을 전송하는데 드는 비용을 이해하고 해당 작업들을 처리해 보며 학습 효과를 보는 것**이었으므로 저희 메일 서버는 마치 SES와 같은 서비스처럼 http로 메일 전송 요청을 받으면 저희 메일 서버에선 [nodemailer](https://nodemailer.com/about/)를 이용해 타사의 이메일 서버에 smtp 요청을 하고, 타사의 smtp 서버를 이용해 목표 도메인으로 메일을 전송해 주는 식으로 구현을 하기로 했습니다. 그리고 그 메일 서버 안에서 여러 이메일 전송 요청을 하는데 드는 시간을 직접 줄여보는 방식으로 방향을 잡았습니다.

<p align="center"><img width="743" alt="http-메일서버" src="https://user-images.githubusercontent.com/98013867/227774454-179ce6b2-d06e-4875-9a91-458c651da62d.jpeg"></p>

<br>

### 3) 메일 서버 구현 결과

메일 서버에서 직접 테스트해보니 메일 하나를 보내는데 대략 2초 정도의 시간이 걸렸습니다. 만약 동시에 n 명에게 보낼 때 차례대로 처리를 한다면 2n 초가 걸려 엄청난 시간이 소모되니 이를 해결해야 했습니다. 저희 메일 서버에 사용하는 NodeJS는 단일 스레드로 구현돼있고 단일 스레드에서 여러 비동기를 가장 빠르게 처리하는 방법은 첫 번째 비동기 요청이 끝나는 것을 기다리지 않고 먼저 모든 비동기 요청을 하고 한 번에 요청 결과를 받는 것이었습니다.

이는 `Promise.all()` 혹은 `Promise.allSettled()` 를 이용하여 구현이 가능했습니다. 그중 저희 메일 서버에서는 여러 메일 전송 요청을 받았을 때 각 요청들에 대한 성공과 실패에 관한 정보를 보내줘야 하는데 하나의 요청만 실패해도 reject 결과를 받게 되는 `Promise.all()` 이 아닌 `Promise.allSettled()` 를 사용했습니다.

그 결과 한 번에 많은 메일 전송 요청을 받아도 메일 하나를 전송하는 시간과 비슷한 시간이 걸리는 메일 서버를 구현할 수 있었습니다.

<br>

## 3. CDN 적용 및 CORS 문제 해결

### 1) CDN 사용 이유
뉴스레터 서비스들을 보면 서비스 이용자가 구독자를 직접 추가할 수도 있지만, 해당 서비스를 사용하는 홈페이지에서 구독자가 직접 구독을 신청하는 경우가 대부분입니다. 이를 구현하기 위해 서비스 이용자가 자신의 홈페이지에 쉽게 구독 폼을 추가할 수 있도록 해야 했고 해당 기능은 CDN 을 통해 구현할 수 있었습니다. CDN은 무료이며 한국 기준 9위로 속도도 빠른 편이고 github 레포를 이용해 쉽게 사용이 가능한 [jsDelivr](https://www.jsdelivr.com/)을 사용했습니다. 해당 서비스를 사용하여 서비스 홈페이지 발신자 탭에서 사용자에게 쉽게 cdn 코드를 제공하는 기능을 추가해 줬습니다. 이제 남은 것은 cors 문제를 해결하는 것이었습니다.

<br>

### 2) 무료 proxy를 이용한 CORS 문제 해결
저희 백엔드 서버는 클라이언트 origin만 요청을 허용하고 있었기 때문에 사용자가 cdn 코드를 사용하여 임의의 오리진에서 오는 요청은 당연히 cors 에러가 날수밖에 없었습니다. 그러나 이를 해결하기 위해 모든 origin의 요청을 허용해 주면 cors 정책의 의미가 퇴색된다 느꼈습니다. 결국 서버 자체에선 어디서 들어올지 모르는 오리진에 대처할 수 없으니 클라이언트에서 해결해야 하는 문제라 생각했고 cors 에러를 우회할 수 있도록 프록시 서버에 대한 조사를 했고, [cors.sh](https://cors.sh/)라는 서비스를 이용해서 해결할 수 있었습니다.

<br>

### 3) 무료 proxy의 문제점 및 대안
그런데 문득 **무료 proxy 서비스를 이용하는 것이 정말 괜찮을까** 생각이 들어 다시 조사를 시작했습니다. 그 결과 무료 proxy 서비스의 보안 문제, 속도, 횟수 제한뿐만 아니라 근본적으로 우리 서비스의 요청이 다른 서버에 의존하게 되는 치명적인 문제가 있다는 걸 알게 됐습니다. 이건 cors 에러에 대한 올바른 해결책이 아니라 생각했습니다. 그래서 조금 번거롭더라도 서비스 이용자에게 cdn 코드를 넣을 홈페이지의 오리진을 입력받아 백엔드에서 그때그때 헤더에 해당 오리진을 등록해서 응답을 보내는 식으로 해결을 해야겠다 생각했습니다.

기존에 구현해놓은 구독자 추가 API는 서비스 사용자가 로그인하면 서버에서 제공하는 세션 토큰을 기반으로 validate를 한 후 구독자를 추가해 주는 방식이었습니다. 그런데 cdn으로 인한 외부 구독자 추가 요청에 이 세션 토큰을 전달할 방법이 없어 해당 API를 사용하는 게 불가능했습니다. 그래서 외부 구독자 추가 API를 따로 만들어 줬고 CDN 코드를 제공할 때 라우터의 매개변수로 전달한 `access_token` 을 통해 validation을 하도록 했습니다. 그렇게 `access_token` 이 적합하면 응답 헤더에 유저에게 받은 오리진을 넣어주는 식으로 cors 문제를 해결하고자 했습니다. 그러나 해당 방식으로 기능을 구현했는데도 여전히 cors 에러가 발생했습니다.

<br>

### 4) CORS DEEP DIVE

원인을 찾아보니 preflight라고 본 요청을 보내기 전 `OPTIONS` 메서드를 통해 먼저 서버가 잘못된 요청에 대한 대비가 되어있는지 확인하는 요청이 있었고, 해당 요청에 대한 오리진 설정을 없어 생긴 문제였습니다.

그래서 기존과 같이 응답 헤더에 `OPTIONS` 메서드에 대한 오리진을 등록해 주는 식으로 해결하려 했습니다. 그런데 여전히 cors 문제가 생겨 콘솔을 찍어보니 preflight 요청이 응답 헤더에 오리진을 등록해 주는 뒤쪽 미들웨어까지 넘어가지 않고 있었습니다. 이에 대해 조사를 해봤고 preflight 요청은 DB의 데이터를 보호하기 위해 서버 앞쪽에서 대비가 안 되어있다면 요청이 서버 뒤쪽으로 아예 넘어가지 않는다는 것을 알게 됐습니다.

이를 해결하기 위해 먼저 서버 앞쪽에 `OPTIONS` 요청에 대한 오리진은 모두 열어뒀습니다. 그리고 서버 뒤쪽에 본 요청인 `POST` 요청이 들어왔을 때 DB에 접근 전에 해당 요청 오리진이 화이트리스트에 등록된 오리진이 맞는지 확인하는 로직을 추가했습니다. 그 결과 cors 에러도 해결하고 잘못된 `POST` 요청이 들어올 때 DB가 의도치 않게 변경되는 것에 대한 대비까지 할 수 있었습니다.

<br>
<br>

# 🗓 Schedule

### 프로젝트 기간 : 2023.01.30(월) ~ 2023.03.10(금) / 6주 / 하루 평균 8시간
<details>
<summary>1 ~ 2 주차 : 기획 및 설계</summary>

- 아이디어 수집
- 기술 스택 선정
- Git 작업 플로우 결정
- 코드 컨벤션, 커밋 룰 등 팀 협업 규칙 정립
- Figma를 사용한 Mockup 제작
- MongoDb를 이용한 DB Schema 설계
- Notion을 이용한 칸반 작성
</details>
<details>
<summary>3 ~ 6 주차 : 기능 개발 및 발표</summary>

- 웹 사이트 구현
- 백엔드 서버 구현
- 메일 서버 구현
- cdn 추가
- 전체적인 리팩토링 및 버그 수정
- 테스트 코드 일부 작성
- 팀 프로젝트 발표 준비 및 발표
- 리드미 작성
- 배포
</details>

<br>
<br>

# 🛠 Tech Stacks

### Frontend(web)
- React
- React Router
- Styled Components
- Recoil
- Immer
- React Query
- ESLint

### Backend(server / mail server / cdn)
- Node.js
- Express
- Passport
- Nodemailer
- MongoDB Atlas / Mongoose
- ESLint
- jsDeliver

<br>
<br>

# 🔗 Repository Link
* [Backend Server](https://github.com/ez-mail/ez-mail-server)
* [Mail Server](https://github.com/ez-mail/ez-mail-mail-server)
* [CDN](https://github.com/ez-mail/ez-mail-cdn)

<br>
<br>

# 🧑‍💻 Member
- [길지문](https://github.com/roadzmoon76) : roadzmoon76@gmail.com
- [이정진](https://github.com/pinomad) : roptimizer@gmail.com
