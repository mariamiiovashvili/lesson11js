document.getElementById('registration').addEventListener('submit' , function(event){

      event.preventDefault();

      let errors = {
        
      };

      let form = event.target;
    //   username
    let username = form.querySelector('[name = "username"]').value
     if (username.length < 4 ){
        errors.username = 'min 4 letters';
     }
     if (username == ' '){
         errors.username = 'please enter your username';
     }

     let email = form.querySelector('[name = "email"]').value
          
         if (email == ' '){
             errors.email = 'please enter your Email';
     }

     let password = form.querySelector('[name = "password"]').value
     let password2 = form.querySelector('[name = "password2"]').value
     if (password.length < 5){
         errors.password = 'invalid password';
     }
     if(password != password2){
         errors.password2 = 'passwords do not match';
     }

     let togglePassword = document.getElementById('togglePassword');
     let password = document.getElementById('password');

     togglePassword.addEventListener('click', function (e) {
        
        let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('bi-eye');
    });

    //  checkbox 

    let agree = form.querySelector('[name="agree"]').checked;
    if (agree == false){
        errors.agree = 'you must agree out terms and conditions';
    }

    // radio

    let gender = false;
    form.querySelectorAll('[name="gender"]').forEach(item => {
        if(item.checked){
            gender = true;
        }
        
    });

    if( gender === false){
        errors.gender = 'please select your Gender';
    }

    form.querySelectorAll ('.error-text').forEach(item => {
        item.textContent = ' ';
    });

    for (let item in errors){
        console.log(item);

        let errorPlaceholder = document.getElementById('error_' + item);

        if(errorPlaceholder){
            errorPlaceholder.textContent = errors[item];
        }
    }


    if (Object.keys(errors).length == 0) {
        form.submit();
    }

    // console.log(errors);




})