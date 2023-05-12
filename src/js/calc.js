const btnCalc = document.querySelectorAll("#btn-calc");
const valueCalc = document.getElementById("value-calc");
const deleteValue = document.getElementById("btn-del");
const btnSumit = document.getElementById("btn-submit");
const btnClear = document.getElementById("btn-clear");
const rangeTheme = document.getElementById("range-theme");
const cssPath = document.getElementById("style");

const contentValueBtns = [];

let result = null;

/*---Add events to the buttons and get the value of these to add them in array---*/

btnCalc.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        contentValueBtns.push(e.target.innerHTML);
        valueCalc.innerHTML += contentValueBtns[contentValueBtns.length - 1];
    });

});

deleteValue.addEventListener("click", () => {
    contentValueBtns.pop();
    valueCalc.innerHTML = contentValueBtns.join("");
});

btnSumit.addEventListener("click", () => {
    calculateValues();
});

/*---Calculate total values---*/

const calculateValues = () => {

    if (contentValueBtns.includes("+") || contentValueBtns.includes("-") || contentValueBtns.includes("*") || contentValueBtns.includes("/")) {

        const expression = contentValueBtns.join("");
        result = eval(expression);

        valueCalc.innerHTML = result;

    } else {
        return;
    }
};

/*---Clear calculator---*/

btnClear.addEventListener("click", () => {
    contentValueBtns.length = 0;
    valueCalc.innerHTML = contentValueBtns;
});

/*---Change theme---*/

rangeTheme.addEventListener("change", () => {

    if (rangeTheme.value == 1) {
        cssPath.href = ("../../../src/assets/styles/themes/app.scss");
    } else if (rangeTheme.value == 2) {
        cssPath.href = ("../../../src/assets/styles/themes/appLight.scss");
    } else if (rangeTheme.value == 3) {
        cssPath.href = ("../../../src/assets/styles/themes/appDark.scss");
    } else {
        return;
    }

});


