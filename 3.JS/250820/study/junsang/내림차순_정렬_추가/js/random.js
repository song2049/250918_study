function selectarray(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

function randomarray(array) {
    while (true) {
        const randomnumber = Math.floor(Math.random() * 45) + 1;
        const result = selectarray(array, randomnumber);
        if (result === -1) array.push(randomnumber);
        if (array.length === 6) break;
    }
}