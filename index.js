// vaild email input
// if not true show error msg change input outline color 
// 

const form  = document.querySelector(`.form`);
const errorMsg = document.querySelector(`.error-msg`);
const formInput = document.querySelector(`#email`);
form.addEventListener(`submit`,checkInput);

function checkInput(e){

    e.preventDefault();

    const submittedEmail = email.value;


    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      if(validateEmail(submittedEmail)){
        console.log(`vaild email`)
        errorMsg.classList.add(`off`);
         formInput.style.border = `1px solid hsl(223, 87%, 63%)`;
      }else{
        console.log(`invaild email`)
        errorMsg.classList.remove(`off`);
        formInput.style.border = `1px solid hsl(354, 100%, 66%)`;
      }
}

