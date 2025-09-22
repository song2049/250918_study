const 아반떼 = () => {
    //new promise(resolve, reject);
    return new Promise((resoleve, reject) => {
        setTimeout(() => {
            resoleve("아반떼 go");
            //reject("실패");
        }, 3000)
    })
};

const 소나타 = () => {
    return new Promise((resoleve, reject) => {
        setTimeout(() => {
            resoleve("소나타 go")
        }, 2000)
    })
};

const 제네시스 = () => {
    return new Promise((resoleve, reject) => {
        try {
            setTimeout(() => {
                resoleve("제네시스 good")
            }, 3000)
        } catch (error) {
            reject(error);
        }
    })
};

const asyncCar = async() => {
    const 아반1 = await 아반떼();
    console.log(아반1);
    const 제네1 = await 제네시스();
    console.log(제네1);
    const 소나1 = await 소나타();
    console.log(소나1);
}

asyncCar();