function selection_sort() {    
    for (let i = 0; i < numbers_len - 1; i++) {
        let baseNum_min = i;
        for (let j = i + 1; j < numbers_len; j++) {
            if (baseNum[j] < baseNum[baseNum_min]) {
                baseNum_min = j;
            }
        }
        if (baseNum_min !== i) {
            let tmp = baseNum[i];
            baseNum[i] = baseNum[baseNum_min];
            baseNum[baseNum_min] = tmp;
        }
    }
}