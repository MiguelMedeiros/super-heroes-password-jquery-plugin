/*!
 * Super Heroes Password 1.1
 * http://www.superheroespassword.com/
 *
 * author: http://www.miguelmedeiros.com.br/
 * Copyright 2010, Miguel Medeiros Web
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

$.fn.superHeroesPassword = function(options){
	return this.each(function(){
		var defaults = 
				{ 
					path : "img/",
					hero: 'starwars'
				},
			settings = $.extend(defaults, options);

		function trigger(){
			
			if($(this).val() == ""){
				$('.'+$(this).attr("id")).hide();
			}else{
				var password_level = getPasswordStrength($(this).val());
				toggleImg($(this).attr("id"), password_level);
			}
		}

		function toggleImg(field, level){
			for(i = 0; i <= 5; i++){
				if(i == level){
					$("#" + field + "pic" + i).css("display", "inline-block");
				} else {
					$("#" + field + "pic" + i).css("display", "none");
				}
			}
		}

		function getPasswordStrength(password){
			return 0
			// if password bigger than 5
			+ +( password.length > 5 )
			// if password has both lower and uppercase characters
			+ +( /[a-z]/.test(password) && /[A-Z]/.test(password) )
			// if password has at least one number and at least 1 other character
			+ +( /\d/.test(password) && /\D/.test(password) )
			//  if password has a combination of other characters and special characters
			+ +( /[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/.test(password) && /\w/.test(password) )
			// if password bigger than 12
			+ +( password.length > 12 )
		}

		var position = $(this).position(),
			properties =
				{ 
					position: 'absolute',
					display: 'none'
				};

		for(var i = 0; i <= 5; i++){
			$(this).after("<div class='"+$(this).attr("id")+"' style='display:none;' id='" + $(this).attr("id") + "pic" + i + "'><img src='" + settings.path + settings.hero + i + ".png' /></div>");
			$("#" + $(this).attr("id") + "pic" + i).css(properties);
		}

		$(this).bind('keyup', trigger).bind('blur', trigger);
	});
};
