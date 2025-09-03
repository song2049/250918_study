let plus = 59;

if (plus >= 90) {
    console.log(plus);
    console.log("평균", plus , "점," , "등급: A");
} else if (plus >= 80) {
    console.log("평균", plus , "점," , "등급: B");
} else if (plus >= 70) {
    console.log("평균", plus , "점," , "등급: C");
} else if (plus >= 60) {
    console.log("평균", plus , "점," , "등급: D");
} else {
    if(plus >= 59){
        console.log("아직 희망 있음.");
    } else if (plus >= 49) {
        console.log("노력 존나 해야됌");
    } else if (plus <= 39) {
        console.log("가망 없음");
    }
} 