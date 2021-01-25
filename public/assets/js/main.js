// const { resultKeyNameFromField } = require("@apollo/client/utilities");

$(document).ready(function(){

	$(".main-menu").on('click',function(){
		var value = $(this).data('id');
		$(".desc-menu").hide();
		$(".desc-menu[data-id="+value+"]").show();

		$(".main-menu div div span").removeClass("active-menu");
		$(this).find("span").css("");

		
	});

	$(".btn-register").on('click',function(){
		$(".overlay-register").addClass('open');
	});

	$(".arrow").on('click',function(){
		$(".overlay-register").removeClass('open');
	});

	$('#register').click(function(){
		$('.registration-form fieldset:first-child').fadeIn('100');
		$('.overlay-display').addClass('overlay');
		$('.display-form').css("display", "block");
	});

	$('.close-register').click(function(){
		$('.overlay-display').removeClass('overlay');
		$('.display-form').css("display", "none");
		$('fieldset.form-bottom').css("display", "none");
	});

	$('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

	$('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	
    	parent_fieldset.find('input[type="text"],input[type="number"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(200, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    });

      // previous step
    // $('.registration-form .btn-previous').on('click', function() {
    // 	$(this).parents('fieldset').fadeOut(200, function() {
    // 		$(this).prev().fadeIn();
    // 	});
    // });

    // submit
    $('.registration-form').on('submit', function(e) {
    	$(this).find('input[type="text"],input[type="number"], input[type="password"], textarea').each(function() {
    		if ( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
	});

	$('.registration-form').on('submit', function(e) {
		$(this).find('input[type=text]').each(function(){

			var num = /[0]{1}[0-9]{9}$/;
			if($(this).val() == "" ){
				e.preventDefault();
    			$(this).addClass('input-error');
			}else{
				$(this).removeClass('input-error');
			}
		});
	});

	// $('.menu-05').click(function(){
	// 	$('.multiple-items').slick({
	// 		infinite: true,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1
	// 	});
	// });	

	$(".multiple-items").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$("input.numbers").keypress(function(event) {
		return /\d/.test(String.fromCharCode(event.keyCode));
	});

	// $("input.next-step-1").click(function(){
	// 	var num = /[0]{1}[0-9]{9}$/;
	// 	var valuenum = $('input[name=phone]').val();
	// 	if(intRegex.test(str) || floatRegex.test(str)) {
	// 		alert('I am a number');
	// 	}else{
	// 		alert('Please input correct format');
	// 		document.form1.phone.focus();
	// 		return false;
	// 	}
	// });
	$("input.next-step-1").click(function(event){
		var num = /[0]{1}[0-9]{9}$/;
		var valuenum = $('input[name=phone]').val();

		if( valuenum.match(num) ){
			return /\d/.test(String.fromCharCode(event.keyCode));
		}else{
			return false;
		}
	});

	// function allnumericplusminus(inputtxt)
	// {
	//    var numbers = /[0]{1}[0-9]{9}$/;
	// 	 if(inputtxt.value.match(numbers))
	// 	 {
	// 		 alert('Correct...Try another');
	// 		 document.form1.phone.focus();
	// 		 return true;
	// 	   }else{
	// 		 alert('Please input correct format');
	// 		 document.form1.phone.focus();
	// 		 return false;
	// 	   }
	// }


	// $("input.phoneid").on('input', function(event) {
	// 	if((event.which > 48 || event.which < 57))
	// 		$(this).val($(this).val().replace(/[^0-9]/g,''));
	// });

	
	// $("#phone-input").on("keypress keyup blur",function (event) {    
	// 	$(this).val($(this).val().replace(/[^\d].+/, ""));
	// 	if ((event.which < 48 || event.which > 57)) {
	// 		event.preventDefault();
	// 	}
	// });

	// const regex = /[0]{1}[0-9]{9}/gm;
	// const str = `0897894567`;
	// let m;

	// while ((m = regex.exec(str)) !== null) {
	// 	if (m.index === regex.lastIndex) {
	// 		regex.lastIndex++;
	// 	}
	// 	m.forEach((match, groupIndex) => {
	// 		console.log(`Found match, group ${groupIndex}: ${match}`);
	// 	});
	// }

	// $('input.phoneid').keydown(function (event) {
		// if(event.which == 48 || event.which == 49 || event.which == 50 || event.which == 51 || event.which == 52 || event.which == 53 || event.which == 54 || event.which == 55 || event.which == 56 || event.which == 57){
		// 	console.log("ถูก");
		// }else{
		// 	console.log("ไม่ถูก");
		// }
	// 	if (event.which > 48 || event.which < 57 && event.which != 8 && event.which != 0){
	// 		return value;
	// 	}
	// });
	
});

// 	$('input.phoneid').keyup(function (event) {
//         if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
// 			$(this).val(function (index, value) {
// 				return value.replace(/\D/g, "");
//           	});
//         }
// 	});
// });
// var input = document.querySelector('input.phoneid');
// input.addEventListener('keyup', function (event) {
// 	if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
// 		this.value = this.value.replace(/\D/g, "");
// 	}		
// });

// function validate(){
// 	var textphone = document.getElementById("phone-input").value;

// 	var regx = /![7-9]\d{9}/;
// 	if(regx.test(text)){
// 		document.getElementById()
// 	}
// }



// function allnumeric(inputtxt)
//    {
//       var numbers = /^[0-9]+$/;
//       if(inputtxt.value.match(numbers))
//       {
//       alert('Your Registration number has accepted....');
//       document.form1.text1.focus();
//       return true;
//       }
//       else
//       {
//       alert('Please input numeric characters only');
//       document.form1.text1.focus();
//       return false;
//       }
//    } 


function checkPasswordMatch() {
	var password = $("#txtNewPassword").val();
	var confirmPassword = $("#txtConfirmPassword").val();

	if (password != confirmPassword)
		$("#divCheckPasswordMatch").html("Passwords do not match!");
	else
		$("#divCheckPasswordMatch").html("Passwords match.");
}

// function formatPhoneNumber(phoneNumberString) {
// 	var ddd = (input[type="number"])
// 	var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
// 	var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
// 	if (match,ddd) {
// 	  return '(' + match[1] + ') ' + match[2] + '-' + match[3]
// 	}
// 	return null
//   }