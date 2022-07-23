
const cardInput = document.querySelector('.card-body');
const userInput = document.getElementById('user-input');
const favoriteColor = document.getElementById('favorite-color');
const userName = document.getElementById('user-name');
const userAge = document.getElementById('user-age');
const userSelect = document.getElementById('user-select');
const female = document.getElementById('female-gender');
const male = document.getElementById('male-gender');
const errorName = document.querySelector('.error-name');
const errorAge = document.querySelector('.error-age');
const btn = document.getElementById('btn');

    
    function checkValidationAgeInput (value) {
        let isValidate;
        
        if(!value || value <= 0){
           errorAge.innerHTML = 'your Age need to be a valid number 1️⃣2️⃣3️⃣'
           isValidate = false;        
        } else {
            errorAge.innerHTML = "";
            isValidate = true;
        }

        return isValidate;
    }    

    function checkValidationNameInput (value) {
        let isValid;
        if(value.length < 2 || value == ""){
            errorName.innerHTML = 'please enter valid name 😤'
            isValid = false;
            
        } else {
            errorName.innerHTML = "";
            isValid = true;
        
        }
        return isValid;

    }

// function getValueOfGender() {

//     if (female.checked){
//         return female.value;
//     } else if (male.checked){
//         return male.value;
//     } else {
//         return 'you dont choose any gender🤐'
//     }
//        // console.log(radio.value);
//         //female.innerHTML = radio.value;
//         //male.innerHTML = radio.value;
//     }


function getValue(radio){
console.log(radio.value);
//return radio;
}

function addCardInfo () {
    userInput.innerHTML += `<div class="card" style="width: 18rem; background-color: ${favoriteColor.value};">
       <div class="card-body">
           <h5 class="card-title">Your details:</h5>
           <p class="card-text">your name: ${userName.value}</p>
           <p class="card-text">your age: ${userAge.value}</p>
           <p class="card-text">favorite color: ${favoriteColor.value}</p>
           <p class="card-text">your country: ${userSelect.value}</p>
           <p class="card-text">your gender: ${resultOfTypeGender()}</p>
       </div>
   </div>`
    
 }


function clearDateInfo () {
    userName.value = "";
    userSelect.value = "";
    userAge.value = "";
    favoriteColor.value = "#000000";
    female.checked = false;
    male.checked = false;
   
}
function onSubmit() {
    if(checkValidationNameInput(userName.value) 
        && checkValidationAgeInput(userAge.value)){
        addCardInfo();
        clearDateInfo();
        resultOfTypeGender();
    }

}

function resultOfTypeGender () {
     //const output = document.getElementById('outputOfGender');
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    //const btn = document.querySelector('#btn');
         let selectGender;
    for (const genderRadio of genderRadios) {
        if (genderRadio.checked) {
            selectGender = genderRadio.value;
            console.log(selectGender);
            break;
        }
    }

    const valueGenderInput = selectGender ?  `${selectGender}`: `you dont choose any gender🤐`
    return valueGenderInput;

     
} 

function checkInputText(){
    userName.value.length < 2 ? errorName.innerHTML = `please insert logical name 😡` :  errorName.innerHTML = " ";
}

function checkInputAge(){
    userAge.value <= 0 ? errorAge.innerHTML = `This is not an acceptable age 😱` : errorAge.innerHTML = " ";
}

console.log(Boolean(0));
console.log(Boolean(null));

console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

