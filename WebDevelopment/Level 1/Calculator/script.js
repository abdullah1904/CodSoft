var buttons = document.querySelectorAll(".button");
var show = document.querySelector(".display");
var str = "";
for(let button of buttons){
    button.addEventListener("click",()=>{
        if(button.innerHTML === "="){
            str = eval(str);
            show.value = str;
        }
        else if(button.innerHTML === "X"){
            str += "*";
            show.value += button.innerHTML;
        }
        else if(button.innerHTML === "C"){
            str = "";
            show.value = "";
        }
        else if(button.innerHTML === "DEL"){
            str = str.slice(0,-1);
            show.value = str;
        }
        else{
            str += button.innerHTML;
            show.value += button.innerHTML;
        }
        console.log(str);
    });
}