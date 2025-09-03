/* 과제: 숫자 배열을 오름차순으로 정렬해보자
- 목표
6개의 숫자가 들어 있는 배열을 **오름차순(작은 수 → 큰 수)**으로 정렬
자바스크립트 내장 정렬 메서드(`sort()`)는 사용하지 마세요.
- 조건
1. 배열에는 **숫자 6개**가 들어 있습니다.
   예: `const numbers = [22, 55, 66, 11, 44, 22];`
2. 정렬 방식은 다음과 같이 동작해야 합니다:
   - 첫 번째 요소(0번째)를 기준으로, **그 뒤에 있는 모든 요소와 비교**해서 더 작은 값이 있다면 자리를 바꾼다.
   - 두 번째 요소(1번째)를 기준으로, **그 뒤에 있는 요소들과 다시 비교**해서 필요한 경우 자리를 바꾼다.
   - 이런 식으로, 끝까지 비교하며 정렬이 이루어지도록 만든다.
- 제약 사항
* `Array.prototype.sort()`는 사용하지 마세요.
* 비교 연산자(`<`, `>`)와 변수 값을 바꾸는 **swap 로직**을 직접 작성해야 합니다.
* 단순한 정렬 알고리즘의 구조를 익히는 것이 목적입니다.
### 기대 결과 예시
```js
초기값: [22, 55, 66, 11, 44, 22]
출력: [11, 22, 22, 44, 55, 66]
```
length=6
1: 0,1 0,2 0,3 0,4 0,5
2: 1,2 1,3 1,4 1,5
3: 2,3 2,4 2,5
4: 3,4 3,5
5: 4,5
min
tmp

*/

//초기값
const numbers = [22, 55, 66, 11, 44, 22];

//반복조건
let numbers_len = numbers.length;

//초기값 출력
console.log(`초기값: [${numbers}]`);

//선택정렬(오름차순)
for (let i = 0; i < numbers_len - 1; i++) {

    //현재 인덱스를 최소값 인덱스로 설정
    let numbers_min = i;

    //뒤에 있는 모든 요소와 비교
    for (let j = i + 1; j < numbers_len; j++) {
        //console.log(i,j);

        //현재 최소값보다 더 작은 값이 있다면, 인덱스를 갱신
        if (numbers[j] < numbers[numbers_min]) {
            numbers_min = j;
        }
    }
    //console.log(numbers[numbers_min]);

    //swap 로직
    if (numbers_min !== i) {
        let tmp = numbers[i];
        numbers[i] = numbers[numbers_min];
        numbers[numbers_min] = tmp;
    }
}
//결과
console.log(`출력: [${numbers}]`);