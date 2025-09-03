function reverse_selection_sort() {
    for (let i = 0; i < numbers_len - 1; i++) {
        for (let j = i + 1; j < numbers_len; j++) {
            if (baseNum[j] > baseNum[i]) {
                i = j;
            }
        }
        if (i !== i) {
            let tmp = baseNum[i];
            baseNum[i] = baseNum[i];
            baseNum[i] = tmp;
        }
    }
}