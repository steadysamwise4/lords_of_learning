const multProblemsArr = [];
const formArr1 = [0,1,2,3,4,5,6,7,8,9,10];
const formArr2 = [1,2,3,4,5,6,7,8,9,10];

const fillMultProblemsArr = function (formArr1, formArr2) {

    for (let i=0;i<formArr1.length; i++) {
        for (let j=0;j<formArr2.length;j++) {
            const fact = formArr1[i] + " X " + formArr2[j] + " =";
            const solution = formArr1[i] * formArr2[j];
            const problemObj = {fact: fact, solution: solution}
            multProblemsArr.push(problemObj)
        }
    }
    console.log(multProblemsArr);

};


fillMultProblemsArr(formArr1, formArr2);