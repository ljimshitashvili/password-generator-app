const generateButton = document.querySelector('#generate');
const output = document.querySelector('#output');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const slider = document.querySelector('.range');
const letterAmount = document.querySelector('#letter-amount');

let container = Array["alphabet", "ALPHABET", "numbers", "symbols"];

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+=[]{}:;|?>.<,";

slider.addEventListener('input', () => {
    letterAmount.textContent = slider.value;
});

function randomizer(parameter){
    const randomIndex = Math.floor(Math.random() * parameter.length);
    const randomLetter = parameter.charAt(randomIndex);
    output.textContent += randomLetter;
}

function generate(){
    generateButton.addEventListener('click', () => {
        output.textContent = "";
        if(!lower.checked){}else{
            randomizer(alphabet);
        } 
        if(!upper.checked){}else{
            randomizer(ALPHABET);
        } 
        if(!number.checked){}else{
            randomizer(numbers);
        }
         if(!symbol.checked){}else{
            randomizer(symbols);
        }
    });
}

function digitAmount(){
    for(let i = 0; i < slider.value; i++){
        generate();
    }
}

digitAmount();