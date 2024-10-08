const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const submit = document.getElementById("btn")


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    valdiateInputs();
})




const valdiateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue =email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();

    if (usernameValue === ''){
        setError(username,"Username is required");
    }
    else{
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email,"Please Enter an valid Email address")
    }else if( !isValidEmail(emailValue) ){
        setError(email,"Provide a valid Email address")
    }else{
        setSuccess(email);
    }



    if (passwordValue === '') {
        setError(password,"Password is required");
    }
    else if(passwordValue.length < 8)
        {
            setError(password,"Password must be atleast 8 charaters")
    }else{
        setSuccess(password);
    }

    if (confirmValue === '') {
        setError(confirm,"Please Confirm your password")
    }else if(confirmValue !== passwordValue){
        setError(confirm,"Password Does not match")
    }else{
        setSuccess(confirm);
    }
}

const setError=(element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}