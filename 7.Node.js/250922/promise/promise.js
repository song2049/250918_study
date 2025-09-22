const 아반떼 = () => {
    //new promise(resolve, reject);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("아반떼 go!");
            //reject("실패");
        }, 3000)
    })
};

const 소나타 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("소나타 go");
        }, 2000)
    })
};

const 제네시스 = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("제네시스 go")
            }, 3000)
        } catch(error) {
            reject(error);
        }
    })
};

아반떼()
    .then((data) => {
        console.log(data);        
        return 제네시스();
    }).then((data) => {
        console.log(data);
        return 소나타();
    }).then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);        
    })