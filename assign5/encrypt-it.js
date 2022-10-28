/*
 * Starter file 
 */
(function() {
  "use strict";
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
   
    let encryptbutton = document.querySelector("#encrypt-it");
    encryptbutton.addEventListener("click", handleClick);

    let resetbutton = document.querySelector("#reset");
    resetbutton.addEventListener("click", resetField);

    let textSize = document.querySelector("#text-size");
    textSize.addEventListener("click", handleRadio);

    let allCaps = document.querySelector("#all-caps");
    allCaps.addEventListener("click", printAllCaps);


    // // if(document.querySelector('input[name="text-size"]')){
    // //   document.querySelector('input[name="text-size"]').addEventListener("click", function(){
    // //       var item = document.querySelector('input[name="text-size"]').value;
    // //       setFontSize(item);
    // //       handleRadio();
    // //   });
    // // }
    // let btn = document.querySelector("#text-size");        
    // //let radioButtons = document.querySelectorAll('input[name="text-size"]');
    // btn.addEventListener("click", handleRadio);
    //     // let selectedSize;
    //     // for (const radioButton of radioButtons) {
    //     //     if (radioButton.checked) {
    //     //         selectedSize = radioButton.value;
    //     //         break;
    //     //     }
    //     // }
    //     // // show the output:
    //     // output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
    


  }

  function handleClick(){
    console.log("Button Clicked!");
    var text = document.getElementById("input-text");
    shiftCipher(text);
  }
  function handleRadio(){
    console.log("Radio Clicked!");
    var size = document.getElementByValue("text-size");
    setFontSize(size);
  }

  function shiftCipher(text) {
    text= text.value.toLowerCase();
    let result = "";

    for(let i = 0; i < text.length; i++){
      if (text[i] < 'a' || text[i] > 'z'){
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter +1);
        result += resultLetter;
      }
    }
    document.getElementById("result").innerHTML = result;
  }

  // function setFontSize(size){
  //   if(size == "12pt"){
  //     document.getElementById("result").style.fontSize = "12px";}
  //   else if(size == "24pt"){
  //     document.getElementById("result").style.fontSize = "24px";}
  //   console.log("Set font size to "+ num);
  // }

  // function printAllCaps(){
  //   var text = document.getElementById("input-text");
  
  //   // if(document.getElementById("all-caps").checked){
  //   //   text = text.toUpperCase();
  //   // }
  //   text = text.toUpperCase;
  //   document.getElementById("result").textContent = text;
  //   console.log(`Encrypted Text: ${text}`);
  // }

  function resetField(){
    document.getElementById("input-text").value = '';
    //document.getElementById("result").value = '';
  }

})();
