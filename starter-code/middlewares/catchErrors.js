exports.catchErrors = function(controller) {
	return function(req, res, next){
		 return controller(req, res, next).catch(next())
	}
}

exports.catchErrors = (controller) => (req, res, next) => (controller)(req, res, next).catch(next)