// knockout js file

var ViewModel = function() {

	this.clickCount = ko.observable(0);
	this.name = ko.observable("tabby");
	this.imgSrc = ko.observable("http://placeimg.com/300/300/animals");
	this.imageAttribution = ko.observable("http://placeimg.com");
	this.nickNames = ko.observableArray(["Killer", "Spot", "Lambchop", "Spunky"]);

	this.level = ko.computed(function() {

		var cc = this.clickCount();

		if (cc <= 5) {
			return "Novice";
		} else if ( cc > 5 && cc <= 10 ){
			return "Advanced Beginner";
		} else	if ( cc > 10 && cc <= 25 ) {
			return "Semi-Pro";
		} else if ( cc > 25 && cc <= 50 ) {
			return "Pro";
		} else {
			return "Super Cuddy";
		}

	}, this);

	this.incrementCounter =  function() {
		this.clickCount(this.clickCount() + 1 );
	}

};

ko.applyBindings(new ViewModel());