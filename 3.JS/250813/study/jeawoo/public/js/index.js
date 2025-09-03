let HTML = 55
let CSS = 55
let JavaScript = 55
let result = (HTML + CSS + JavaScript)/3

if (90 <= result) {
    console.log("평균 :" + result + "점," + "등급: A");
} else if (240 <= HTML + CSS + JavaScript) {
    console.log("평균 :" + result+ "점," + "등급: B");
} else if (210 <= HTML + CSS + JavaScript) {
    console.log("평균 :" + result+ "점," + "등급: C");
} else if (180 <= HTML + CSS + JavaScript) {
    console.log("평균 :" + result+ "점," + "등급: D");
} else {
    console.log("평균 :" + result + "등급: F");
}