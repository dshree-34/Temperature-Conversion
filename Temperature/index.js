const textbox = document.getElementById("textbox");
const textbox2 = document.getElementById("textbox2");
const textbox3 = document.getElementById("textbox3");
const result = document.getElementById("result");

let temp;

function convert(){
    if(textbox2.checked){
       
            temp= Number(textbox.value);
            temp= temp * 9 /5 +32;
            result.textContent = temp.toFixed(1) + "°F";
    

    }
    else if(textbox3.checked){
        temp= Number(textbox.value);
        temp= (temp-31) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";




    }
    else{
        result.textContent = "Select a unit";
    }
}
