const btn = document.querySelectorAll("button");
const input = document.getElementById("input-calculator");
let string = "";
let arr = Array.from(btn);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }else if(e.target.innerHTML == "Del"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})