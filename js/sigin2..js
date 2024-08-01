const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phonenumber = document.getElementById('phonenumber');
const country = document.getElementById('country');
const username= document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit' ,e=> {
    e.preventDefault();

    validateInput();
});
    
const setError =(element , message) =>{
    const signboxform = element.parentElement;
    const errorDisplay = signuserform.queryseletor('.error'); 
 
    errorDisplay.innerText = message;
    signuserform.classList.add('error');
    signuserform.classList.remove('success');
}

const setSuccess =(element) =>{
    const signboxform = element.parentElement;
    const errorDisplay = signuserform.queryseletor('.error'); 
 
    errorDisplay.innerText ='';
    signboxform.classList.add('success');
    signboxform.classList.remove('error');
}


const isValidEmail = email => {
    const re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

const validateInput =() =>{

    const firstnameValue =firstname.value.trim();
    const lastnameValue =lastname.value.trim();
    const phonenumerValue =phonenumber.value.trim();
    const countryValue =country.value.trim();
    const usernameValue =username.value.trim();
    const emailValue =email.value.trim();
    const passwordValue =password.value.trim();

};

if(firstnameValue === ''){
    setError(firstname , 'firstname is requirred');
} else{
    setSuccess(firstname);
}

if(lastnameValue === ''){
    setError(lastname , 'lastname is requirred');
} else{
    setSuccess(lastname);
}

if(phonenumberValue === ''){
    setError(phonenumber , 'phonenumber is requirred');
} else{
    setSuccess(phonenumber);
}

if(countryValue === ''){
    setError(country , 'country is requirred');
} else{
    setSuccess(country);
}

if(usernameValue === ''){
    setError(username , 'username is requirred');
} else{
    setSuccess(username);
}

if(emailValue === ''){
    setError(email, 'Email is requirred');
} else if(!isValidEmail(emailValue)){
    setError(email,'provide a valid email address');
}else{
        setSuccess(email);
}

if(passwordValue === ''){
    setError(password , 'password is requirred');
} else if (passwordValue.length <8){
    setError(password , 'password must be at least 8 character.')
} else{
    setSuccess(password);
}
    
