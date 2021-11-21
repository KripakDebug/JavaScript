function calc() {
  const input = document.getElementById("input");
  const btns = document.querySelectorAll(".btn");
  const btnClear = document.querySelector(".btn-js");
  const btnEqual = document.getElementById("num-equal");
  const btnBack = document.querySelector('.back');
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      input.value += btn.textContent;
    });
  });
btnBack.addEventListener('click', () => {
    let result = input.value;
    input.value = result.substring(0, result.length-1);
})
  btnClear.addEventListener("click", () => {
   input.value = ''
  });
  btnEqual.addEventListener("click", () => {
    let result = input.value;
    if(result){
        input.value = eval(result);
    }
  });
}
calc();
