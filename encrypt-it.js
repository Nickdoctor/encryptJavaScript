/*
 * Starter file 
 * Author: Nicolas Gugliemo
 * Date: 03/27/2024
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
   * Sets up event liseners and handlers for when the user clicks on the buttons. 
   */
  function init() {
    const EncryptButton = document.getElementById('encrypt-it');
    const ResetButton = document.getElementById('reset');
    EncryptButton.addEventListener('click', handleClick);
    ResetButton.addEventListener('click',handleReset);
    console.log("Window Loaded!");
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

  }

  function handleClick () {
    const resultField = document.getElementById('result-text');
    const textField = document.getElementById('input-text');
    resultField.value = shiftCipher(textField.value);
    console.log("Button Clicked!"); //cipher
  }
  function handleReset () {
    const textField = document.getElementById('input-text');
    const resultField = document.getElementById('result-text');
    console.log("Reset Clicked!");
    textField.value = ''; 
    resultField.value = ''; //clear
  }

  /**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 2 letters,
 * and 'z' is shifted to 'b'  and 'y' is shifted to 'a',
 * (creating an alphabetical cycle).
 */
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'y') {
      result += 'a';
    } else if (text[i] == 'z') {
      result += 'b';
    }else { // letter is between 'a' and 'x'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 2);
      result += resultLetter;
    }
  }
  return result;
}

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).


})();
