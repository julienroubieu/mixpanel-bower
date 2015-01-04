(function (mixpanel, undefined) {

	mixpanel.init = function(api_token) {
		console.log("Mixpanel: initialized");
	};

	mixpanel.track = function(event_name) {
		console.log("Mixpanel: " + event_name);
	};

})(window.mixpanel = window.mixpanel || {});