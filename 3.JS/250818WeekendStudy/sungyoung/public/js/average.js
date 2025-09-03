// 매개변수의 이름을 명확하게 할 것
function average (test1, test2, test3) {
    const totalTest = (test1 + test2 + test3) /3;
    if (totalTest >= 90) {
    alert ("평균" + totalTest + "점," + "등급: A");
        } else if (totalTest >= 80) {
    alert ("평균" + totalTest + "점," + "등급: B");
        } else if (totalTest >= 70) {
    alert ("평균" + totalTest + "점," + "등급: C");
        } else if (totalTest >= 60) {
    alert ("평균" + totalTest + "점," + "등급: D");
        } else {
    alert ("평균" + totalTest + "점," + "등급: F");
    }
}