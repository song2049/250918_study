// "반환"값

// 근데? 사실 반환하지 않고 함수 내에서 처리하면 되잖아?

function calculator(type, first, second) {
    switch (type) {
        case "add":
            return first + second;
        case "minus":
            return first - second;
        case "divide":
            return first / second;
        case "remain":
            return first % second;
        default:
            break;
    }
}

const result = calculator("add", 1, 5);
console.log(result);
