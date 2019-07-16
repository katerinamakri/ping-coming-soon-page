angular
	.module('mainApp')
	.controller('homeController', function(){
		var $ctrl = this;
		
		$ctrl.data = {
			email : null
		}

		var defaultError = angular.copy($ctrl.data);
		
		$ctrl.errors = angular.copy(defaultError); // initialise the $ctrl.errors object

		$ctrl.validation = function() {
			$ctrl.errors = angular.copy(defaultError);

			if (($ctrl.data.email == null) || ($ctrl.data.email == '')) {
				$ctrl.errors.email = "Whoops! It looks like you forgot to add your email";
			} else if ( !$ctrl.data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
				$ctrl.errors.email = "Please provide a valid email address";
			}
		}
	})