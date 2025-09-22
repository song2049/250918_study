const 아반떼 = (callback) => {
    setTimeout(() => {
        console.log("아반떼 go");
        callback();
    }, 3000)
};

const 소나타 = (callback) => {
    setTimeout(() => {
        console.log("소나타 go");
        callback();          
    }, 2000)
};

const 제네시스 = (callback) => {
    setTimeout(() => {
        console.log("제네시스 good");
        callback();
    }, 1000)
};

//아반떼 ([제네시스함수])
아반떼(() => {
    제네시스(() => {
        소나타(() => {
            제네시스(() => {
                아반떼(() => {
                    아반떼(() => {
                        소나타(() => {
                            console.log("end");
                        })
                    })
                })
            })
        })
    })
});

/*
    1. 아반떼 찍고
    2. 제네시스 찍고
    3. 소나타 찍고
    4. 제네시스 찍고
    5. 아반떼 찍고
    6. 아반떼 찍고
    7. 소나타 찍고

    제네스시 good
    소나타 go
    아반떼 go
*/