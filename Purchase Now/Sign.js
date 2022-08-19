
$('.toggleBtn').click(function () {
    $('.toggleBtn').toggle();
  })
  
  $('.loginBtn').click(function () {
    $('#signUp').hide();
    $('#signIn').show();
    $('.passwordResetBtn').show();
    $('.passwordReset').hide(); 
  })
   
  
  $('.passwordResetBtn').click(function () {
    $('#signUp').hide();
    $('#signIn').hide();
    $('.passwordReset').show(); 
    $('.loginBtn').show(); 
    $('.signUpBtn').hide();
  })
   
 
  $('.signUpBtn').click(function () {
    $('#signUp').show();
    $('#signIn').hide();
    $('.passwordReset').hide(); 
    $('.loginBtn').show(); 
    $('.passwordResetBtn').hide();
  })
   
 
  $('.loginBtn-mobile').click(function () {
    $('#signUp').hide();
    $('#signIn').show();
    $('.passwordReset').hide(); 
  })
   
  $('.signUpBtn-mobile').click(function () {
    $('#signUp').show();
    $('#signIn').hide();
    $('.passwordReset').hide(); 
  })
   
 
  $('.forgotPassword').click(function () {
    $('#signUp').hide();
    $('#signIn').hide();
    $('.passwordReset').show(); 
  })
