
const form= document.getElementById("form");
const username= document.getElementById("uname");
const email= document.getElementById("email");
const password= document.getElementById("pswd");
const confpas= document.getElementById("cpswd");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get values from the inputs

   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passValue = password.value.trim();
   const cpassValue = confpas.value.trim();

   //for username
   if(usernameValue == ""){
     setErrorFor(username,"user name cannot be blank");
   } else {
     setSuccessFor(username);
   }

  // for email
  function validateEmail(email) 
    {
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(email);
    }
    if(validateEmail(emailValue)){
      setSuccessFor(email);
    }else{
      setErrorFor(email," not a valid email");
    }

  // for password
  if(passValue == "" || passValue.length<8){
    setErrorFor(password," password must be atleast 8 charecters");
  } else {
    setSuccessFor(password);
  }

  // for confirm password
  if(cpassValue !== passValue){
    setErrorFor(confpas," not same as previous one");
  } else {
    setSuccessFor(confpas);
  }
}


function setErrorFor(input,message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");

    //add error msg inside small
    small.innerText = message;

    // add error class
    formcontrol.className = "form-control error";
}

function setSuccessFor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}

