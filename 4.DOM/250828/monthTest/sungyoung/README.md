## 제목, 내용 작성자 입력후 댓글을 작성하면 화면에 바로 보이는가?

10점

## 브라우저를 새로 열어도 이전에 작성한 댓글이 유지되는가?

10점

## 모든 댓글이 목록 형태로 잘 정리되어 출력되는가?

10점

## 댓글 제목을 클릭하면, 해당 댓글의 상세/수정 페이지로 잘 이동되는가?

10점

## 댓글을 수정한 후 저장하면, 수정된 내용이 목록에 잘 반영되는가?

10점

## ❌버튼을 누르면 해당 댓글이 삭제되고, 새로고침해도 삭제된 상태가 유지되는가?

10점

## 각 기능별로 HTML, JS, CSS 파일이 명확히 나뉘어 있는가?

10점

## 코드가 간결하고, 같은 기능이 반복되지 않도록 잘 정리되어 있는가?

정리 습관 살짝 부족

```css
#viewmain {
}
```

특정 페이지에 input이나 textArea가 모두 다 동일하게 작성된다면 아래와 같이 작성해도 상관은 없다

`public/css/list.css`

```css
input::placeholder {
  padding: 0 0 0 10px;
  color: gray;
}
textarea::placeholder {
  padding: 10px 0 0 10px;
  color: gray;
}
```

그러나! 모든 페이지를 기준으로 봤을 때, 일관성은 필요하다.

`public/css/update.css`

```css
#update-main > .update-input > input {
  margin: 5px 0;
  width: 1000px;
  height: 50px;
  border: 1px solid #708090;
  border-radius: 5px;
  text-align: center;
  background-color: #f8f8ff;
  outline: none;
}
#update-main > .update-input > textarea {
  margin: 5px 0;
  width: 1000px;
  height: 100px;
  border-radius: 5px;
  text-align: center;
  background-color: #f8f8ff;
  outline: none;
}
```

수정 페이지에서도 textArea나 input을 활용한다면, 둘 중 하나의 방법으로 적용하겠어.

1. 아예 싹 다 페이지마다 일관성을 갖춘다면 => common.css에서 미리 정의하는거야
2. 페이지마다 다 다르다면,

```css
textarea::placeholder {
  padding: 10px 0 0 10px;
  color: gray;
}
```

태그를 직접적으로 선택하는 태그 선택자를 활용하는 것은 좀 무리가 있다.
=> 협업할 때, 다른 사람들과 결과물을 합쳤을 때, css가 성영님걸로 적용될 수 있음.

`public/js/view.js`

```js
    }
    else {
        mycomment.innerHTML = '<p>해당 페이지를 찾을 수 없습니다.</p>'
        deleteUpdateBtn.innerHTML = " ";
}

}
```

들여쓰기....

### 파일의 제목과 파일 내부의 함수 이름은 동일하게 가져가기

```js
const updateComment = (e) => {
  e.preventDefault();
  const updateCheak = confirm("이 내용으로 수정 하시겠습니까?");
  if (!updateCheak) return;

  comments[index].title = titleUpdate.value;
  comments[index].userId = idUpdate.value;
  comments[index].content = contentUpdate.value;

  localStorage.setItem("comments", JSON.stringify(comments));
  window.location.href = "./list.html";
};

upDateInput.addEventListener("submit", updateComment);

const moveComment = () => {
  const moveChack = confirm(
    "현재 댓글 목록으로 가면 수정하신 내용은 사라집니다."
  );
  if (!moveChack) return;
  window.location.href = "./list.html";
};
```

지금 보는 위의 코드로 보았을 때, 이름이 buttonAction.js인데

내부에서는 moveComment 등등 다양한 함수의 이름이 일관되지 않음

또한! 동일한 함수의 이름이 둘 다 있어

`move.js`
`buttonAction.js`

정리만 한다면 더 좋을 것 같음

그 외에는 정갈하게 딱 정리되어 있음.

## 교강사 피드백

일단 마음에 드는 부분은

본인이 스스로 끝까지 책임진 흔적이 보임

- js/move.js
- js/buttonAction.js

맥락으로 봤을 때,

수정하고 `이동`한다

이런게 보여서 엉성하지만 너무 마음에 든다.

그리고 유일하게 선택 사항인데도 불구하고 상세 페이지, 수정 페이지 욕심을 냈다는게
참 좋음.
=> 내가 오전에 설명하고 안내한 화면을 유심히 좀 많이 들었을 것 같아.

## CSS를 통해 정렬, 여백, 폰트 등이 적용되어 보기 좋은 화면을 구성했는가?

화면상에서 디테일을 챙기는 부분

- 2번째 삭제하시겠습니까? => 사용자 편의성
- 상세 페이지에서 밑줄 부분
- 각 페이지마다 목록으로 이동할 수 있는 버튼 제공

등등

고민한 흔적은 보여서 너무 좋긴하나

디자인만 봤을 때는 부족한 점은 좀 많다.

사이 여백이 크거나, 버튼 사이의 간격 등등

### 교강사 질문: view.js로 봤을 때 대략적인 실행 컨텍스트가 몇 개?

교강사: 2개

하지만 메서드도 결국 함수의 호출이니

10개정도 되시겠다.

=> 그치만, 고민한다는 것 자체가 메서드도 객체에 존재하는 행동(함수)니까 그걸 고민한 것 같음
=> 정답이냐 아니냐가 문제가 아님. 이 정도면 만족

## 회고록

CR하는데 금방해야 하는데...

new Date 금방 추가하지 ㅋ

년도 월 일로 안나옴 ㅠ

그래서 split으로 만들고 콘솔 로그 찍었는데

August...어쩌구 나옴

다른 걸 찾아봤는데

getFullYear();

그러면 백틱을 이용해서 다 불러와영

getMonth();

8월이 아니라

7월달부터 가져오는데 0부터 계산하더라구요

- 1 해야겠다.

핵심: new Date()에서 오래 걸렸다 => 찾고 적용하는데에서 많이....힘들었다
