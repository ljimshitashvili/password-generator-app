const generateButton = document.querySelector('#generate');
const output = document.querySelector('#output');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const slider = document.querySelector('.range');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const level = document.querySelector('#level');
const error = document.querySelector('.error');
const letterAmount = document.querySelector('#letter-amount');

// Changes the color of the range input background.
slider.oninput = function() {
    const value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, #18171F 100%)';
}

// Outputs the value of range input.
slider.addEventListener('input', () => {
    output.textContent = "";
    letterAmount.textContent = slider.value;
});


let alphabet = "abcdefghijklmnopqrstuvwxyz";
let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+=[]{}:;|?>.<,";
let total = "";
let counter = 0;


// This function unions the string that are checked.
function checkBoxes(){
    errorCheck();
    if(lower.checked){
        total += alphabet;
        counter++;
    }
    if(upper.checked){
        total += ALPHABET;
        counter++;
    }
    if(number.checked){
        total += numbers;
        counter++;
    }
    if(symbol.checked){
        total += symbols;
        counter++;
    }
}

// This function checks if at least one checkbox input is checked.
function errorCheck(){
    if(!upper.checked && !lower.checked && !number.checked && !symbol.checked){
        error.style.display = "flex";
    }else{
        error.style.display = "none";
    }
}

//This function finds out how many checkbox inputs are checked and determines strength of the password.
function strengthOfPass(){
    if(counter === 1){
        box1.classList.add('too-weak');
    }else if(counter === 2){
        box1.classList.add('weak');
        box2.classList.add('weak');
    }else if(counter === 3){
        box1.classList.add('medium');
        box2.classList.add('medium');
        box3.classList.add('medium');
    }else if(counter === 4){
        box1.classList.add('strong');
        box2.classList.add('strong');
        box3.classList.add('strong');
        box4.classList.add('strong');
    }
}

//This function restarts the design of strength boxes.
function resetBox(){
    box1.classList.remove('too-weak');
    box1.classList.remove('weak');
    box2.classList.remove('weak');
    box1.classList.remove('medium');
    box2.classList.remove('medium');
    box3.classList.remove('medium');
    box1.classList.remove('strong');
    box2.classList.remove('strong');
    box3.classList.remove('strong');
    box4.classList.remove('strong');
}


// This is the engine of my code.
generateButton.addEventListener('click', () => {
    output.textContent = "";
    total = "";
    counter = 0;
    
    resetBox();
    checkBoxes();
    strengthOfPass();
    for(let i = 0; i < slider.value; i++){
        const randomIndex = Math.floor(Math.random() * total.length);
        const randomLetter = total.charAt(randomIndex);
        output.textContent += randomLetter;
    }
    
});