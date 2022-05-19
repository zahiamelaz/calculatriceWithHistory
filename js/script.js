/* index.html page1 */
$(document).ready(function(){
    valide=true;
    $('#submit').click(function(){
        if($('#email').val()== ""){
         $('#email').css('border-color','red');
         $('#email').next('.error').fadeIn('fast').text('Champ obligatoire');
         valide= false;
        }
        if($('#password').val()== ""){
            $('#password').css('border-color','red');
            $('#password').next('.error').fadeIn('fast').text('Champ obligatoire');
            valide= false;
           }
           return valide;
    });
    $('#password').keyup(function(){
        if($('#password').val().length <6 ){
            $('#password').css('border-color','red');
            $('#password').next('.error').fadeIn('fast').text('le password doit contenir au minimum 8 caractéres');
            valide= false;
           }else{
            $('#password').css('border-color','green');
            $('#password').next('.error').fadeOut();
            valide= true;
           }
           return valide;
    });
    $('#email').keyup(function(){
        if($('#email').val().indexOf('@')< 0 ){
                $('#email').css('border-color','red');
                $('#email').next('.error').fadeIn('fast').text('email doit contenir @ ');
                valide= false;
        }else if($('#email').val().indexOf('.')< 0){
            $('#email').css('border-color','red');
                $('#email').next('.error').fadeIn('fast').text('email doit contenir . ');
                valide= false;
        }else{
            $('#email').css('border-color','green');
            $('#email').next('.error').fadeOut();
            valide= true;
        }
         return valide;  
    });
});
$(document).ready(function(){
    valide=true;
    $('#Re-Password').keyup(function(){

        if($('#Password').val() === $('#Re-Password').val()){
            $('#Re-Password').css('border-color','green');
            $('#Password').css('border-color','green');
            $('#Re-Password').next('.error').fadeOut();
            valide= true;
             
        }else{
            $('#Re-Password').css('border-color','red');
             $('#Re-Password').next('.error').fadeIn('fast').text('Pas identique ');
            valide= false; 
        }
        return valide;    
    });    
 });
 /* index.html page2*/
 $(document).ready(function(){
    valide=true;
    $('.btn').click(function(){

    if($('#nom').val()== ""){
        $('#nom').css('border-color','red');
        $('#nom').next('.error').fadeIn('fast').text('Champ obligatoire');
        valide= false;
       }else if(!$('#nom').val().match(/^[a-z]+$/i)){
            $('#nom').css('border-color','red');
             $('#nom').next('.error').fadeIn('fast').text('Pas de nombre ');
            valide= false;  
         }else{
         $('#nom').css('border-color','green');
         $('#nom').next('.error').fadeOut();
         valide= true;
         }
          
       if($('#prenom').val()== ""){
        $('#prenom').css('border-color','red');
        $('#prenom').next('.error').fadeIn('fast').text('Champ obligatoire');
        valide= false;
       }else if(!$('#prenom').val().match(/^[a-zA-Z]+$/i)){
            $('#prenom').css('border-color','red');
             $('#prenom').next('.error').fadeIn('fast').text('Pas de caracters');
            valide= false;  
         }else{
         $('#prenom').css('border-color','green');
         $('#prenom').next('.error').fadeOut();
         valide= true;
         }
       if($('#inputEmail4').val()== ""){
        $('#inputEmail4').css('border-color','red');
        $('#inputEmail4').next('.error').fadeIn('fast').text('Champ obligatoire');
        valide= false;
        }else if(!$('#inputEmail4').val().match(/^([a-z0-9_.+-])+\@([a-zA-Z0-9-]+\.)+([a-zA-Z0-9]{2,4} )+$/)){
            $('#inputEmail4').css('border-color','red');
            $('#inputEmail4').next('.error').fadeIn('fast').text('Verifier votre email');
            valide= false;  
        }else{
        $('#inputPassword4').css('border-color','green');
        $('#inputPassword4').next('.error').fadeOut();
        valide= true;
       }
       if($('#inputPassword4').val()== ""){
        $('#inputPassword4').css('border-color','red');
        $('#inputPassword4').next('.error').fadeIn('fast').text('Champ obligatoire');
        valide= false;
        }else if(!$('#inputPassword4').val().match(/^[a-zA-Z0-9] {8} +$/i)){
            $('#inputPassword4').css('border-color','red');
            $('#inputPassword4').next('.error').fadeIn('fast').text('Verifier votre email');
            valide= false;  
        }else{
        $('#inputPassword4').css('border-color','green');
        $('#inputPassword4').next('.error').fadeOut();
        valide= true;
       }
       if($('#number').val()== ""){
        $('#number').css('border-color','red');
        $('#number').next('.error').fadeIn('fast').text('Champ obligatoire');
        valide= false;
       }else if(!$('#number').val().match(/^[0-9] {10} +$/i)){
            $('#number').css('border-color','red');
             $('#number').next('.error').fadeIn('fast').text('Pas de caracters');
            valide= false;  
         }else{
         $('#number').css('border-color','green');
         $('#number').next('.error').fadeOut();
         valide= true;
         }
        return valide ;
    });
 });
    
       
       

// $('#nom').keyup(function(){
