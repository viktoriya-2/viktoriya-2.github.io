function biggerButton(){ 
    //alert("Hello World");
    document.getElementById("input").style.fontSize="24pt";
}

function fancyRadio(){
    document.getElementById("input").style.fontWeight="Bold";
    document.getElementById("input").style.color="Blue";
    document.getElementById("input").style.textDecoration="Underline"
}
function boringRadio(){
    document.getElementById("input").style.fontWeight="normal";
    document.getElementById("input").style.color="Black";
    document.getElementById("input").style.textDecoration="None"
    document.getElementById("input").style.textTransform="lowercase";
}
function mooButton(){
    document.getElementById("input").style.textTransform="uppercase";  
    const newinput = document.getElementById("input");
    var str = newinput.value;
    var parts = str.split(" ");

    for(let i = 0; i < parts.length ; i++){
        parts[i] += "Moo";
    }
    str = parts.join("_");
    newinput.value = str;
}