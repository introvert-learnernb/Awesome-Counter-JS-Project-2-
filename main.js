//initializing the counter
let counter = 0;

//selecting the buttons and the value

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
// console.log(btns);

//looping over each btn to add the eventlistener...
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(item);
    let styles = btn.classList;
    // console.log(styles);
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    colorChanger();
    value.textContent = counter;
  });
});

//for changing color when value is less than 0 or grater than 0
function colorChanger(){
    if(counter < 0){
        value.style.color = "#e3242b";
    }else if(counter > 0){
        value.style.color = "#08f26e";
    }else{
        value.style.color = "#f1f1f1";
    }
}