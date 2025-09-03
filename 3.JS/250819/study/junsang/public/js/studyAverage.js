function studyAverage(htmlS, cssS, jsS) {
    const totalTest = (htmlS + cssS + jsS) / 3;
    if (totalTest >= 90) {
        return { totalTest, grade: "A" };
    } else if (totalTest >= 80) {
        return { totalTest, grade: "B" };
    } else if (totalTest >= 70) {
        return { totalTest, grade: "C" };
    } else if (totalTest >= 60) {
        return { totalTest, grade: "D" };
    } else {
        return { totalTest, grade: "F" };
    }
}