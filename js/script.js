  const calculatorReferenceField = document.querySelector("#input");
  const btns = document.querySelectorAll(".btn");
  const btnClear = document.querySelector(".btn-clear");
  const btnEqual = document.querySelector("#calc-equal");
  const btnErase = document.querySelector('.calc-erase');
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculatorReferenceField.value += btn.textContent;
    });
  });
  btnErase.addEventListener('click', () => {
    let result = calculatorReferenceField.value;
    calculatorReferenceField.value = result.substring(0, result.length-1);
})
  btnClear.addEventListener("click", () => {
    calculatorReferenceField.value = '';
  });
  btnEqual.addEventListener("click", () => {
    let result = calculatorReferenceField.value;
    if(result){
      calculatorReferenceField.value = eval(result);
    }
  });


