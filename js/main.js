(function ($) {
    'use strict';

    //form validation starts
    // variable declaration
    let fullName = $('#fullName');
    let nameErr = $('#nameErr');
    let email = $('#email');
    let emailErr = $('#emailErr');
    let phone = $('#phone');
    let phoneErr = $('#phoneErr');
    let password = $('#pass');
    let passwordErr = $('#passErr');
    let confirmPassword = $('#confirmPass');
    let confirmPasswordErr = $('#confirmPassErr');
    let message = $('#message');
    let messageErr = $('#messageErr');
    let submitBtn = $('#submitBtn');
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let numberPattern = /^(?:\+88|88)?(01[3-9]\d{8})$/;

    //calling validate function
    submitBtn.on('click',function(){
        //full name
        if(fullName.val() == ""){
            fullName.css('border', '1px solid red');
            nameErr.html("please enter your name");
            fullName.focus();
            return false;
        }

        //email
        if(email.val() == ""){
            email.css('border', '1px solid red');
            emailErr.html('please enter your email');
            email.focus();
            return false;
        }

        //email validation with regular expression
        if(email.val().match(emailPattern)){
        
        }
        else{
            email.css('border', '1px solid red');
            emailErr.html('please enter a valid email');
            email.focus();
            return false;
        }

         //phone number
        if(phone.val() == ""){
            phone.css('border', '1px solid red');
            phoneErr.html('please enter your phone number');
            phone.focus();
            return false;
        }

        //phone number validation with regular expression
        if(phone.val().match(numberPattern)){
            
        }
        else{
            phone.css('border', '1px solid red');
            phoneErr.html('please enter a valid phone number');
            phone.focus();
            return false;
        }

        //password
        if(password.val() == ""){
            password.css('border', '1px solid red');
            passwordErr.html('please enter your password');
            password.focus();
            return false;
        }

        //password
        if(password.val().length < 6){
            password.css('border', '1px solid red');
            passwordErr.html('enter at least 6 digits password');
            password.focus();
            return false;
        }

        //confirm password
        if(confirmPassword.val() !== password.val()){
            confirmPassword.css('border', '1px solid red');
            confirmPasswordErr.html('password not matched');
            confirmPassword.focus();
            return false;
        }

        //message
        if(message.val() == ""){
            message.css('border', '1px solid red');
            messageErr.html('please write a message');
            message.focus();
            return false;
        }

        if(message.val().length < 20){
            message.css('border', '1px solid red');
            messageErr.html('please write a message at least 20 characters');
            message.focus();
            return false;
        }

    });
    
    // valid fixed function
    function errValid(){
        //full name
        if(fullName.val() !== ""){
            fullName.css('borderColor', 'transparent');
            nameErr.html('');
        }

        //email
        if(email.val().match(emailPattern)){
            email.css('borderColor', 'transparent');
            emailErr.html('');
        }

        //phone number
        if(phone.val().match(numberPattern)){
            phone.css('borderColor', 'transparent');
            phoneErr.html('');
        }

        //password
        if(password.val().length >= 6){
            password.css('borderColor', 'transparent');
            passwordErr.html('');
        }

        //confirm password
        if(confirmPassword.val() === password.val()){
            confirmPassword.css('borderColor', 'transparent');
            confirmPasswordErr.html('');
        }

        //message
        if(message.val().length >= 20){
            message.css('borderColor', 'transparent');
            messageErr.html('');
        }
        
    }
    

    // calling of errValid function
    fullName.on('blur', errValid);
    email.on('blur', errValid);
    phone.on('blur', errValid);
    password.on('blur', errValid);
    confirmPassword.on('blur', errValid);
    message.on('blur', errValid);

}(jQuery));







