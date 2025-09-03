function studyAverage(html, css, js) {
    const totalTest = (html + css + js) / 3;
    if (totalTest >= 90) {
        return { totalTest: totalTest, grade: "A" };
    } else if (totalTest >= 80) {
        return { totalTest: totalTest, grade: "B" };
    } else if (totalTest >= 70) {
        return { totalTest: totalTest, grade: "C" };
    } else if (totalTest >= 60) {
        return { totalTest: totalTest, grade: "D" };
    } else {
        return { totalTest: totalTest, grade: "F" };
    }
}