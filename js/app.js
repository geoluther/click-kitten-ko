// knockout js file
var Cat = function() {

	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("http://placeimg.com/300/300/animals");
	this.imageAttribution = ko.observable("http://placeimg.com");
	this.nickNames = ko.observableArray(["Killer", "Spot", "Lambchop", "Spunky"]);

	this.level = ko.computed(function() {

		var cc = this.clickCount();
		var title = "Novice";

		if ( cc > 5 && cc <= 10 ){
			title = "Advanced Beginner";
		} else	if ( cc > 10 && cc <= 25 ) {
			title = "Semi-Pro";
		} else if ( cc > 25 && cc <= 50 ) {
			title = "Pro";
		} else  if ( cc > 50 ){
			title = "Super Cuddy";
		}

		return title;

	}, this);

};

var ViewModel = function() {

	this.currentCat = ko.observable(new Cat);

	this.incrementCounter =  function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1 );
	}

};

ko.applyBindings(new ViewModel());