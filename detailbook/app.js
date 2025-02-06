const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
let success=true



form.addEventListener('submit',(e)=>{
   if(ValidateInputs()){
    e.preventDefault();
   }

})

function ValidateInputs() {
    const usernameVal = username.Value
    const emailVal = email.Value
    const passwordVal = password.Value
    const cpasswordVal = cpassword.Value


    if(usernameVal===''){
        success=false
        setError(username,'username is required')
    }
    else{
    setSuccess(username)
    }

    if(emailVal===''){
        success=false
        setError(email,'Email is required')
    }
    else if (!ValidateEmail(emailVal)){
        success=false
        setError(email,'please enter valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===''){
        success=false
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
        success=false
         setError(password,'password must be atleast 8 characters long')
    }
    else{
        setSuccess(password )

    }
    if (cpasswordVal===''){
        success=false
        setError(cpassword,'confirm password is required')

    }
    else if(cpasswordVal!==passwordVal){
        success=false
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success

}

function setError(element,message){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error')
  

    errorElement.innertext=message;
    inputgroup.classLisit.add('error')
    inputgroup.classLisit.remove('success')
}

function setSuccess(element){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error')
  

    errorElement.innertext='';
    inputgroup.classLisit.add('success')
    inputgroup.classLisit.remove('error')
}

const ValidateEmail =(email)=>{
    return String(email)
    .toLowerCase()
    .match(
           /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};